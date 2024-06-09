import { TitleText } from "../components";
import ImageCard from "../components/ImageCard";

const ResearchTopics = () => {
    return (
        <>
            <TitleText
                title={"Research Topics"}
                textStyles={"text-center mx-2"}
            />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-8 mx-2">
                Please click on a topic you would like to know more about
            </p>
            <div className="grid justify-center m-2 md:mx-4 lg:mx-8 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ImageCard
                    title="Synchrony and Social Cognition"
                    subtext=""
                    href="/research-topics/synchrony-and-social-cognition"
                    altTag="A crowd of people walking together in synchrony"
                    image="/crowd-2152653_960_720.jpg"
                />
                <ImageCard
                    title="Autism, Anthropomorphism and Theory of Mind"
                    subtext=""
                    href="/research-topics/autism-anthropomorphism-and-theory-of-mind"
                    altTag="A dog wearing a smart buisness suit"
                    image="/planet-06.jpg"
                />
                <ImageCard
                    title="Autism and Wellbeing"
                    subtext=""
                    href="/research-topics/autism-and-wellbeing"
                    altTag="A couple with linked arms and holding hands"
                    image="/autism-qol.jpg"
                />
                <ImageCard
                    title="Gamification"
                    subtext=""
                    href="/research-topics/gamification"
                    altTag="Close up of board game pieces on a table during a game"
                    image="/image-1.png"
                />
            </div>
        </>
    );
};

export default ResearchTopics;
