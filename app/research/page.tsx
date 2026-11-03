import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { topics } from "../content/research";
import SimpleEnquiryForm from "../components/SimpleEnquiryForm";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Peer-reviewed research on board games and neurodivergence from the Neuroplay Lab at the University of Plymouth, plus open data, measures and code.",
};

export default function Research() {
  const lead = topics.find((t) => t.lead)!;
  const others = topics.filter((t) => !t.lead);

  return (
    <>
      <section className="section pb-8 sm:pb-12">
        <div className="container-page">
          <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">Research</h1>
          <p className="prose-body mt-6">
            We have published numerous peer-reviewed papers on tabletop gaming for social
            good, and co-founded the Games and Psychology Research Group at the University of
            Plymouth.
          </p>
        </div>
      </section>

      {/* Lead topic */}
      <section className="pb-14 sm:pb-20">
        <div className="container-page">
          <Link
            href={`/research/${lead.slug}`}
            className={`card grid overflow-hidden shadow-hard-lg ${lead.tone} md:grid-cols-2 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard`}
          >
            <div className="relative aspect-[3/2] md:aspect-auto md:min-h-[320px]">
              <Image src={lead.image.src} alt={lead.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" priority />
            </div>
            <div className="flex flex-col justify-center gap-4 border-t-2 border-ink p-7 sm:p-10 md:border-l-2 md:border-t-0">
              <h2 className="text-3xl sm:text-4xl">{lead.title}</h2>
              <p className="text-lg">{lead.short}</p>
              <span className="btn-secondary self-start">Read about this research</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Other work */}
      <section className="border-y-2 border-ink bg-sand section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Other work</h2>
          <p className="prose-body mt-3">
            Alongside our work on games, we research neurodiversity, anthropomorphism, theory of
            mind and embodied psychology.
          </p>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/research/${t.slug}`}
                  className={`card flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm ${t.tone}`}
                >
                  <div className="relative aspect-[3/2] border-b-2 border-ink">
                    <Image src={t.image.src} alt={t.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h3 className="text-2xl">{t.title}</h3>
                    <p>{t.short}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publications and measures */}
      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Link href="/research/publications" className="card bg-paper p-7 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm">
            <h2 className="text-2xl sm:text-3xl">Publications</h2>
            <p className="mt-2">Every paper, filterable by topic and year, with abstracts and DOI links.</p>
          </Link>
          <Link href="/research/measures-and-code" className="card bg-paper p-7 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm">
            <h2 className="text-2xl sm:text-3xl">Measures and code</h2>
            <p className="mt-2">Instruments, software and data you can use in your own research.</p>
          </Link>
        </div>
      </section>

      {/* Academic route */}
      <section className="border-t-2 border-ink bg-paper section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Study or collaborate with us</h2>
            <p className="prose-body mt-4">
              Questions about our research, PhD study or working together? Send us a message.
            </p>
          </div>
          <SimpleEnquiryForm route="academic" messageLabel="How can we help?" />
        </div>
      </section>
    </>
  );
}
