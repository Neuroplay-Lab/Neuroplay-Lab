import Link from "next/link";

interface PublicationProps {
    title: string;
    href: string;
}

const Publication = ({ title, href }: PublicationProps) => {
    return (
        <>
            <li key={href} className="mx-12 mb-8 text-center relative
            [&:not(:last-child)]:after:content-['']
            [&:not(:last-child)]:after:block
            [&:not(:last-child)]:after:m-8
            [&:not(:last-child)]:after:border-b
            [&:not(:last-child)]:after:border-b-[#b0b0b0]
            [&:not(:last-child)]:after:w-1/2
            [&:not(:last-child)]:after:right-10
            [&:not(:last-child)]:after:mx-auto">
                <Link href={href} className="text-white underline hover:text-secondary-white">
                    {title}
                </Link>
                {/* <div className="mb-[50px] h-[2px] bg-white opacity-10" /> */}
            </li>
        </>
    );
};

export default Publication;
