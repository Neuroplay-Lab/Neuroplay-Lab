import type { Publication } from "../content/research";

export default function PublicationItem({ p, badge }: { p: Publication; badge?: string }) {
  const meta = [
    p.journal,
    [p.volume, p.number ? `(${p.number})` : ""].filter(Boolean).join(""),
    p.pages ? `${p.pages}` : "",
  ]
    .filter(Boolean)
    .join(", ");
  return (
    <li className="py-5">
      <p className="text-sm text-ink-soft">
        {p.author?.join(", ")}
        {p.year ? ` (${p.year})` : ""}
      </p>
      <h3 className="mt-1 font-serif text-lg font-bold leading-snug sm:text-xl">
        {badge && (
          <span className="mr-2 inline-block rounded-full border-2 border-ink bg-green px-2 py-0.5 align-middle font-sans text-xs font-bold">
            {badge}
          </span>
        )}
        <a href={p.url} rel="noopener noreferrer" className="hover:underline">{p.title}</a>
      </h3>
      {meta && <p className="mt-1 text-ink-soft">{meta}</p>}
      <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {p.doi && (
          <a className="link-chip" href={`https://doi.org/${p.doi}`} rel="noopener noreferrer">DOI</a>
        )}
        <a className="link-chip" href={p.url} rel="noopener noreferrer">Read the paper</a>
      </p>
      {p.abstract && (
        <details className="mt-3 max-w-prose">
          <summary className="link-chip list-inside w-fit cursor-pointer">Abstract</summary>
          <p className="mt-2 text-ink-soft">{p.abstract}</p>
        </details>
      )}
    </li>
  );
}
