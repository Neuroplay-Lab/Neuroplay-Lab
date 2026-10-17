import Image from "next/image";
import Link from "next/link";
import { proof, routes, latest } from "./content/site";

export default function Home() {
  return (
    <>
      {/* H1 Hero */}
      <section className="section">
        <div className="container-page grid items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
          <div>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              We study how board games help neurodivergent people connect.
            </h1>
            <p className="prose-body mt-6">
              Gray Atherton and Liam Cross run the Neuroplay Lab, researching games, autism and
              social connection. We publish the science, advise the games industry, and make games
              of our own.
            </p>
            <div className="mt-8">
              <Link href="/work-with-us" className="btn-primary text-lg">
                Work with us
              </Link>
            </div>
          </div>
          <div className="card order-first bg-sky p-6 sm:p-10 md:order-last">
            <Image
              src="/brand/mark.webp"
              alt="A pink brain circled by an orbit carrying a red meeple and a blue twenty-sided die"
              width={700}
              height={489}
              priority
              className="mx-auto h-auto w-full max-w-[320px]"
            />
          </div>
        </div>
      </section>

      {/* H2 Proof strip */}
      <section aria-label="Credentials" className="border-y-2 border-ink bg-sand">
        <ul className="container-page grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <li key={p.text} className="flex flex-col gap-3 py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0">
              <span aria-hidden className={`h-2 w-12 rounded-full border-2 border-ink ${p.tone}`} />
              <span className="font-serif text-xl font-bold leading-snug">{p.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* H3 Route cards */}
      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Where to start</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className={`card flex h-full flex-col gap-3 p-6 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm ${r.tone} ${r.primary ? "lg:shadow-hard-lg" : ""}`}
                >
                  <h3 className="text-2xl">{r.title}</h3>
                  <p className="text-ink">{r.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* H4 Latest */}
      <section className="border-t-2 border-ink bg-paper section">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Latest</h2>
          <ul className="mt-6 divide-y-2 divide-ink border-y-2 border-ink">
            {latest.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="grid gap-1 py-5 hover:bg-sand sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-3">
                  <span className="text-sm font-semibold text-ink-soft">
                    {l.kind}, {l.date}
                  </span>
                  <span className="font-serif text-xl font-bold">{l.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/news" className="link">See all news and press</Link>
          </p>
        </div>
      </section>

      {/* Closing step for the primary goal */}
      <section className="section">
        <div className="container-page">
          <div className="card flex flex-col items-start justify-between gap-6 bg-green p-8 sm:flex-row sm:items-center sm:p-10">
            <h2 className="max-w-xl text-3xl sm:text-4xl">Designing a game? Tell us about it.</h2>
            <Link href="/work-with-us#enquiry" className="btn-secondary text-lg">
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
