import Link from "next/link";
import { TitleText, TypingText } from "../components";

const Seminars = () => {
    return (
        <>
            <TitleText title={"Seminars"} textStyles={"text-center mx-4"} />
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Autism Research Institute"}
                    textStyles={"mx-4 mb-2 text-3xl"}
                />
                <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] mb-4">
                    Here are a few seminars Gray did for the Autism Research
                    Institute, write ups for these talks can also be found{" "}
                    <Link
                        href={
                            "https://autism.org/webinar-author/gray-atherton-phd/"
                        }
                        className="underline hover:text-white"
                    >
                        here
                    </Link>
                    .
                </p>
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/V-wcTCVh-oc?si=h1jKF6KrD6FsAZDo"
                        title="Pet Ownership and Autism"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/_9ctfGPeEIY?si=v9f0aBHuqGQbscDK"
                        title="How Age – and Age of Diagnosis – Affect Quality of Life"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/sD20xIDp-Jc?si=1IzQ6j1J_wFRnmJK"
                        title="Gender and Autism"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/h7Q9r5cMdy4?si=ZVAGo9ysYg0Z3mP1"
                        title="Anthropomorphism and Autism"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] my-4">
                    Below is also a talk for the Autism Research Institute
                    involving both Gray and Liam, a write up of this talk can be
                    found{" "}
                    <Link
                        href={
                            "https://autism.org/how-games-can-help-teach-social-skills/"
                        }
                        className="underline hover:text-white"
                    >
                        here
                    </Link>
                </p>
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/4vCBwvieryw?si=ssOrvTsK_lv7Rv3P"
                        title="Anthropomorphism and Autism"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <span className="m-8 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Canada Plays"}
                    textStyles={"mx-4 mb-2 text-3xl"}
                />
                <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] mb-4">
                    Below are seminars we gave in Canada as part of the Game In
                    Lab research program.
                </p>
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/aOoum0L7zBQ?si=xHnhnuT_MeVZFoB_"
                        title="Best of: Autism and Board Games"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/uJHCDN_oXZw?si=0cD15e7cxQzLmbfB"
                        title="Autism and Board Games"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/sETDcjN08b8?si=j6j7E4coU5c9DGrj"
                        title="Mandi Hutchinson's interview of Drs Liam Cross and Gray Atherton"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/P3Fpc2mpE0s?si=mtvKTucNdt7KGJ4k"
                        title="Board Gaming on the Spectrum"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <span className="m-8 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Social Bridges E-Conferences"}
                    textStyles={"mx-4 mb-2 text-3xl"}
                />
                <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] mb-4">
                    Here are some conferences Liam has given on the topic of
                    synchrony.
                </p>
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/9sTUw5QLarU?si=i06RhPAcegnVa6FY"
                        title="How Moving Together Binds Us Together - Dr. Liam Cross"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/KOLQowzoHBA?si=YT7qZy-HjYChkGnu"
                        title="An open access virtual reality drumming application for fostering pro-sociality - Liam Cross"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <span className="m-8 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
        </>
    );
};

export default Seminars;
