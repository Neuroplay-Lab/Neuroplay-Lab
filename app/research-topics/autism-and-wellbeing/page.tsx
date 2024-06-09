import Image from "next/image";
import { TitleText } from "../../components";
import headerImg from "../../../public/autism-qol-main.png";

import publications from "../../publications/publications.json"; /** TODO: Remove when actual publications are added */
import DividedListItem from "../../components/DividedListItem";

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
