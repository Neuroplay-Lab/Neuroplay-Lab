import Image from "next/image";
import { TitleText } from "../../components";
import headerImg from "../../../public/image-1.webp";

import publications from "../../publications/publications.json";
import Publication from "../../publications/publication";
import { Metadata } from "next";
import VideoLinks from "../../talks-and-videos/video-links.json";

const SynchronyAndSocialCognition = () => {
    return (
        <div className="grid lg:grid-cols-4">
            <main className="p-2 text-secondary-white flex flex-col md:p-6 lg:col-span-3">
                <TitleText
                    title={"Gamification"}
                    textStyles={"text-center mx-2 mb-2 text-4xl leading-snug"}
                />
                <Image
                    src={headerImg}
                    alt="Close up of board game pieces on a table during a game"
                    className="p-3 md:max-w-xl self-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <p className="my-2">
                    Games are a core part of early social development. Tabletop role playing games and board games support a wide range of cognitive skills, including planning, inhibition control, and numerical reasoning, while also fostering cooperation, shared attention, and perspective taking through activities such as strategising and bluffing.
                </p>
                <p className="my-2">
                    Our work focuses on how these forms of play can support social development and wellbeing, particularly for autistic and otherwise neurodivergent people. We are interested not only in the social benefits of gaming, but also in understanding why different people are drawn to tabletop games and how these environments can be designed to be more inclusive, accessible, and meaningful for diverse communities.
                </p>
                {VideoLinks.filter((video) => video.topic === "Gamification").map((video, index) =>
                    (<iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={750}
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    key={index + "_gamification_video"}
                />))}
            </main>
            <aside className="px-8 py-4 lg:bg-slate-400 lg:bg-opacity-10 lg:max-h-screen sticky top-0">
                <h4 className="text-white italic font-medium mb-3 ml-3 lg:my-6">
                    Links to papers:
                </h4>
                <ul className="overflow-y-scroll overflow-x-clip lg:h-[90%]">
                    {publications
                        .filter((x) => !x.hidden?.valueOf() === true && x.tags?.includes("gamification"))
                        .map(({ title, url, id, abstract }) => (
                            <Publication
                                key={id + "_root"}
                                title={title}
                                url={url}
                                id={id}
                                abstract={abstract}
                                extraStyles="mx-6 md:mx-12 lg:mx-0 [&:not(:last-child)]:after:my-1 [&:not(:last-child)]:after:mt-5 mb-0"
                            />
                        ))}
                </ul>
            </aside>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Gamification",
    description:
        "Drs Gray Atherton and Liam Cross discuss the topic of Gamification and their research in this area of Psychology.",
    openGraph: {
        title: "Gamification",
        description:
            "Drs Gray Atherton and Liam Cross discuss the topic of Gamification and their research in this area of Psychology.",
        images: ["/_next/static/media/image-1.76d864b8.webp"],
    },
};

export default SynchronyAndSocialCognition;
