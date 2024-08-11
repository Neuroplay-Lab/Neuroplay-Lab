import Link from "next/link";
import DividedListItem from "../components/DividedListItem";
import Abstract from "./abstract";

interface Props {
    title: string;
    url: string;
    id: string;
    author?: string[];
    journal?: string;
    volume?: string | number;
    number?: string | number;
    pages?: string | number;
    year?: number;
    abstract?: string;
    extraStyles?: string;
}

const Publication = ({
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
    extraStyles,
}: Props) => {
    return (
        <>
            <DividedListItem
                listKey={id}
                extraStyles={
                    "[&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto " + extraStyles
                }
            >
                <Link
                    key={id + "_list"}
                    href={url}
                    className="justify-self-center"
                >
                    <div className="bg-slate-400 bg-opacity-0 hover:bg-opacity-10 p-4 rounded-xl">
                        {year && (<p className="text-lg italic text-secondary-white pl-4">
                            {year}
                        </p>)}
                        <h3 className="text-white text-lg font-semibold ">
                            {title}
                        </h3>
                        <div className="text-secondary-white text-base">
                            {author && (<p>
                                {author.map((author, index) => (
                                    <span
                                        key={"author" + index}
                                        className="[&:not(:last-child)]:after:content-[',\00a0']"
                                    >
                                        {author}
                                    </span>
                                ))}
                            </p>)}
                            {journal && (
                                <p>
                                    {journal && <span>{journal}</span>}
                                    {volume && <span> {volume}</span>}
                                    {number && <span> ({number})</span>}
                                    {pages && <span>, {pages}</span>}
                                </p>
                            )}
                        </div>
                    </div>
                </Link>
                {abstract && <Abstract>{abstract}</Abstract>}
            </DividedListItem>
        </>
    );
};

export default Publication;
