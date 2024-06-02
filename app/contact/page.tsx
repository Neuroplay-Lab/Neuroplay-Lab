import Link from "next/link";
import { TitleText } from "../components";
import DividedListItem from "../components/DividedListItem";

const Contact = () => {
    return (
        <>
            <TitleText
                title={"Contact Information"}
                textStyles={"text-center mx-4"}
            />
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-8 mx-4">
                Please use our contact information below, or reach out using the
                form on this page.
            </p>
            <div className="md:flex justify-center md:space-x-4">
                <ul>
                    <DividedListItem
                        listKey="X"
                        extraStyles="mb-4 [&:not(:last-child)]:after:my-6"
                    >
                        <h3 className="font-medium text-white text-2xl m-3">
                            X
                        </h3>
                        <span className="text-white font-medium">
                            Liam Cross:{" "}
                        </span>
                        <Link
                            href="https://twitter.com/CrossAtherton"
                            className="text-secondary-white underline"
                        >
                            @CrossAtherton
                        </Link>
                    </DividedListItem>
                    <DividedListItem
                        listKey="email"
                        extraStyles="mb-4 [&:not(:last-child)]:after:my-6"
                    >
                        <h3 className="font-medium text-white text-2xl m-3">
                            Email
                        </h3>
                        <p className="my-3">
                            <span className="text-white font-medium">
                                Gray Atherton:{" "}
                            </span>
                            <a
                                href="mailto: gray.s.atherton@vanderbilt.edu"
                                className="text-secondary-white underline"
                            >
                                gray.s.atherton@vanderbilt.edu
                            </a>
                        </p>
                        <p className="my-3">
                            <span className="text-white font-medium">
                                Liam Cross:{" "}
                            </span>
                            <a
                                href="mailto: drliamcross@gmail.com"
                                className="text-secondary-white underline"
                            >
                                drliamcross@gmail.com
                            </a>
                        </p>
                    </DividedListItem>
                    <DividedListItem listKey="researchProfiles">
                        <h3 className="font-medium text-white text-2xl m-3">
                            Research Profiles
                        </h3>
                        <ul>
                            <DividedListItem
                                listKey="grayResearchProfiles"
                                extraStyles="mx-1 mb-2 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:my-4"
                            >
                                <h4 className="text-white text-lg m-1">
                                    Gray Atherton
                                </h4>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://www.plymouth.ac.uk/staff/gray-atherton">
                                        University
                                    </Link>
                                </p>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://edgehill.academia.edu/GrayAtherton">
                                        Academia.edu
                                    </Link>
                                </p>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://www.researchgate.net/profile/Gray_Atherton">
                                        ResearchGate
                                    </Link>
                                </p>
                            </DividedListItem>
                            <DividedListItem
                                listKey="liamResearchProfiles"
                                extraStyles="mx-1 mb-2 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:my-4"
                            >
                                {/* Possibly outdated and ready htmlFor removal? (EdgeHill) */}
                                <h4 className="text-white text-lg m-1">
                                    Liam Cross
                                </h4>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://www.plymouth.ac.uk/staff/liam-cross">
                                        University
                                    </Link>
                                </p>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://edgehill.academia.edu/LiamCross">
                                        Academia.edu
                                    </Link>
                                </p>
                                <p className="my-1 text-secondary-white underline">
                                    <Link href="https://www.researchgate.net/profile/Liam_Cross2">
                                        ResearchGate
                                    </Link>
                                </p>
                            </DividedListItem>
                        </ul>
                    </DividedListItem>
                </ul>
                <div className="pt-4">
                    <h3 className="text-center font-semibold text-2xl m-4 text-white">
                        Contact Form
                    </h3>
                    <form method="post" className="m-4" action="">
                        <div className="m-3 flex flex-col">
                            <label
                                className="block text-secondary-white font-bold py-1"
                                htmlFor="name"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        <div className="m-3 flex flex-col">
                            <label
                                className="block text-secondary-white font-bold py-1"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your e-mail address"
                                required
                                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            />
                        </div>
                        <div className="m-3 flex flex-col">
                            <label
                                className="block text-secondary-white font-bold py-1"
                                htmlFor="message"
                            >
                                Message:
                            </label>
                            <textarea
                                className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                name="message"
                                rows={7}
                            ></textarea>
                            <button
                                type="submit"
                                className="shadow bg-[#25618B] hover:bg-[#25828b] focus:shadow-outline focus:outline-none text-white font-bold my-2 py-2 px-4 rounded"
                            >
                                Send
                            </button>
                            <p className="text-center text-secondary-white">
                                <small>
                                    (Powered by{" "}
                                    <a rel="nofollow" href="https://un-static.com/">
                                        Un-static Forms
                                    </a>
                                    )
                                </small>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
