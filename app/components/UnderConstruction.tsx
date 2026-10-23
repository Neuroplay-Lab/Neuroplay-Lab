import Image from "next/image";
import Link from "next/link";
import { site } from "../content/site";

type Props = {
  /** Name of the page being built, e.g. "Research" */
  title: string;
  /** Optional line shown after the standard message, e.g. who to email */
  note?: string;
};

/** Placeholder for pages that are not built yet. Replace the page, not this component. */
export default function UnderConstruction({ title, note }: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="card mx-auto grid max-w-3xl items-center gap-8 bg-sky p-8 sm:grid-cols-[1fr_1.5fr] sm:p-10">
          <Image
            src="/brand/mark.webp"
            alt=""
            width={700}
            height={489}
            className="mx-auto h-auto w-full max-w-[220px]"
          />
          <div>
            <h1 className="text-3xl leading-tight sm:text-4xl">Currently under construction</h1>
            <p className="mt-4 text-lg">
              The {title} page is still being built. {note ?? "In the meantime, you can get in touch by email."}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/" className="btn-primary">Back to the homepage</Link>
              <a href={`mailto:${site.email}`} className="btn-secondary">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
