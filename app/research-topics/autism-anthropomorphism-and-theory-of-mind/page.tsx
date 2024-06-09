import Image from "next/image";
import { TitleText, TypingText } from "../../components";
import headerImg from "../../../public/planet-06.jpg";
import articleImg1 from "../../../public/anthro-1.png";
import articleImg2 from "../../../public/anthro-2.png";

import publications from "../../publications/publications.json"; /** TODO: Remove when actual publications are added */
import DividedListItem from "../../components/DividedListItem";

const SynchronyAndSocialCognition = () => {
    return (
        <div className="grid lg:grid-cols-4">
            <main className="p-2 text-secondary-white flex flex-col md:p-6 lg:col-span-3">
                <TitleText
                    title={"Autism, Anthropomorphism and Theory of Mind"}
                    textStyles={"text-center mx-2 mb-2 text-3xl leading-snug"}
                />
                <Image
                    src={headerImg}
                    alt="A dog wearing a smart buisness suit"
                    className="p-3 md:max-w-xl self-center"
                />
                <TypingText
                    title="Seeing More Than Human"
                    textStyles="text-xl ml-2 italic"
                />
                <p className="my-2">
                    Anthropomorphism, or seeing the non-human human, is one of
                    our most natural social inclinations. By making the
                    non-human human, we can better predict and understand
                    behaviours, as we are ‘familiarising’ the unfamiliar. In
                    this way, anthropomorphising is essentially an extension of
                    theory of mind. Given this connection, many researchers have
                    proposed that autistic people may not anthropomorphise as
                    much as non-autistic people. However, a great deal of work
                    now shows that this is not the case. Autistic people engage
                    in anthropomorphism at the same or even a greater extent
                    than non-autistic people. A growing body of research shows
                    that they may be better at taking the perspective of
                    anthropomorphic agents.
                </p>
                {/* TODO: Add links */}
                <p className="my-2">
                    Our work in this area started with a qualitative study
                    investigating how autistic adolescents engaged in a theory
                    of mind (or social perspective-taking) task. We found that
                    interviewees often described their experiences in
                    anthropomorphic ways. Our review of this topic uncovered a
                    clear link between autism and anthropomorphism. We found
                    that autistic individuals showed a penchant for
                    anthropomorphic characters and agents, suggesting a possible
                    strength in interacting with and evaluating these agents.
                </p>
                <p className="my-2">
                    From here, we investigated how autistic people and those
                    with high levels of autistic traits perform on various
                    theory of mind and perspective-taking tasks with
                    anthropomorphic agents. To do this, we developed
                    anthropomorphic versions of popular theory of mind tasks
                    like a cartoon version of the reading the mind in the eyes
                    task and an animal version of the faux pas task.
                </p>
                <p className="my-2">
                    Our results show that autistic children and adults perform
                    better on these anthropomorphic versions of the task than
                    the standard one, as do people with higher levels of
                    autistic traits. In some cases, autistic people even
                    outperform their neurotypical counterparts.
                </p>
                <div className="m-2 flex flex-col gap-2 max-w-xl self-center md:m-6">
                    <Image src={articleImg1} alt="" />
                    <Image src={articleImg2} alt="" />
                </div>
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
