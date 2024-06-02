"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles";
import { navVariants, mobileMenuVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import menuBarSvg from "../../public/three-horizontal-lines-icon.svg";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, toggleIsOpen] = useState(false);

    const handleMenuClick = () => {
        toggleIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 sm:pr-8 relative`}
        >
            <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
            <div
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
                <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white uppercase">
                    Neuroplay Lab
                </h2>
                <div className="flex items-center gap-8 md:show lg:hidden">
                    <button onClick={handleMenuClick}>
                        <Image
                            src={menuBarSvg}
                            alt="menu"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] object-contain"
                        />
                    </button>
                </div>
                <div className="items-center gap-8 hidden lg:flex">
                    <Link
                        href="/"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about-us"
                        scroll
                        className="text-lg text-white hover:text-gray-300"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/press"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Press
                    </Link>
                    <Link
                        href="/publications"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Publications
                    </Link>
                    <Link
                        href="/measures-and-code"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Measures and Code
                    </Link>
                    <Link
                        href="/reasearch-topics"
                        className="text-lg text-white hover:text-gray-300"
                    >
                        Research Topics
                    </Link>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && <motion.ul className="origin-top text-center mt-1" variants={mobileMenuVariants} initial="initial" animate="animate" exit="exit">
                    <motion.li className="my-1">
                        <Link
                            href="/"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Home
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/#about-us"
                            scroll
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            About Us
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/contact"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Contact
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/press"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Press
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/publications"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Publications
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/measures-and-code"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Measures and Code
                        </Link>
                    </motion.li>
                    <motion.li className="my-1">
                        <Link
                            href="/reasearch-topics"
                            className="text-lg text-white hover:text-gray-300"
                            onClick={handleMenuClick}
                        >
                            Research Topics
                        </Link>
                    </motion.li>
                </motion.ul>}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
