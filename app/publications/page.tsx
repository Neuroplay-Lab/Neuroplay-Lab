import { TitleText } from "../components";
import publications from "./publications.json";
import Publication from "./publication";
import { Metadata } from "next";

const Publications = () => {
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center mx-2"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Links below:
            </p>
            <section className="grid justify-center">
                <ul className="max-w-prose">
                    {publications
                        .filter((x) => !x.hidden?.valueOf() === true)
                        .map(
                            ({
                                title,
                                url,
                                id,
                                author,
                                journal,
                                volume,
                                number,
                                pages,
                                year,
                                abstract,
                            }) => (
                                <Publication
                                    key={id + "_root"}
                                    title={title}
                                    url={url}
                                    id={id}
                                    author={author}
                                    journal={journal}
                                    volume={volume}
                                    number={number}
                                    pages={pages}
                                    year={year}
                                    abstract={abstract}
                                />
                            )
                        )}
                </ul>
            </section>
        </>
    );
};

export const metadata: Metadata = {
    title: "Publications",
    description:
        "A collation of published research papers authored by Drs Gray Atherton and Liam Cross.",
    openGraph: {
        title: "Publications",
        description:
            "Researched papers authored by Dr Gray Atherton and Dr Liam Cross.",
    },
};

export default Publications;
