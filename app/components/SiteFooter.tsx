import Image from "next/image";
import Link from "next/link";
import { site, pressKit } from "../content/site";

export default function SiteFooter() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-horizontal.webp" alt="Neuroplay Lab" width={900} height={209} className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-cream/80">{site.description}</p>
        </div>

        <div>
          <h2 className="font-sans text-base font-bold">Get in touch</h2>
          <p className="mt-3">
            <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4 hover:text-green">
              {site.email}
            </a>
          </p>
          <p className="mt-3">
            <Link href={pressKit.href} className="underline underline-offset-4 hover:text-green">
              Press kit
            </Link>
          </p>
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="underline underline-offset-4 hover:text-green" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-sans text-base font-bold">Based at</h2>
          <p className="mt-3 text-cream/80">University of Plymouth, UK</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/privacy" className="underline underline-offset-4 hover:text-green">Privacy notice</Link></li>
            <li><Link href="/cookies" className="underline underline-offset-4 hover:text-green">Cookie notice</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20">
        <p className="container-page py-5 text-sm text-cream/70">
          © {new Date().getFullYear()} Neuroplay Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
