import Image from "next/image";
import { TitleText } from "../../components";
import headerImg from "../../../public/image-1.png";

import publications from "../../publications/publications.json"; /** TODO: Remove when actual publications are added */
import DividedListItem from "../../components/DividedListItem";

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
                />
                <p className="my-2">
                    Games are one of the social building blocks of early
                    development. As well as improving cognitive skills like
                    planning, inhibition control and maths games teach us
                    cooperation and joint attention and help us sharpen our
                    theory of mind skills (like strategizing and bluffing). Our
                    work mainly focuses on how games also improve social skills
                    and how this can benefit autistic people. We are interested
                    not only in the effects of gaming but the reasons why
                    certain people may be drawn to the hobby.
                </p>
                <iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={750}
                    src="https://www.youtube.com/embed/P3Fpc2mpE0s"
                    title="Board Gaming on the Spectrum - Liam Cross, Edge Hill University, UK"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={750}
                    src="https://www.youtube.com/embed/pGyHYireQCs"
                    title="EDUCATORS‘ DAY - Asmodee Research: Boardgames as an education and care practice (EN) | SPIEL 2022"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </main>
            <aside className="px-8 py-4 lg:bg-slate-400 lg:bg-opacity-10 lg:max-h-screen sticky top-0">
                <h4 className="text-white italic font-medium mb-3 ml-3 lg:my-6">
                    Links to papers:
                </h4>
                <ul className="overflow-y-scroll overflow-x-clip lg:h-[90%]">
                    {publications.map(({ title, href }) => (
                        <DividedListItem
                            listKey="href"
                            extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto"
                        >
                            {title}
                        </DividedListItem>
                    ))}
                    {publications.map(({ title, href }) => (
                        <DividedListItem
                            listKey="href"
                            extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto"
                        >
                            {title}
                        </DividedListItem>
                    ))}
                    {publications.map(({ title, href }) => (
                        <DividedListItem
                            listKey="href"
                            extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto"
                        >
                            {title}
                        </DividedListItem>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default SynchronyAndSocialCognition;
