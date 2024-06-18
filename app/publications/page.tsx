import { TitleText } from "../components";
import DividedListLink from "../components/DividedListLink";
import publications from "./publications.json";

const Publications = () => {
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center mx-2"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Links below:
            </p>
            <ul>
                {publications.map(({ title, url, id }) => (
                    <DividedListLink href={url} lKey={id}>{title}</DividedListLink>
                ))}
            </ul>
        </>
    );
};

export default Publications;
