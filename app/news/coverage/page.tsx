import Link from "next/link";
import type { Metadata } from "next";
import { allCoverage, coverageYear } from "../../content/news";

export const metadata: Metadata = {
  title: "All coverage",
  description: "Every press item featuring the Neuroplay Lab and its research, newest first.",
};

type Props = { searchParams: Promise<{ year?: string }> };

const chip = (active: boolean) =>
  `inline-block rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold ${active ? "bg-green shadow-hard-sm" : "bg-paper hover:bg-sand"}`;

export default async function Coverage({ searchParams }: Props) {
  const year = Number((await searchParams).year) || undefined;
  const years = [...new Set(allCoverage.map(coverageYear).filter(Boolean))].sort((a, b) => b - a);
  const list = year ? allCoverage.filter((p) => coverageYear(p) === year) : allCoverage;
  const groups = [...new Set(list.map(coverageYear))];

  return (
    <>
      <section className="section pb-6">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm"><Link href="/news" className="link-chip inline-flex items-center gap-2">
          <span aria-hidden="true">←</span>
          News and press
          </Link></nav>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">All coverage</h1>
          <nav aria-label="Filter by year" className="mt-6">
            <ul className="flex flex-wrap gap-2">
              <li><Link href="/news/coverage" scroll={false} className={chip(!year)} aria-current={!year ? "true" : undefined}>All years</Link></li>
              {years.map((y) => (
                <li key={y}>
                  <Link href={`/news/coverage?year=${y}`} scroll={false} className={chip(year === y)} aria-current={year === y ? "true" : undefined}>{y}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page">
          <p className="text-ink-soft" role="status">{list.length} {list.length === 1 ? "item" : "items"}</p>
          {groups.map((g) => (
            <div key={g} className="mt-8">
              {!year && g > 0 && <h2 className="text-2xl sm:text-3xl">{g}</h2>}
              <ul className="mt-2 divide-y-2 divide-ink border-y-2 border-ink">
                {list.filter((p) => coverageYear(p) === g).map((p) => (
                  <li key={p.id} className="py-4">
                    <p className="text-sm font-semibold text-ink-soft">{p.publisher}, {p.date}</p>
                    <a href={p.url} rel="noopener noreferrer" className="font-serif text-lg font-bold leading-snug hover:underline sm:text-xl">{p.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
