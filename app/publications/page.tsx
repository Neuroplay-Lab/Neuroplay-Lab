import Link from "next/link";
import { TitleText, TypingText } from "../components";
import DividedListItem from "../components/DividedListItem";
import publications from "./publications.json";
import Abstract from "./abstract";

const Publications = () => {
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center mx-2"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Links below:
            </p>
            <section className="grid justify-center">
                <ul className="max-w-prose">
                    {publications.map(
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
                            <>
                                {journal &&
                                <DividedListItem
                                    listKey={id}
                                    extraStyles={
                                        "[&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto"
                                    }
                                >
                                        <Link
                                            key={id + "_list"}
                                            href={url}
                                            className="justify-self-center"
                                        >
                                            <div className="bg-slate-400 bg-opacity-0 hover:bg-opacity-10 p-4 rounded-xl">
                                                <p className="text-lg italic text-secondary-white pl-4">
                                                    {year}
                                                </p>
                                                <h3 className="text-white text-lg font-semibold ">
                                                    {title}
                                                </h3>
                                                <div className="text-secondary-white text-base">
                                                    <p>
                                                        {author.map(
                                                            (author, index) => (
                                                                <span
                                                                    key={
                                                                        "author" +
                                                                        index
                                                                    }
                                                                    className="[&:not(:last-child)]:after:content-[',\00a0']"
                                                                >
                                                                    {author}
                                                                </span>
                                                            )
                                                        )}
                                                    </p>
                                                    {journal && <p>
                                                        {journal && (
                                                            <span>
                                                                {journal}
                                                            </span>
                                                        )}
                                                        {volume && (
                                                            <span>
                                                                {" "}
                                                                {volume}
                                                            </span>
                                                        )}
                                                        {number && (
                                                            <span>
                                                                {" "}
                                                                ({number})
                                                            </span>
                                                        )}
                                                        {pages && (
                                                            <span>
                                                                , {pages}
                                                            </span>
                                                        )}
                                                    </p>}
                                                </div>
                                            </div>
                                        </Link>
                                        {abstract && (
                                            <Abstract>{abstract}</Abstract>
                                        )}
                                </DividedListItem>
                                }
                            </>
                        )
                    )}
                    {/* {publications.map(({ title, url, id }) => (
                        <DividedListLink href={url} lKey={id}>{title}</DividedListLink>
                    ))} */}
                </ul>
            </section>
        </>
    );
};

export default Publications;
