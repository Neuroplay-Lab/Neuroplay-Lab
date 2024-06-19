import Link from "next/link";
import { TitleText, TypingText } from "../components";
import ImageCard from "../components/ImageCard";
import pressArticles from "./pressArticles.json";

const Press = () => {
    return (
        <>
            <TitleText title={"Press"} textStyles={"text-center mx-4"} />
            <section className="m-4 md:mx-8">
                <TypingText title={"Articles"} textStyles={"m-4 text-3xl"} />
                <div className="grid justify-center m-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {pressArticles.map(
                        ({ title, publisher, href, image, imageAlt }) => (
                            <ImageCard
                                title={title}
                                subtext={publisher}
                                href={href}
                                image={image}
                                altTag={imageAlt}
                                key={href}
                            />
                        )
                    )}
                </div>
            </section>
            <span className="m-8 w-1/2 mx-auto block border-b border-b-[#b0b0b0]"></span>
            <section className="m-4 md:mx-8">
                <TypingText
                    title={"Seminars"}
                    textStyles={"mx-4 mb-2 text-3xl"}
                />
                <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] mb-4">
                    Here are a few seminars Gray did for the Autism Research
                    Institute
                </p>
                <div className="grid gap-4 md:grid-cols-2 justify-center">
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/V-wcTCVh-oc?si=h1jKF6KrD6FsAZDo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="max-w-full aspect-video"
                        width={560}
                        src="https://www.youtube.com/embed/_9ctfGPeEIY?si=v9f0aBHuqGQbscDK"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
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
