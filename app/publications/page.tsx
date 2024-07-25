import Link from "next/link";
import { TitleText, TypingText } from "../components";
import DividedListItem from "../components/DividedListItem";
import publications from "./publications.json";

const Publications = () => {
    let id = "e91e3055412fb197b7f8e51414ea3975";
    let url = "https://link.springer.com/article/10.1007/s10803-024-06408-0";
    let title =
        "Game changer: Exploring the role of board games in the lives of autistic people";
    let authors = ["Gray Atherton", "Emily Dawson", "Liam Cross"];
    let journal = "The American Journal of Play";
    let volume = 16;
    let number = 1;
    let page = null;
    let year = 2024;
    return (
        <>
            <TitleText title={"Publications"} textStyles={"text-center mx-2"} />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-12">
                Links below:
            </p>
            <section className="grid justify-center">
                <TypingText title={"Publications"} textStyles={"pl-8"} />
                <ul className="mt-6 w-fit">
                    <DividedListItem
                        listKey={id}
                        extraStyles={
                            "[&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto justify-center"
                        }
                    >
                        <div className="w-fit">
                            <Link key={id + "_list"} href={url}>
                                <div className="bg-slate-400 bg-opacity-0 hover:bg-opacity-10 p-4 rounded-xl">
                                    <p className="text-lg italic text-secondary-white pl-4">
                                        2024
                                    </p>
                                    <h3 className="text-white text-lg font-semibold ">
                                        {title}
                                    </h3>
                                    <div className="text-secondary-white text-base">
                                        <p>
                                            {authors.map((author, index) => (
                                                <span
                                                    key={"author" + index}
                                                    className="[&:not(:last-child)]:after:content-[',\00a0']"
                                                >
                                                    {author}
                                                </span>
                                            ))}
                                        </p>
                                        <p>
                                            {journal && <span>{journal}</span>}
                                            {volume && <span> {volume}</span>}
                                            {number && <span> ({number})</span>}
                                            {page && <span>, {page}</span>}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <button className="underline hover:text-white pl-4 font-medium text-secondary-white">
                                Show abstract
                            </button>
                        </div>
                    </DividedListItem>
                    <DividedListItem
                        listKey={id}
                        extraStyles={
                            "[&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto "
                        }
                    >
                        <Link
                            key={id + "_list"}
                            href={url}
                            className="text-white underline hover:text-secondary-white "
                        >
                            {title}
                        </Link>
                        <p>
                            {authors.map((author, index) => (
                                <span
                                    key={"author" + index}
                                    className="[&:not(:last-child)]:after:content-[',\00a0']"
                                >
                                    {author}
                                </span>
                            ))}
                        </p>
                        <p>
                            {journal && <span>{journal}</span>}
                            {volume && <span> {volume}</span>}
                            {number && <span> ({number})</span>}
                            {page && <span>, {page}</span>}
                        </p>
                    </DividedListItem>
                    {/* {publications.map(({ title, url, id }) => (
                        <DividedListLink href={url} lKey={id}>{title}</DividedListLink>
                    ))} */}
                </ul>
            </section>
        </>
    );
};

export default Publications;
