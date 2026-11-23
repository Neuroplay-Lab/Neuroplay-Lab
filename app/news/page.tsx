import Link from "next/link";
import type { Metadata } from "next";
import { featuredCoverage, allCoverage, pressMailto } from "../content/news";
import SimpleEnquiryForm from "../components/SimpleEnquiryForm";

export const metadata: Metadata = {
  title: "News and press",
  description:
    "Press coverage, the press kit, talks and videos, and the Rolling Well conference from the Neuroplay Lab.",
};

const tones = ["bg-green", "bg-sky", "bg-pink", "bg-lavender"];

export default function News() {
  return (
    <>
      <section className="section pb-8 sm:pb-12">
        <div className="container-page">
          <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">News and press</h1>
          <p className="prose-body mt-6">
            Our research has been covered by Newsweek, Forbes, the New York Times Magazine and
            Scientific American. Journalists can find biographies, images and logos in the press kit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/news/press-kit" className="btn-primary text-lg">Press kit</Link>
            <a href={pressMailto} className="btn-secondary text-lg">Email the Lab</a>
          </div>
        </div>
      </section>

      {/* N1 Featured coverage */}
      {featuredCoverage.length > 0 && (
        <section className="border-y-2 border-ink bg-sand section">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Featured coverage</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCoverage.map((p, i) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    rel="noopener noreferrer"
                    className="card flex h-full flex-col overflow-hidden bg-paper transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm"
                  >
                    <span className={`border-b-2 border-ink px-5 py-3 font-serif text-lg font-extrabold uppercase leading-tight tracking-wide ${tones[i % tones.length]}`}>
                      {p.publisher}
                    </span>
                    <span className="flex flex-1 flex-col gap-2 p-5">
                      <span className="font-serif text-lg font-bold leading-snug">{p.title}</span>
                      <span className="mt-auto pt-2 text-sm text-ink-soft">{p.date}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/news/coverage" className="link-chip">See all coverage ({allCoverage.length} items)</Link>
            </p>
          </div>
        </section>
      )}

      {/* Other parts of the section */}
      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            { href: "/news/press-kit", title: "Press kit", text: "Descriptions, biographies, key facts, logos and a direct contact.", tone: "bg-green" },
            { href: "/news/talks", title: "Talks and videos", text: "Recorded talks on board games, autism, synchrony and anthropomorphism.", tone: "bg-sky" },
            { href: "/news/rolling-well", title: "Rolling Well", text: "Our conference on gaming for health and wellbeing.", tone: "bg-lavender" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className={`card p-7 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm ${c.tone}`}>
              <h2 className="text-2xl sm:text-3xl">{c.title}</h2>
              <p className="mt-2">{c.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Press enquiry route */}
      <section id="press-enquiry" className="scroll-mt-24 border-t-2 border-ink bg-paper section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Press enquiries</h2>
            <p className="prose-body mt-4">
              Tell us what you&apos;re working on and when you need to hear from us.
            </p>
          </div>
          <SimpleEnquiryForm route="press" messageLabel="What are you working on, and what is your deadline?" />
        </div>
      </section>
    </>
  );
}
