import Link from "next/link";
import type { Metadata } from "next";
import { talkGroups } from "../../content/news";

export const metadata: Metadata = {
  title: "Talks and videos",
  description: "Recorded talks by Gray Atherton and Liam Cross on board games, autism, synchrony and anthropomorphism.",
};

export default function Talks() {
  return (
    <>
      <section className="section pb-6">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm"><Link href="/news" className="link-chip">
            <span aria-hidden="true">←</span>
            News and press
          </Link></nav>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Talks and videos</h1>
          <p className="prose-body mt-4">
            Talks we have given on board games, autism, synchrony and anthropomorphism.
          </p>
        </div>
      </section>
      {talkGroups.map((g) => (
        <section key={g.heading} className="section pt-6 sm:pt-8">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">{g.heading}</h2>
            <ul className="mt-6 grid gap-8 lg:grid-cols-2">
              {g.talks.map((t) => (
                <li key={t.id}>
                  <iframe
                    className="card aspect-video w-full bg-ink"
                    src={`https://www.youtube-nocookie.com/embed/${t.id}`}
                    title={t.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <p className="mt-3 font-serif text-lg font-bold leading-snug">{t.title}</p>
                  {(t.venue || t.date) && (
                    <p className="text-sm text-ink-soft">{[t.venue, t.date].filter(Boolean).join(", ")}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
