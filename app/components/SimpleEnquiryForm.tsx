"use client";

import { useState, type FormEvent } from "react";
import { site } from "../content/site";

type Route = "consultancy" | "press" | "academic" | "general";
const field = "mt-1 block w-full rounded-lg border-2 border-ink bg-white px-3 py-2.5 text-ink";

/** Short labelled contact form. `route` decides which inbox and subject label it gets. */
export default function SimpleEnquiryForm({ route, messageLabel = "Your message" }: { route: Route; messageLabel?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, route }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card bg-green p-8">
        <h3 className="text-2xl">Message sent</h3>
        <p className="mt-2">Thanks. We&apos;ll reply by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 bg-cream p-6 sm:p-8">
      <div className="hidden" aria-hidden>
        <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-semibold">Your name
          <input className={field} type="text" name="name" required autoComplete="name" />
        </label>
        <label className="font-semibold">Email
          <input className={field} type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <label className="block font-semibold">{messageLabel}
        <textarea className={field} name="message" rows={5} required />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="font-semibold">
            Your message didn&apos;t send. Email us at{" "}
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a> instead.
          </p>
        )}
      </div>
    </form>
  );
}
