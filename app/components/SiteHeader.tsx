"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, ctaLink, pressKit } from "../content/site";

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  const linkClass = (href: string) =>
    `font-semibold underline-offset-8 hover:underline ${isActive(href) ? "underline decoration-2" : ""}`;

  return (
    <header className="sticky top-0 z-30 border-b-2 border-ink bg-cream">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Neuroplay Lab, home">
          <Image
            src="/brand/logo-horizontal.webp"
            alt="Neuroplay Lab"
            width={900}
            height={209}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={linkClass(n.href)} aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href={pressKit.href} className="text-sm font-medium text-ink-soft underline underline-offset-4 hover:text-ink">
            {pressKit.label}
          </Link>
          <Link href={ctaLink.href} className="btn-primary btn-sm">
            {ctaLink.label}
          </Link>
        </nav>

        <button
          type="button"
          className="btn-secondary btn-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t-2 border-ink bg-paper lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4 text-lg">
            {[...nav, ctaLink, pressKit].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`block rounded-lg px-3 py-3 font-semibold ${n.href === ctaLink.href ? "bg-green" : ""} ${isActive(n.href) ? "underline" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
