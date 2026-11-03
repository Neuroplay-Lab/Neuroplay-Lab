import Link from "next/link";
import type { Metadata } from "next";
import { measures, defaultLicence, linkLabelFor, type Measure } from "../../content/research";

export const metadata: Metadata = {
  title: "Measures and code",
  description: "Instruments, software and data from the Neuroplay Lab, free to use in non-profit research with citation.",
};

const kinds: Measure["kind"][] = ["Instruments", "Software and code", "Datasets"];

export default function MeasuresAndCode() {
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
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Measures and code</h1>
          <p className="prose-body mt-4">
            Measures and code found here can be used free of charge for non-profit research purposes
            without prior permission, so long as the relevant paper is cited.
          </p>
        </div>
      </section>

      {kinds.map((kind) => {
        const items = measures.filter((m) => m.kind === kind);
        if (!items.length) return null;
        return (
          <section key={kind} className="section pt-6 sm:pt-8">
            <div className="container-page">
              <h2 className="text-3xl sm:text-4xl">{kind}</h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((m) => (
                  <li key={m.name} className="card flex flex-col gap-3 bg-paper p-6">
                    <h3 className="text-xl">{m.name}</h3>
                    {m.description && <p className="text-ink-soft">{m.description}</p>}
                    <p className="text-sm text-ink-soft">{m.licence ?? defaultLicence}</p>
                    <div className="mt-auto pt-2">
                      {m.href ? (
                        <a href={m.href} rel="noopener noreferrer" className="btn-secondary btn-sm">{linkLabelFor(m)}</a>
                      ) : (
                        <p className="text-sm font-semibold text-ink-soft">Link coming soon</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
