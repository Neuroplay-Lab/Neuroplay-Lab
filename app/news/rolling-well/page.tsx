import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { rollingWell as rw } from "../../content/news";
import UpdatesSignup from "../../components/UpdatesSignup";

export const metadata: Metadata = {
  title: "Rolling Well",
  description: "Rolling Well is a conference on gaming for health and wellbeing, co-organised by Gray Atherton and Liam Cross.",
};

export default function RollingWell() {
  return (
    <>
      <section className="section pb-8">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm"><Link href="/news" className="link">News and press</Link></nav>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">Rolling Well</h1>
          <p className="prose-body mt-6">{rw.what}</p>
          <p className="mt-6">
            <a href={rw.site} rel="noopener noreferrer" className="btn-primary text-lg">Visit rollingwell.org.uk</a>
          </p>
        </div>
      </section>

      {/* Next dates, or a notification sign-up */}
      <section className="border-y-2 border-ink bg-lavender section">
        <div className="container-page">
          {rw.next ? (
            <>
              <h2 className="text-3xl sm:text-4xl">Next conference</h2>
              <p className="mt-3 text-xl font-semibold">{rw.next.dates}, {rw.next.venue}</p>
              <p className="mt-5"><a href={rw.next.href} rel="noopener noreferrer" className="btn-secondary">Find out more</a></p>
            </>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <h2 className="text-3xl sm:text-4xl">Hear about the next Rolling Well</h2>
                <p className="mt-3 max-w-prose text-lg">The next dates haven&apos;t been announced. Leave your email and we&apos;ll tell you when they are.</p>
              </div>
              <UpdatesSignup list="Rolling Well" />
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Past conferences</h2>
          <ul className="mt-6 divide-y-2 divide-ink border-y-2 border-ink">
            {rw.editions.map((e) => (
              <li key={e.year} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-6">
                <span className="font-serif text-2xl font-extrabold">{e.year}</span>
                <span>
                  <span className="block font-semibold">{e.dates}, {e.venue}</span>
                  <span className="text-ink-soft">{e.note}</span>
                </span>
                <a href={e.href} rel="noopener noreferrer" className="link">Programme</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {rw.photos.length > 0 && (
        <section className="border-t-2 border-ink bg-paper section">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Photographs</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rw.photos.map((p) => (
                <li key={p.src} className="card overflow-hidden">
                  <Image src={p.src} alt={p.alt} width={900} height={600} className="h-auto w-full" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
