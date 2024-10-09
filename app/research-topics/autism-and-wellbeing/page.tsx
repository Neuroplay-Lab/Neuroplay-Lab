import Image from "next/image";
import { TitleText, TypingText } from "../../components";
import headerImg from "../../../public/autism-qol-main.png";
import gameImg from "../../../public/rpg-468917_960_720.jpg";
import superImg from "../../../public/image.png";

import publications from "../../publications/publications.json";
import Link from "next/link";
import Publication from "../../publications/publication";
import { Metadata } from "next";

const SynchronyAndSocialCognition = () => {
    return (
        <div className="grid lg:grid-cols-4">
            <main className="p-2 text-secondary-white flex flex-col md:p-6 lg:col-span-3">
                <TitleText
                    title={"Autism and Wellbeing"}
                    textStyles={"text-center mx-2 mb-2 text-4xl leading-snug"}
                />
                <Image
                    src={headerImg}
                    alt="2 images showing a puppy being kissed in the bathtub and a couple with arms linked whilst holding hands"
                    className="p-3 md:max-w-xl self-center"
                />
                <p className="my-2">
                    Much of our research aims to improve social outcomes for
                    autistic people of all ages. Some of this work has focused
                    on understanding how quality of life outcomes can be
                    enhanced for autistic people, particularly those with a
                    later-in-life diagnosis. Other work, following on from our
                    finding that autistic people are interested in the
                    non-human, has explored how human-animal contact can benefit
                    autistic people.
                </p>
                <iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={560}
                    src="https://www.youtube.com/embed/V-wcTCVh-oc?si=Pmfb7qnmZ6-2uQR_"
                    title="Pet Ownership and Autism"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <TypingText
                    title={"Current Projects"}
                    textStyles={"mx-8 my-4 text-3xl"}
                />
                <Image
                    src={gameImg}
                    alt="A close up of 3 20-sided dice"
                    className="p-3 md:max-w-lg self-center"
                />
                <p className="my-2">
                    We are exploring hobbies that may be particularly engaging
                    for autistic people, including board gaming and role-playing
                    games (please see our work on{" "}
                    <Link
                        href={"/research-topics/gamification"}
                        className="underline text-secondary-white hover:text-white"
                    >
                        gamification
                    </Link>{" "}
                    for more information).
                </p>
                <Image
                    src={superImg}
                    alt="A man and woman in superhero cosplay"
                    className="p-3 md:max-w-lg self-center"
                />
                <p className="my-2">
                    We are also exploring autistic people’s special interests
                    and how these can be harnessed to better include autistic
                    people in the community and even improve the social
                    connection between autistic and non-autistic people.
                </p>
            </main>
            <aside className="px-8 py-4 lg:bg-slate-400 lg:bg-opacity-10 lg:max-h-screen sticky top-0">
                <h4 className="text-white italic font-medium mb-3 ml-3 lg:my-6">
                    Links to papers:
                </h4>
                <ul className="overflow-y-scroll overflow-x-clip lg:h-[90%]">
                    {publications
                        .filter(
                            (x) =>
                                x.tags?.includes("autism") &&
                                x.tags?.includes("wellbeing")
                        )
                        .map(({ title, url, id, abstract }) => (
                            <Publication
                                key={id + "_root"}
                                title={title}
                                url={url}
                                id={id}
                                abstract={abstract}
                                extraStyles="mx-0 [&:not(:last-child)]:after:my-1 [&:not(:last-child)]:after:mt-5 mb-0"
                            />
                        ))}
                </ul>
            </aside>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Autism and Wellbeing",
    description:
        "Drs Gray Atherton and Liam Cross discuss the topic of Autism and Wellbeing and their research into this area of Psychology.",
    openGraph: {
        title: "Autism and Wellbeing",
        description:
            "Drs Gray Atherton and Liam Cross discuss the topic of Autism and Wellbeing and their research into this area of Psychology.",
        images: ["/_next/static/media/autism-qol.0241ff30.jpg"],
    },
};

export default SynchronyAndSocialCognition;
