import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { topics, publicationsFor, pressFor } from "../../content/research";
import { site } from "../../content/site";
import PublicationItem from "../../components/PublicationItem";

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const t = topics.find((x) => x.slug === topic);
  return t ? { title: t.title, description: t.short } : {};
}

export default async function TopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = topics.find((x) => x.slug === slug);
  if (!topic) notFound();

  const pubs = publicationsFor(topic);
  const featured = pubs.filter((p) => p.featured).slice(0, 4);
  const rest = pubs.filter((p) => !featured.includes(p));
  const press = pressFor(topic);
  const others = topics.filter((t) => t.slug !== topic.slug);

  return (
    <>
      <section className="section pb-8">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm">
            <Link href="/research" className="link-chip inline-flex items-center gap-2">
              <span aria-hidden="true">←</span>
              Research
            </Link>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">{topic.title}</h1>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4">
              {topic.intro.map((p) => (
                <p key={p.slice(0, 24)} className="prose-body">{p}</p>
              ))}
            </div>
            <div className={`card relative aspect-[3/2] overflow-hidden ${topic.tone}`}>
              <Image src={topic.image.src} alt={topic.image.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {topic.findings && (
        <section className="border-y-2 border-ink bg-sand section">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Key findings</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {topic.findings.map((f) => (
                <li key={f.text} className="card bg-paper p-6">
                  <p className="text-lg">{f.text}</p>
                  {f.links && (
                    <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                      {f.links.map((l) => (
                        <a key={l.href} href={l.href} rel="noopener noreferrer" className="link-chip">{l.label}</a>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {topic.more?.map((m) => (
        <section key={m.heading} className="section pb-0">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">{m.heading}</h2>
            <div className="mt-4 space-y-4">
              {m.body.map((p) => <p key={p.slice(0, 24)} className="prose-body">{p}</p>)}
            </div>
          </div>
        </section>
      ))}

      {topic.videos && (
        <section className="section pb-0">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Talks</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {topic.videos.map((v) => (
                <iframe
                  key={v.id}
                  className="card aspect-video w-full bg-ink"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="picture-in-picture; web-share"
                  allowFullScreen
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {pubs.length > 0 && (
        <section className="section">
          <div className="container-page">
            {featured.length > 0 && (
              <>
                <h2 className="text-3xl sm:text-4xl">Read these first</h2>
                <ul className="mt-4 divide-y-2 divide-ink border-y-2 border-ink">
                  {featured.map((p) => <PublicationItem key={p.id} p={p} />)}
                </ul>
              </>
            )}
            {rest.length > 0 && (
              <>
                <h2 className={`text-3xl sm:text-4xl ${featured.length ? "mt-14" : ""}`}>
                  {featured.length ? "More papers on this topic" : "Papers on this topic"}
                </h2>
                <ul className="mt-4 divide-y-2 divide-ink border-y-2 border-ink">
                  {rest.map((p) => <PublicationItem key={p.id} p={p} />)}
                </ul>
              </>
            )}
            <p className="mt-6">
              <Link href={`/research/publications?topic=${topic.slug}`} className="btn-secondary btn-sm">
                See this topic in the full publications list
              </Link>
            </p>
          </div>
        </section>
      )}

      {press.length > 0 && (
        <section className="border-t-2 border-ink bg-paper section">
          <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">In the press</h2>
            <ul className="mt-4 divide-y-2 divide-ink border-y-2 border-ink">
              {press.map((p) => (
                <li key={p.id} className="py-4">
                  <p className="text-sm text-ink-soft">{p.publisher}, {p.date}</p>
                  <a href={p.url} rel="noopener noreferrer" className="font-serif text-lg font-bold hover:underline">{p.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Next step and related topics */}
      <section className="border-t-2 border-ink section">
        <div className="container-page">
          <div className={`card flex flex-col items-start justify-between gap-5 p-8 sm:flex-row sm:items-center sm:p-10 ${topic.next === "consultancy" ? "bg-green" : "bg-sky"}`}>
            {topic.next === "consultancy" ? (
              <>
                <h2 className="max-w-xl text-2xl sm:text-3xl">Designing a game? This research is what our consultancy draws on.</h2>
                <Link href="/work-with-us" className="btn-secondary">Work with us</Link>
              </>
            ) : (
              <>
                <h2 className="max-w-xl text-2xl sm:text-3xl">Questions about this research, or interested in a PhD?</h2>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("[PhD and academic enquiry] " + topic.title)}`}
                  className="btn-secondary"
                >
                  Email us
                </a>
              </>
            )}
          </div>

          <h2 className="mt-14 text-2xl sm:text-3xl">More research</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((t) => (
              <li key={t.slug}>
                <Link href={`/research/${t.slug}`} className="inline-block rounded-full border-2 border-ink bg-paper px-4 py-2 font-semibold hover:bg-sand">
                  {t.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/research/measures-and-code" className="inline-block rounded-full border-2 border-ink bg-paper px-4 py-2 font-semibold hover:bg-sand">
                Measures and code
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
