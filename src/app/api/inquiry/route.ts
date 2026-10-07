import nodemailer from "nodemailer";
import { buildInquiryEmail } from "@/emails/inquiry-email";

const INQUIRY_EMAIL = "sanjay.infibrain@outlook.com";

type InquiryBody = {
  businessName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  category?: string;
  city?: string;
  message?: string;
  companyWebsite?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_WORDS = 250;

function getWordCount(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function clean(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: InquiryBody;
  try {
    body = (await request.json()) as InquiryBody;
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  if (clean(body.companyWebsite, 200)) {
    return Response.json({ ok: true });
  }

  const businessName = clean(body.businessName, 120);
  const contactName = clean(body.contactName, 120);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 10);
  const category = clean(body.category, 120);
  const city = clean(body.city, 120);
  const message = clean(body.message, 5000);
  if (
    businessName.length < 2 ||
    contactName.length < 2 ||
    !emailPattern.test(email) ||
    !/^\d{10}$/.test(phone) ||
    getWordCount(message) > MAX_MESSAGE_WORDS
  ) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    console.error("SMTP_USER or SMTP_PASS is not set");
    return Response.json({ ok: false, error: "send" }, { status: 502 });
  }

  const emailContent = buildInquiryEmail({
    businessName,
    contactName,
    email,
    phone,
    category,
    city,
    message,
    submittedAt: new Date(),
  });
  const port = Number(process.env.SMTP_PORT || 587);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `NIRO <${smtpUser}>`,
      to: INQUIRY_EMAIL,
      replyTo: email,
      subject: `NIRO business inquiry — ${businessName}`,
      text: emailContent.text,
      html: emailContent.html,
    });
  } catch (error) {
    console.error("Gmail inquiry email failed", error instanceof Error ? error.message : "send failed");
    return Response.json({ ok: false, error: "send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
