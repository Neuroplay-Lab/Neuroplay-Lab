"use client";

import { useState, type FormEvent } from "react";
import { site } from "../content/site";

/** Update-list signup. For now each signup is emailed to the Lab; swap the fetch for a
 *  mailing-list provider (Mailchimp, Buttondown, etc.) when one is chosen. */
export default function UpdatesSignup({ list }: { list: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, route: "updates", name: `${list} update list`, message: `Please add me to the ${list} update list.` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p role="status" className="card bg-green p-6 text-lg font-semibold">Thanks, you&apos;re on the list.</p>;
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="hidden" aria-hidden>
        <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="flex-1 font-semibold">Email address
        <input type="email" name="email" required autoComplete="email" className="mt-1 block w-full rounded-lg border-2 border-ink bg-white px-3 py-2.5 text-ink" />
      </label>
      <button type="submit" className="btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending" : "Keep me posted"}</button>
      {status === "error" && (
        <p role="alert" className="font-semibold sm:basis-full">
          That didn&apos;t send. Email <a className="link" href={`mailto:${site.email}`}>{site.email}</a> instead.
        </p>
      )}
    </form>
  );
}
