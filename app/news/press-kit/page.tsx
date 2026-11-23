import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { pressKit, pressMailto } from "../../content/news";
import { topics } from "../../content/research";
import { site } from "../../content/site";
import CopyButton from "../../components/CopyButton";
import SimpleEnquiryForm from "../../components/SimpleEnquiryForm";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Descriptions, biographies, key facts, logos and press contact for the Neuroplay Lab.",
};

const words = (t: string) => t.trim().split(/\s+/).length;

export default function PressKit() {
  const descriptions = [
    { title: "50-word description", text: pressKit.description50 },
    { title: "150-word description", text: pressKit.description150 },
  ];
  return (
    <>
      <section className="section pb-8">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm"><Link href="/news" className="link-chip inline-flex items-center gap-2">
          <span aria-hidden="true">←</span>
          News and press
          </Link></nav>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">Press kit</h1>
          <p className="prose-body mt-6">
            Everything you need to write about the Neuroplay Lab. For anything else, contact us
            directly.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-4">
            <a href={pressMailto} className="btn-primary text-lg">{site.email}</a>
            <a href="#press-enquiry" className="link-chip">Or use the enquiry form</a>
          </p>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-sand section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">About the Lab</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {descriptions.map((d) => (
              <div key={d.title} className="card flex flex-col gap-4 bg-paper p-6">
                <h3 className="text-xl">{d.title} <span className="font-sans text-sm font-semibold text-ink-soft">({words(d.text)} words)</span></h3>
                <p className="leading-relaxed">{d.text}</p>
                <div className="mt-auto flex flex-wrap items-center gap-3"><CopyButton text={d.text} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Key facts</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pressKit.stats.map((s, i) => (
              <li key={s.figure} className={`card p-6 ${["bg-green", "bg-pink", "bg-sky", "bg-lavender"][i % 4]}`}>
                <p className="font-serif text-3xl font-extrabold">{s.figure}</p>
                <p className="mt-2">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-paper section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Biographies</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {pressKit.bios.map((b) => (
              <div key={b.name}>
                <h3 className="text-2xl">{b.name}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{b.text}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3"><CopyButton text={b.text} /></div>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-2xl">Can comment on</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {topics.map((t) => (
              <li key={t.slug}>
                <Link href={`/research/${t.slug}`} className="inline-block rounded-full border-2 border-ink bg-cream px-4 py-2 font-semibold hover:bg-sand">{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {pressKit.headshots.length > 0 && (
        <section className="section">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Headshots</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pressKit.headshots.map((h) => (
                <li key={h.src} className="card overflow-hidden bg-paper">
                  <Image src={h.src} alt={h.alt} width={600} height={600} className="h-auto w-full" />
                  <div className="flex items-center justify-between gap-2 border-t-2 border-ink p-4">
                    <span className="font-semibold">{h.name}</span>
                    <a href={h.src} download className="link text-sm">Download</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t-2 border-ink bg-sand section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl">Logos</h2>
            <a href="/press-kit/neuroplay-lab-logos.zip" download className="btn-secondary btn-sm">Download all (ZIP)</a>
          </div>
          <p className="prose-body mt-3">Transparent PNG files. Please don&apos;t recolour, stretch or add effects.</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressKit.logos.map((l) => (
              <li key={l.file} className="card overflow-hidden bg-paper">
                <div className={`flex h-44 items-center justify-center p-6 ${l.on}`}>
                  <Image src={`/press-kit/${l.file}`} alt={`Neuroplay Lab logo: ${l.name}`} width={600} height={300} className="max-h-full w-auto object-contain" />
                </div>
                <div className="flex items-center justify-between gap-2 border-t-2 border-ink p-4">
                  <span className="font-semibold">{l.name}</span>
                  <a href={`/press-kit/${l.file}`} download className="link text-sm">Download PNG</a>
                </div>
              </li>
            )).slice(0, 3)}
          </ul>
        </div>
      </section>

      <section id="press-enquiry" className="scroll-mt-24 border-t-2 border-ink bg-paper section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Press enquiries</h2>
            <p className="prose-body mt-4">
              Email <a className="link" href={pressMailto}>{site.email}</a>{" "}or tell us what you&apos;re working on and when you need to hear from us.
            </p>
          </div>
          <SimpleEnquiryForm route="press" messageLabel="What are you working on, and what is your deadline?" />
        </div>
      </section>
    </>
  );
}
