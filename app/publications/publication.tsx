import Link from "next/link";
import DividedListItem from "../components/DividedListItem";

interface PublicationProps {
    title: string;
    href: string;
}

const Publication = ({ title, href }: PublicationProps) => {
    return (
        <>
            <DividedListItem listKey={href} extraStyles="text-center [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto">
                <Link href={href} className="text-white underline hover:text-secondary-white">
                    {title}
                </Link>
                {/* <div className="mb-[50px] h-[2px] bg-white opacity-10" /> */}
            </DividedListItem>
        </>
    );
};

export default Publication;
