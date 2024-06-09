import Image from "next/image";
import { TitleText } from "../../components";
import headerImg from "../../../public/crowd-2152653_960_720.jpg";

import publications from "../../publications/publications.json" /** TODO: Remove when actual publications are added */
import DividedListItem from "../../components/DividedListItem";

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
                    People regularly move in time with one another. We sing, dance
                    and even walk in time with those around us. A great deal of work
                    has now shown that moving in time together has pro-social
                    consequences, such as increasing liking, rapport, and
                    cooperation towards co-actors. However, these social effects of
                    coordination go beyond the pro-social. Coordination also has a
                    dark side leading people to be more likely to comply with the
                    destructive requests of our co-actors. Our work in this area
                    explores how, why and when coordination has the social
                    consequences it does.
                </p>
                <p className="my-2">
                    Through various quantitative and mixed methods studies, this
                    research highlights how coordination may lead to co-actors
                    identifying as common group members, which explains the social
                    consequences coordination has and why it has them. This group
                    formation framework explains how coordination leads to various
                    socio-cognitive consequences by leading individuals to view
                    themselves and their co-actors in common group terms. This leads
                    to an individual’s sense of self becoming temporarily diluted as
                    an interdependent identity becomes more salient, thus leading to
                    a range of pro-group consequences.
                </p>
                <iframe
                    className="max-w-full aspect-video p-3 border-y border-[#b0b0b0] my-3 self-center md:p-5"
                    width={750}
                    src="https://www.youtube.com/embed/9sTUw5QLarU"
                    title="[AGTN] How Moving Together Binds Us Together - Dr. Liam Cross"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <p className="my-2"> {/* TODO: there are links in this p that need adding */}
                    Our work shows that it’s not only strict in-phase synchrony
                    that’s capable of having pro-social effects but also other forms
                    of coordination and even imagined coordination, though
                    incidental coordination, which is not intentional, does not lead
                    to the same effects. These pro-social effects persist outside
                    the lab for at least 24 hours and may be mediated by
                    deindividuation. Greater pro-sociality is only seen towards
                    those who engage in the coordination, not observers. Equally,
                    greater pro-sociality is not seen when people coordinate with
                    common group members. Together these findings suggest that
                    coordination may be fostering a common group mentality amongst
                    co-actors, which explains the board myriad of effects
                    coordination has. After coordinating, people are more likely to
                    view their identities in more social ways, and both actual and
                    imagined coordination can even reduce prejudice towards
                    disenfranchised groups.
                </p>
            </main>
            <aside className="px-8 py-4 lg:bg-slate-400 lg:bg-opacity-10 lg:max-h-screen sticky top-0">
                <h4 className="text-white italic font-medium mb-3 ml-3 lg:my-6">Links to papers:</h4>
                <ul className="overflow-y-scroll overflow-x-clip lg:h-[90%]">
                {publications.map(({ title, href }) => (
                    <DividedListItem listKey="href" extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto">{title}</DividedListItem>
                ))}
                {publications.map(({ title, href }) => (
                    <DividedListItem listKey="href" extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto">{title}</DividedListItem>
                ))}
                {publications.map(({ title, href }) => (
                    <DividedListItem listKey="href" extraStyles="text-secondary-white text-sm mx-0 mb-4 lg:[&:not(:last-child)]:after:my-8 [&:not(:last-child)]:after:my-4 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto">{title}</DividedListItem>
                ))}
                </ul>
            </aside>
        </div>
    );
};

export default SynchronyAndSocialCognition;
