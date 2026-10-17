import { NextResponse } from "next/server";

// Enquiries arrive labelled by route. Each route can go to its own inbox via env vars;
// all fall back to ENQUIRY_TO_DEFAULT, so one inbox works too.
const routes = {
  consultancy: { label: "Consultancy", env: "ENQUIRY_TO_CONSULTANCY" },
  press: { label: "Press", env: "ENQUIRY_TO_PRESS" },
  academic: { label: "PhD and academic", env: "ENQUIRY_TO_ACADEMIC" },
  general: { label: "General", env: "ENQUIRY_TO_GENERAL" },
} as const;

const clean = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

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
  const lines = [`Route: ${route.label}`, `Name: ${name}`, `Email: ${email}`];
  if (studio) lines.push(`Studio: ${studio}`);
  if (project) lines.push(`Project: ${project}`);
  const stage = clean(body.stage, 100);
  if (stage) lines.push(`Stage: ${stage}`);
  const text = [...lines, "", message].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "Neuroplay Lab site <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `[${route.label}] ${[studio, project].filter(Boolean).join(" - ") || name}`,
      text,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
