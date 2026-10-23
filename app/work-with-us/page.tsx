import Image from "next/image";
import type { Metadata } from "next";
import { services, currentWork } from "../content/site";
import EnquiryForm from "./EnquiryForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work with us",
  description:
    "Psychological design consultancy for game publishers and studios, from the Neuroplay Lab at the University of Plymouth.",
};

export default function WorkWithUs() {
  return (
    <>
      <section className="section pb-6 sm:pb-10">
        <div className="container-page">
          <h1 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Psychological design consultancy for tabletop games
          </h1>
          <p className="prose-body mt-6">
            We help publishers and studios make games that are built on evidence and honest about
            what they can do.
          </p>
          <p className="mt-8">
            <a href="#enquiry" className="btn-primary text-lg">Send an enquiry</a>
          </p>
        </div>
      </section>

      {/* W1 What we do */}
      <section className="section pt-6 sm:pt-10">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">What we do for studios</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li
                key={s.title}
                className={`card p-6 ${["bg-green", "bg-sky", "bg-pink", "bg-lavender", "bg-paper"][i % 5]}`}
              >
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* W2 Who you're working with */}
      <section className="border-y-2 border-ink bg-sand section">
        <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="flex items-end justify-center gap-2">
            <Image src="/brand/meeple-gray.webp" alt="Cartoon avatar of Gray Atherton" width={480} height={455} className="h-auto w-1/2 max-w-[200px]" />
            <Image src="/brand/meeple-liam.webp" alt="Cartoon avatar of Liam Cross" width={480} height={480} className="h-auto w-1/2 max-w-[200px]" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Who you&apos;re working with</h2>
            <p className="prose-body mt-4">
              Gray Atherton and Liam Cross are psychologists at the University of Plymouth. We
              write and consult as ADHD and autistic academics, so our advice draws on our own
              experience as well as the research literature.
            </p>
            <p className="mt-8">
              <a href="/team" className="btn-secondary text-lg">Meet the team</a>
            </p>
          </div>
        </div>
      </section>

      {/* W3 Case study */}
      <section className="section">
        <div className="container-page">
            <h2 className="text-3xl sm:text-4xl">Dixit Access+ with Asmodee</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.3fr]">
              <Image className="card flex items-center justify-center bg-paper p-6 text-center text-ink-soft" src={"/games/dixit-access+-box.webp"} width={1024} height={1024} alt={""} />
              <div className="space-y-5">
                <p className="prose-body">
                  We co-designed an accessible edition of Dixit for Asmodee&apos;s Access+ line of
                  disability-friendly games.
                </p>
                {/* TODO: supply the brief, what changed as a result, and a client testimonial */}
              <p className="prose-body hidden">The brief and what changed as a result will be added here.</p>
            </div>
          </div>

          <h3 className="mt-14 text-2xl">Current work</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {currentWork.map((w) => (
              <li key={w.client} className="rounded-xl border-2 border-ink bg-paper p-5">
                  <p className="font-bold">{w.client}</p>
                  <p className="mt-1 text-ink-soft">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
      </section>

      {/* W4 Enquiry */}
      <section id="enquiry" className="scroll-mt-24 border-t-2 border-ink bg-paper section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Tell us about your game</h2>
            <p className="prose-body mt-4">
              Share a few details and we&apos;ll reply by email. Early ideas are as welcome as
              finished prototypes.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
