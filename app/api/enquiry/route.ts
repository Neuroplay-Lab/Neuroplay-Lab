import { NextResponse } from "next/server";
import { site } from "../../content/site";

// Enquiries arrive labelled by route. Each route can go to its own inbox via env vars;
// all fall back to ENQUIRY_TO_DEFAULT, so one inbox works too.
const routes = {
  consultancy: { label: "Consultancy", env: "ENQUIRY_TO_CONSULTANCY" },
  press: { label: "Press", env: "ENQUIRY_TO_PRESS" },
  academic: { label: "PhD and academic", env: "ENQUIRY_TO_ACADEMIC" },
  general: { label: "General", env: "ENQUIRY_TO_GENERAL" },
} as const;

const clean = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const htmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => htmlEntities[character]);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ ok: true }); // honeypot

  const key = (clean(body.route, 20) || "general") as keyof typeof routes;
  const route = routes[key] ?? routes.general;
  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const message = clean(body.message);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const to = process.env[route.env] || process.env.ENQUIRY_TO_DEFAULT;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !apiKey) {
    console.warn("Enquiry not sent: set RESEND_API_KEY and ENQUIRY_TO_DEFAULT.");
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const studio = clean(body.studio, 200);
  const project = clean(body.project, 200);
  const lines = [`You have received a new enquiry from Neuroplay Lab:`, ``, `Name: ${name}`, `Email: ${email}`];
  if (studio) lines.push(`Studio: ${studio}`);
  if (project) lines.push(`Project: ${project}`);
  const stage = clean(body.stage, 100);
  if (stage) lines.push(`Stage: ${stage}`);
  const text = [...lines, "", message].join("\n");
  const details = [
    ["Name", name],
    ["Email", email],
    ["Studio", studio],
    ["Project", project],
    ["Stage", stage],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#5b5148;font-weight:700;vertical-align:top;">${label}</td><td style="padding:8px 12px;color:#1A1613;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = `
    <div style="margin:0;background-color:#F4EEDF;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#1A1613;">
      <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;border:2px solid #1A1613;border-radius:12px;border-spacing:0;background-color:#FBF8F0;box-shadow:6px 6px 0 #1A1613;">
        <tr>
          <td style="padding:24px 28px;background-color:#00FFA5;border-bottom:2px solid #1A1613;border-radius:10px 10px 0 0;">
            <img src="${site.url}/brand/logo-horizontal.webp" alt="Neuroplay Lab" width="220" style="display:block;width:220px;max-width:100%;height:auto;">
            <p style="margin:20px 0 0;font-size:22px;font-weight:700;">New ${escapeHtml(route.label)} enquiry</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;">
            <p style="margin:0 0 16px;line-height:1.6;">You have received a new enquiry from the Neuroplay Lab website.</p>
            <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #d9d2c3;border-radius:8px;">
              ${details}
            </table>
            <h2 style="margin:24px 0 8px;font-size:18px;">Message</h2>
            <div style="padding:16px;border:1px solid #d9d2c3;border-radius:8px;background-color:#F4EEDF;line-height:1.6;overflow-wrap:anywhere;">${escapeHtml(message).replace(/\r?\n/g, "<br>")}</div>
            <table role="presentation" align="right" style="margin-top:16px;border-spacing:0;">
              <tr>
                <td style="border:2px solid #1A1613;border-radius:8px;background-color:#00FFA5;box-shadow:4px 4px 0 #1A1613;">
                  <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:10px 20px;color:#1A1613;font-weight:700;text-decoration:none;">Reply</a>
                </td>
              </tr>
            </table>
            <div style="clear:both;"></div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;border-top:1px solid #d9d2c3;color:#5b5148;font-size:12px;">
            Sent via <a href="${site.url}" style="color:#006B45;font-weight:700;">neuroplaylab.com</a>
          </td>
        </tr>
      </table>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "Neuroplay Lab site <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `[${route.label}] ${[studio, project].filter(Boolean).join(" - ") || name}`,
      text,
      html,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
