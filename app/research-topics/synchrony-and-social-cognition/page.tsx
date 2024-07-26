import Image from "next/image";
import { TitleText } from "../../components";
import headerImg from "../../../public/crowd-2152653_960_720.jpg";

import publications from "../../publications/publications.json";
import DividedListLink from "../../components/DividedListLink";
import Link from "next/link";

const SynchronyAndSocialCognition = () => {
    return (
        <div className="grid lg:grid-cols-4">
            <main className="p-2 text-secondary-white flex flex-col md:p-6 lg:col-span-3">
                <TitleText
                    title={"Synchrony and Social Cognition"}
                    textStyles={"text-center mx-2 mb-2 text-4xl leading-snug"}
                />
                <Image
                    src={headerImg}
                    alt="A crowd of people walking together in synchrony"
                    className="p-3 md:max-w-xl self-center"
                />
                <p className="my-2">
                    People regularly move in time with one another. We sing,
                    dance and even walk in time with those around us. A great
                    deal of work has now shown that moving in time together has
                    pro-social consequences, such as increasing liking, rapport,
                    and cooperation towards co-actors. However, these social
                    effects of coordination go beyond the pro-social.
                    Coordination also has a dark side leading people to be more
                    likely to comply with the destructive requests of our
                    co-actors. Our work in this area explores how, why and when
                    coordination has the social consequences it does.
                </p>
                <p className="my-2">
                    Through various quantitative and mixed methods studies, this
                    research highlights how coordination may lead to co-actors
                    identifying as common group members, which explains the
                    social consequences coordination has and why it has them.
                    This group formation framework explains how coordination
                    leads to various socio-cognitive consequences by leading
                    individuals to view themselves and their co-actors in common
                    group terms. This leads to an individual’s sense of self
                    becoming temporarily diluted as an interdependent identity
                    becomes more salient, thus leading to a range of pro-group
                    consequences.
                </p>
                <iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={750}
                    src="https://www.youtube.com/embed/9sTUw5QLarU"
                    title="[AGTN] How Moving Together Binds Us Together - Dr. Liam Cross"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <p className="my-2">
                    Our work shows that it’s{" "}
                    <Link
                        href={
                            "https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01983/full"
                        }
                        className="underline hover:text-white"
                    >
                        not only strict in-phase synchrony
                    </Link>
                    that’s capable of having pro-social effects but also other
                    forms of coordination and even{" "}
                    <Link
                        href={
                            "https://www.frontiersin.org/articles/10.3389/fpsyg.2017.01798/full"
                        }
                        className="underline hover:text-white"
                    >
                        imagined coordination
                    </Link>
                    , though{" "}
                    <Link
                        href={
                            "https://www.nature.com/articles/s41598-020-79796-9"
                        }
                        className="underline hover:text-white"
                    >
                        incidental coordination
                    </Link>
                    , which is not intentional, does not lead to the same
                    effects. These pro-social effects persist outside the lab
                    for{" "}
                    <Link
                        href={
                            "https://www.sciencedirect.com/science/article/pii/S0001691819303968"
                        }
                        className="underline hover:text-white"
                    >
                        at least 24 hours
                    </Link>{" "}
                    and{" "}
                    <Link
                        href={
                            "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0254017#:~:text=This%20study%20has%20demonstrated%20that,of%20imagined%20coordination%20on%20affiliation."
                        }
                        className="underline hover:text-white"
                    >
                        may be mediated by deindividuation
                    </Link>
                    . Greater pro-sociality is only seen towards those who
                    engage in the coordination,{" "}
                    <Link
                        href={
                            "https://www.tandfonline.com/doi/full/10.1080/00224545.2019.1623161"
                        }
                        className="underline hover:text-white"
                    >
                        not observers
                    </Link>
                    . Equally, greater pro-sociality is{" "}
                    <Link
                        href={
                            "https://link.springer.com/article/10.1007/s12144-019-00283-0"
                        }
                        className="underline hover:text-white"
                    >
                        not seen when people coordinate with common group
                        members
                    </Link>
                    . Together these findings suggest that coordination may be
                    fostering a common group mentality amongst co-actors,{" "}
                    <Link
                        href={
                            "https://www.degruyter.com/document/doi/10.1515/psych-2018-0018/html"
                        }
                        className="underline hover:text-white"
                    >
                        which explains the board myriad of effects coordination
                        has
                    </Link>
                    . After coordinating,{" "}
                    <Link
                        href={
                            "https://www.degruyter.com/document/doi/10.1515/psych-2020-0110/html"
                        }
                        className="underline hover:text-white"
                    >
                        people are more likely to view their identities in more
                        social ways
                    </Link>
                    , and both{" "}
                    <Link
                        href={
                            "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0216585"
                        }
                        className="underline hover:text-white"
                    >
                        actual
                    </Link>{" "}
                    and{" "}
                    <Link
                        href={
                            "https://link.springer.com/article/10.1007/s12646-020-00568-6"
                        }
                        className="underline hover:text-white"
                    >
                        imagined
                    </Link>{" "}
                    coordination can even reduce prejudice towards
                    disenfranchised groups.
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
                                x.tags?.includes("synchrony") ||
                                x.tags?.includes("social")
                        )
                        .map(({ title, url, id }) => (
                            <DividedListLink
                                lKey={id}
                                href={url}
                                extraStyles="text-secondary-white text-start text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto"
                            >
                                {title}
                            </DividedListLink>
                        ))}
                </ul>
            </aside>
        </div>
    );
};

export default SynchronyAndSocialCognition;
