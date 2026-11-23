"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("fail");
    }
    setTimeout(() => setState("idle"), 2500);
  }
  return (
    <>
      <button type="button" onClick={copy} className="btn-secondary btn-sm">{label}</button>
      <span role="status" className="text-sm font-semibold">
        {state === "done" ? "Copied" : state === "fail" ? "Couldn't copy: select the text instead" : ""}
      </span>
    </>
  );
}
