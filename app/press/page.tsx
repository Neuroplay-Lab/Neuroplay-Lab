import { TitleText, TypingText } from "../components";
import PressCard from "./PressCard";



const Press = () => {
    return (
        <>
            <TitleText title={"Press"} textStyles={"text-center mx-4"} />
            <section className="m-4">
                <TypingText title={"Articles"} textStyles={"m-4 text-3xl"} />
                    <div className="grid m-2">
                        <PressCard />
                    </div>
            </section>
        </>
    );
};

export default Press;
