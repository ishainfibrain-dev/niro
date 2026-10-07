"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useI18n } from "@/i18n/language";

type InquiryContextValue = {
  openInquiry: () => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

type FormState = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  message: string;
  companyWebsite: string;
};

type FieldErrors = Partial<Record<"businessName" | "contactName" | "email" | "phone", string>>;

const emptyForm: FormState = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  category: "",
  city: "",
  message: "",
  companyWebsite: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <InquiryContext.Provider value={{ openInquiry: () => setOpen(true) }}>
      {children}
      {open && <InquiryDialog onClose={() => setOpen(false)} />}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within InquiryProvider");
  }
  return context;
}

function InquiryDialog({ onClose }: { onClose: () => void }) {
  const { t } = useI18n();
  const copy = t.inquiry;
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sendError, setSendError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const setField = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (key in errors) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const validate = () => {
    const next: FieldErrors = {};
    if (form.businessName.trim().length < 2) next.businessName = copy.errors.businessName;
    if (form.contactName.trim().length < 2) next.contactName = copy.errors.contactName;
    if (!emailPattern.test(form.email.trim())) next.email = copy.errors.email;
    if (!/^\d{10}$/.test(form.phone)) next.phone = copy.errors.phone;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSendError("");
    if (!validate()) return;
    setSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        setSendError(copy.errors.send);
        return;
      }
      setSubmitted(true);
    } catch {
      setSendError(copy.errors.send);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        className="w-full max-w-[560px] max-h-[min(92vh,820px)] overflow-y-auto rounded-2xl border border-[#24345E] bg-[#070d18] p-6 sm:p-7 shadow-[0_24px_80px_rgba(7,67,252,0.25)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="inquiry-title" className="text-white text-[24px] leading-[32px] font-bold">
              {copy.title}
            </h2>
            {!submitted && (
              <p className="mt-2 text-[#9CA3AF] text-[14px] leading-[22px]">{copy.subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="text-white/70 hover:text-white text-2xl leading-none px-1 cursor-pointer"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="mt-6 text-white text-[16px] leading-[26px]">{copy.success}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
            <Field
              label={copy.businessName}
              required
              value={form.businessName}
              error={errors.businessName}
              onChange={(value) => setField("businessName", value)}
            />
            <Field
              label={copy.contactName}
              required
              value={form.contactName}
              error={errors.contactName}
              onChange={(value) => setField("contactName", value)}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={copy.email}
                required
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(value) => setField("email", value)}
              />
              <Field
                label={copy.phone}
                required
                type="tel"
                value={form.phone}
                error={errors.phone}
                inputMode="numeric"
                maxLength={10}
                onChange={(value) => setField("phone", value.replace(/\D/g, "").slice(0, 10))}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={copy.category}
                hint={copy.optional}
                value={form.category}
                onChange={(value) => setField("category", value)}
              />
              <Field
                label={copy.city}
                hint={copy.optional}
                value={form.city}
                onChange={(value) => setField("city", value)}
              />
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-[13px] text-[#E2E8F0]">
                {copy.message}{" "}
                <span className="text-[#9CA3AF] font-normal">({copy.optional})</span>
              </span>
              <textarea
                value={form.message}
                onChange={(event) => setField("message", event.target.value)}
                rows={4}
                className="w-full rounded-xl border border-[#15203D] bg-black/40 px-3.5 py-3 text-[15px] text-white outline-none focus:border-[#4DD7CB]"
              />
            </label>
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={(event) => setField("companyWebsite", event.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            {sendError && <p className="text-[13px] text-red-400">{sendError}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0743FC] to-[#4DD7CB] text-white font-semibold text-[15.5px] disabled:opacity-60 cursor-pointer"
            >
              {submitting ? copy.sending : copy.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  hint,
  type = "text",
  inputMode,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  hint?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] text-[#E2E8F0]">
        {label}
        {required && <span className="text-[#4DD7CB]"> *</span>}
        {hint && <span className="text-[#9CA3AF] font-normal"> ({hint})</span>}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-xl border bg-black/40 px-3.5 py-3 text-[15px] text-white outline-none focus:border-[#4DD7CB] ${
          error ? "border-red-400" : "border-[#15203D]"
        }`}
      />
      {error && <span className="text-[12px] text-red-400">{error}</span>}
    </label>
  );
}
