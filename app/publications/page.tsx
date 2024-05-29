import { TitleText } from "../components";
import Publication from "./publication";
import publications from "./publications.json";

const Publications = () => {
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Click for download/link to full text{" "}
            </p>
            <ul>
                {publications.map(({ title, href }) => (
                    <Publication title={title} href={href} />
                ))}
            </ul>
        </>
    );
};

export default Publications;
