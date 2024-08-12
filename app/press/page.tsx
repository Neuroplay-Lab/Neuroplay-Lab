import Link from "next/link";
import { TitleText, TypingText } from "../components";
import ImageCard from "../components/ImageCard";
import pressArticles from "./pressArticles.json";

const Press = () => {
    return (
        <>
            <TitleText title={"Press"} textStyles={"text-center mx-4"} />
            <section className="m-4 md:mx-8">
                <TypingText title={"Featured Articles"} textStyles={"m-4 text-3xl"} />
                <div className="grid m-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {pressArticles.filter(
                        (x) =>
                            x.tags?.includes("featured")
                    )
                    .map(
                        ({ id, title, publisher, url, image, date }) => (
                            <ImageCard
                                title={title}
                                subtext={publisher + ", " + date}
                                href={url}
                                image={image}
                                altTag={"Image from " + publisher + " article"}
                                key={id}
                                styles={"justify-self-center w-full"}
                            />
                        )
                    )}
                </div>
            </section>
            <span className="m-8 mt-12 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText title={"All Other Articles"} textStyles={"m-4 text-3xl"} />
                <div className="grid justify-center m-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {pressArticles.filter(
                        (x) =>
                            !x.tags?.includes("featured") &&
                            !x.tags?.includes("hidden")
                    )
                    .map(
                        ({ id, title, publisher, url, image, date }) => (
                            <ImageCard
                                title={title.length < 70 ? title : title.substring(0, 70) + "..."}
                                subtext={publisher + ", " + date}
                                href={url}
                                image={image}
                                altTag={"Image from " + publisher + " article"}
                                key={id}
                            />
                        )
                    )}
                </div>
            </section>
            <span className="m-8 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <p className="text-[18px] text-[#B0B0B0] leading-[32.4px] mx-4 md:mx-8">
                Also, please check out our{" "}
                <Link
                    className="underline text-secondary-white hover:text-white font-medium"
                    href="https://www.psychologytoday.com/gb/contributors/liam-cross-phd-and-gray-atherton-phd"
                >
                    Psychology Today
                </Link>{" "}
                blog for some interesting posts!
            </p>
        </>
    );
};

export default Press;
