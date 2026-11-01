import Link from "next/link";
import type { Metadata } from "next";
import { allPublications, topics } from "../../content/research";
import PublicationItem from "../../components/PublicationItem";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed papers by Gray Atherton and Liam Cross, filterable by topic and year.",
};

type Props = { searchParams: Promise<{ topic?: string; year?: string }> };

const chip = (active: boolean) =>
  `inline-block rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold ${active ? "bg-green shadow-hard-sm" : "bg-paper hover:bg-sand"}`;

export default async function Publications({ searchParams }: Props) {
  const sp = await searchParams;
  const topic = topics.find((t) => t.slug === sp.topic);
  const year = Number(sp.year) || undefined;

  const years = [...new Set(allPublications.map((p) => p.year).filter((y): y is number => !!y))].sort((a, b) => b - a);
  const href = (t?: string, y?: number) => {
    const q = new URLSearchParams();
    if (t) q.set("topic", t);
    if (y) q.set("year", String(y));
    return `/research/publications${q.size ? `?${q}` : ""}`;
  };

  let list = allPublications;
  if (topic) list = list.filter((p) => topic.match(p.tags ?? []));
  if (year) list = list.filter((p) => p.year === year);
  const byYear = [...new Set(list.map((p) => p.year ?? 0))];

  return (
    <>
      <section className="section pb-6">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm">
            <Link href="/research" className="link-chip inline-flex items-center gap-2">
              <span aria-hidden="true">←</span>
              Research
            </Link>
          </nav>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Publications</h1>
          <p className="prose-body mt-4">Newest first. Filter by topic or year.</p>

          <nav aria-label="Filter by topic" className="mt-8">
            <p className="mb-2 text-sm font-bold">Topic</p>
            <ul className="flex flex-wrap gap-2">
              <li><Link href={href(undefined, year)} scroll={false} className={chip(!topic)} aria-current={!topic ? "true" : undefined}>All topics</Link></li>
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link href={href(t.slug, year)} scroll={false} className={chip(topic?.slug === t.slug)} aria-current={topic?.slug === t.slug ? "true" : undefined}>
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Filter by year" className="mt-5">
            <p className="mb-2 text-sm font-bold">Year</p>
            <ul className="flex flex-wrap gap-2">
              <li><Link href={href(topic?.slug)} scroll={false} className={chip(!year)} aria-current={!year ? "true" : undefined}>All years</Link></li>
              {years.map((y) => (
                <li key={y}>
                  <Link href={href(topic?.slug, y)} scroll={false} className={chip(year === y)} aria-current={year === y ? "true" : undefined}>{y}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page">
          <p className="text-ink-soft" role="status">
            {list.length} {list.length === 1 ? "paper" : "papers"}
          </p>
          {list.length === 0 ? (
            <p className="mt-6 text-lg">
              No papers match these filters. <Link href="/research/publications" className="link-chip">Clear filters</Link>
            </p>
          ) : (
            byYear.map((y) => (
              <div key={y} className="mt-8">
                {!year && y > 0 && <h2 className="text-2xl sm:text-3xl">{y}</h2>}
                <ul className="mt-2 divide-y-2 divide-ink border-y-2 border-ink">
                  {list.filter((p) => (p.year ?? 0) === y).map((p) => (
                    <PublicationItem key={p.id} p={p} badge={p.featured ? "Read first" : undefined} />
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
