import { TitleText, TypingText } from "../components";
import { Metadata } from "next";
import Link from "next/link";
import DividedListItem from "../components/DividedListItem";

const expertise = [
    {
        category: "Core Expertise",
        items: [
            {
                title: "Inclusion and Accessibility",
                desc: "Designing environments that support neurodivergent people.",
            },
            {
                title: "Tabletop and TTRPG Design",
                desc: "Inclusive player experience and community building.",
            },
            {
                title: "Industry Consultancy",
                desc: "Experience with Asmodee.",
            },
        ],
    },
    {
        category: "Evaluation & Research",
        items: [
            {
                title: "Data-Driven Evaluation",
                desc: "Large datasets and behavioural analysis.",
            },
            {
                title: "Education and Intervention Design",
                desc: "Neurodivergent learning and impact assessment.",
            },
            {
                title: "Cross-Cultural Research",
                desc: "Autism and social experience across contexts.",
            },
        ],
    },
    {
        category: "Innovative Methods",
        items: [
            {
                title: "Dixit Elicitation",
                desc: "Game-based tools to explore sensitive or hard-to-discuss topics.",
            },
            {
                title: "Mixed Methods Approaches",
                desc: "Integration of focus groups and quantitative analysis.",
            },
        ],
    },
];

const ConsultancyPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
            {/* Header */}
            <TitleText
                title={"Consultancy"}
                textStyles={"text-center mx-2"}
            />
            <p className="mt-4 font-normal text-[18px] text-white leading-[32.4px] text-center mb-2">
                Dr Liam Cross &amp; Dr Gray Atherton
            </p>
            <p className="mt-2 text-base text-secondary-white leading-relaxed text-center max-w-2xl mx-auto mb-12">
                We offer consultancy grounded in research, practice, and lived expertise in neurodiversity, specialising in inclusion and accessibility for neurodivergent people. Our work integrates academic research, community engagement, and personal experience as autistic and ADHD academics.
            </p>

            {/* Divider */}
            <div className="w-1/2 mx-auto border-b border-[#b0b0b0] mb-12" />

            {/* Highlights strip */}
            <section className="mb-14">
                <TypingText
                    title={"Our Experience"}
                    textStyles={"text-center mb-6 text-3xl"}
                />
                <p className="mt-2 text-base text-secondary-white leading-relaxed text-center max-w-prose mx-auto mb-4">
                    We have extensive experience working with the games industry, including collaboration with <em className="font-bold not-italic">Asmodee</em> on <em>Dixit Access Plus</em> and the development of an accessible, cooperative <em>Dixit</em> format for neurodivergent players, alongside broader consultancy on inclusive design, player experience, and community building. On the topic of gamification and autism we have also evaluated board game and TTRPG interventions for various outcomes and  commissioned white paper for <em className="font-bold not-italic">FIRAH (French Institute for Disability Research)</em> reviewing autism and games.
                </p>
                <p className="mt-2 text-base text-secondary-white leading-relaxed text-center max-w-prose mx-auto mb-4">
                    Our consultancy also spans education and research. This includes evaluation projects for <em className="font-bold not-italic">Pearson</em>, textbook evaluation for <em className="font-bold not-italic">McGraw-Hill</em>,  we have contributed multiple academic book chapters in areas of expertise, supporting knowledge exchange between research and practice as well as course and thesis evaluation for mutiple HEI's in the UK Europe and Asia.
                </p>
                <p className="mt-2 text-base text-secondary-white leading-relaxed text-center max-w-prose mx-auto mb-4">
                    Methodologically, we specialise in mixed methods evaluation, combining large-scale data analysis with qualitative approaches such as focus groups, as well as innovative techniques including <em>Dixit elicitation</em>, which uses game-based prompts to support discussion of complex or sensitive topics.
                </p>
            </section>

            {/* Divider */}
            <div className="w-1/2 mx-auto border-b border-[#b0b0b0] mb-12" />

            {/* Core expertise */}
            <section className="mb-14">
                <TypingText
                    title={"Our Expertise"}
                    textStyles={"text-center mb-8 text-3xl"}
                />
                <div className="flex flex-col gap-10">
                    {expertise.map(({ category, items }) => (
                        <div key={category}>
                            <h3 className="text-[#29abe2] font-semibold text-sm uppercase tracking-widest mb-4 ml-1">
                                {category}
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {items.map(({ title, desc }) => (
                                    <li
                                        key={title}
                                        className="bg-slate-400 bg-opacity-10 hover:bg-opacity-20 transition-colors rounded-xl p-5"
                                    >
                                        <h4 className="text-white font-semibold text-base mb-2">
                                            {title}
                                        </h4>
                                        <p className="text-[#B0B0B0] text-sm leading-relaxed">
                                            {desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="w-1/2 mx-auto border-b border-[#b0b0b0] mb-12" />

            {/* Contact form */}
            <section>
                <TypingText
                    title={"Get in Touch"}
                    textStyles={"text-center mb-4 text-3xl"}
                />
                <p className="text-center text-[#B0B0B0] mb-8 max-w-xl mx-auto text-base leading-relaxed">
                    Interested in working with us? Fill in the form below and we'll get back to
                    you as soon as possible.
                </p>

                <form
                    method="post"
                    className="max-w-lg mx-auto"
                    action="https://forms.un-static.com/forms/fe2891f98450fb89adb6a4cf2d700a1d6f5c7aa0"
                >
                    <div className="mb-5 flex flex-col gap-1">
                        <label className="text-[#B0B0B0] font-bold text-sm" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-5 flex flex-col gap-1">
                        <label className="text-[#B0B0B0] font-bold text-sm" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                            required
                            className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-5 flex flex-col gap-1">
                        <label className="text-[#B0B0B0] font-bold text-sm" htmlFor="organisation">
                            Organisation (optional)
                        </label>
                        <input
                            type="text"
                            name="organisation"
                            id="organisation"
                            placeholder="Your organisation or company"
                            className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-5 flex flex-col gap-1">
                        <label className="text-[#B0B0B0] font-bold text-sm" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={7}
                            placeholder="Tell us about your project or enquiry"
                            className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full shadow bg-[#25618B] hover:bg-[#25828b] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                        Send Enquiry
                    </button>
                    <p className="text-center text-[#B0B0B0] mt-3 text-xs">
                        <small>
                            (Powered by{" "}
                            <a
                                rel="nofollow"
                                href="https://un-static.com/"
                                className="underline hover:text-white"
                            >
                                Un-static Forms
                            </a>
                            )
                        </small>
                    </p>
                </form>

                <p className="text-center text-[#B0B0B0] mt-8 text-sm">
                    Alternatively, you can reach us directly via our{" "}
                    <Link href="/contact" className="underline hover:text-white font-medium">
                        contact page
                    </Link>
                    .
                </p>
            </section>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Consultancy",
    description:
        "Neurodiversity and games consultancy from Dr Liam Cross and Dr Gray Atherton, specialising in inclusion, accessibility, tabletop game design, and mixed-methods research evaluation.",
    openGraph: {
        title: "Consultancy | Neuroplay Lab",
        description:
            "Research-grounded consultancy in neurodiversity, games, and inclusive design from Dr Liam Cross and Dr Gray Atherton.",
    },
};

export default ConsultancyPage;