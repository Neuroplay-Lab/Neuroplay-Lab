"use client";

import { useState, type FormEvent } from "react";
import { site } from "../content/site";

const stages = ["Idea or concept", "Prototype", "Playtesting", "Ready for production", "Already released"];
type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 block w-full rounded-lg border-2 border-ink bg-white px-3 py-2.5 text-ink";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, route: "consultancy" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card bg-green p-8">
        <h3 className="text-2xl">Enquiry sent</h3>
        <p className="mt-2">Thanks. We&apos;ll reply by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 bg-cream p-6 sm:p-8">
      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hidden" aria-hidden>
        <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-semibold">Your name
          <input className={field} type="text" name="name" required autoComplete="name" />
        </label>
        <label className="font-semibold">Studio or publisher
          <input className={field} type="text" name="studio" required autoComplete="organization" />
        </label>
      </div>
      <label className="block font-semibold">Game or project
        <input className={field} type="text" name="project" required />
      </label>
      <label className="block font-semibold">Stage of development
        <select className={field} name="stage" required defaultValue="">
          <option value="" disabled>Choose a stage</option>
          {stages.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="block font-semibold">What are you looking for?
        <textarea className={field} name="message" rows={5} required />
      </label>
      <label className="block font-semibold">Email
        <input className={field} type="email" name="email" required autoComplete="email" />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="font-semibold text-ink">
            Your enquiry didn&apos;t send. Email us at{" "}
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a> instead.
          </p>
        )}
      </div>
    </form>
  );
}
