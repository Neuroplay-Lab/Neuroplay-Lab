import { Metadata } from "next";
import { TitleText, TypingText } from "../components";
import VideoLinks from "./video-links.json";

const TalksAndVideos = () => {
    return (
        <>
            <TitleText
                title={"Talks and Videos"}
                textStyles={"text-center mx-4"}
            />
            <p className="text-center max-w-prose mx-auto text-lg text-secondary-white">
                Below is a collection of videos showing various talks we have
                given on the topics of Austism, Anthropomorphism, Gamification
                and Synchrony.
            </p>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Autism"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    {VideoLinks.filter((video) => video.topic === "Autism").map((video, index) =>
                    (<iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        key={index + "_autism_video"}
                    ></iframe>))}
                </div>
            </section>
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Anthropomorphism"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    {VideoLinks.filter((video) => video.topic === "Anthropomorphism").map((video, index) =>
                    (<iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        key={index + "_anthropomorphism_video"}
                    ></iframe>))}
                </div>
            </section>
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Gamification"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    {/* This video has been hidden/made private so won't appear on the site, kept here
                    in case it is made public again in the future. */}
                    {/* <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/aOoum0L7zBQ?si=xHnhnuT_MeVZFoB_"
                        title="Best of: Autism and Board Games"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe> */}
                    {VideoLinks.filter((video) => video.topic === "Gamification").map((video, index) =>
                    (<iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        key={index + "_gamification_video"}
                    ></iframe>))}
                </div>
            </section>
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8 mb-10">
                <TypingText
                    title={"Synchrony"}
                    textStyles={"mx-4 mb-6 font-semibold text-3xl"}
                />
                <div className="grid gap-4 lg:grid-cols-2 justify-center justify-items-center">
                    {VideoLinks.filter((video) => video.topic === "Synchrony").map((video, index) =>
                    (<iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        key={index + "_synchrony_video"}
                    ></iframe>))}
                </div>
            </section>
        </>
    );
};

export const metadata: Metadata = {
    title: "Talks",
    description:
        "A collection of talks given by Dr Gray Atherton and/or Dr Liam Cross on their research into the Psychology of Autism, Anthropomorphism, Gamification and Synchrony.",
    openGraph: {
        title: "Talks/Videos",
        description:
            "A collection of talks given by Dr Gray Atherton and/or Dr Liam Cross.",
    },
};

export default TalksAndVideos;
