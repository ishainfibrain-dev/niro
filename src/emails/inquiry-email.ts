export type InquiryEmailData = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  message: string;
  submittedAt: Date;
};

export function buildInquiryEmail(data: InquiryEmailData) {
  const submitted = data.submittedAt.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const phoneHref = `tel:${data.phone.replace(/[^\d+]/g, "")}`;
  const rows = [
    ["Business name", escapeHtml(data.businessName)],
    ["Contact name", escapeHtml(data.contactName)],
    [
      "Email",
      `<a href="mailto:${escapeAttr(data.email)}" style="color:#0743FC;text-decoration:none;">${escapeHtml(data.email)}</a>`,
    ],
    [
      "Phone",
      `<a href="${escapeAttr(phoneHref)}" style="color:#0743FC;text-decoration:none;">${escapeHtml(data.phone)}</a>`,
    ],
    ["Business category", escapeHtml(data.category || "—")],
    ["City / location", escapeHtml(data.city || "—")],
    ["Message", escapeHtml(data.message || "—").replace(/\n/g, "<br>")],
    ["Submitted", escapeHtml(submitted)],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `<tr>
        <td style="padding:14px 8px;border-bottom:1px solid #e6e8ee;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:700;color:#111111;width:168px;vertical-align:top;">${label}</td>
        <td style="padding:14px 8px;border-bottom:1px solid #e6e8ee;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#3a3f4b;vertical-align:top;">${value}</td>
      </tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f2f3f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f3f5;margin:0;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;">
            <tr>
              <td align="center" style="background:#070d18;padding:28px 24px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:30px;line-height:34px;font-weight:800;letter-spacing:3px;color:#ffffff;">NIRO</div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:26px 28px 0;background:#ffffff;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" valign="middle" width="54" height="54" style="width:54px;height:54px;background:#eefbf9;border-radius:27px;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:54px;color:#0b3b46;">&#9993;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:28px;font-weight:700;color:#111111;">
                New Business Inquiry
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 18px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;color:#6b7280;">
                A new business has filled the inquiry form on the NIRO website.
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 28px;background:#ffffff;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e6e8ee;">
                  ${tableRows}
                </table>
              </td>
            </tr>
          </table>
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#9aa0ab;padding:14px 12px 4px;">
            &copy; ${data.submittedAt.getFullYear()} NIRO. All Rights Reserved.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "New Business Inquiry",
    "A new business has filled the inquiry form on the NIRO website.",
    "",
    `Business name: ${data.businessName}`,
    `Contact name: ${data.contactName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Business category: ${data.category || "—"}`,
    `City / location: ${data.city || "—"}`,
    `Message: ${data.message || "—"}`,
    `Submitted: ${submitted}`,
  ].join("\n");

  return { html, text };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value: string) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
