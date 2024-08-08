import Link from "next/link";
import { TitleText, TypingText } from "../components";

const TalksAndVideos = () => {
    return (
        <>
            <TitleText title={"Talks and Videos"} textStyles={"text-center mx-4"} />
            <p className="text-center max-w-prose mx-auto text-lg text-secondary-white">Below is a collection of videos showing various talks we have given on the topics of Austism, Anthropomorphism, Gamification and Synchrony.</p>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Autism"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
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
                </div>
            </section>
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Anthropomorphism"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/h7Q9r5cMdy4?si=ZVAGo9ysYg0Z3mP1"
                        title="Anthropomorphism and Autism"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
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
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Gamification"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
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
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8 mb-10">
                <TypingText
                    title={"Synchrony"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
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
            {/* <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span> */}
        </>
    );
};

export default TalksAndVideos;
