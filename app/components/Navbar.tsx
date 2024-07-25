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
        if (!isOpen) {
            document.body.classList.add("overflow-y-hidden");
            document.body.classList.add("fixed");
            document.body.classList.add("w-[100%]");
            document.body.classList.add("h-[100dvh]");
        } else {
            document.body.classList.remove("overflow-y-hidden");
            document.body.classList.remove("fixed");
            document.body.classList.remove("w-[100%]");
            document.body.classList.remove("h-[100dvh]");
        }
        console.log(!isOpen);
        toggleIsOpen(!isOpen);
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 sm:pr-8 z-20 relative`}
        >
            <div
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
                <h2 className="font-extrabold min-w-fit text-[24px] leading-[30.24px] text-white uppercase">
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
                <div className="items-center gap-4 min-[1125px]:gap-8 hidden lg:flex">
                    {/* TODO: fix spacing */}
                    <Link
                        href="/"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        scroll
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/press"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Press
                    </Link>
                    <Link
                        href="/seminars"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Seminars
                    </Link>
                    <Link
                        href="/publications"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Publications
                    </Link>
                    <Link
                        href="/measures-and-code"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Measures and Code
                    </Link>
                    <Link
                        href="/research-topics"
                        className="min-[1195px]:text-lg text-white hover:text-gray-300"
                    >
                        Research Topics
                    </Link>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="origin-top absolute overflow-hidden z-20 left-0 h-[100dvh] pb-[95px] top-full divide-y grid bg-primary-black w-full text-center text-xl font-light"
                        variants={mobileMenuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.div className="grid items-center">
                            <Link
                                href="/"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Home
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/#about-us"
                                scroll
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                About Us
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/contact"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Contact
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/press"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Press
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/seminars"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Seminars
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/publications"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Publications
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/measures-and-code"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Measures and Code
                            </Link>
                        </motion.div>
                        <motion.div className="grid items-center">
                            <Link
                                href="/research-topics"
                                className="text-white hover:text-gray-300"
                                onClick={handleMenuClick}
                            >
                                Research Topics
                            </Link>
                        </motion.div>
                        <div className="absolute top-[-32px] max-h-[15vh] w-[50%] inset-0 gradient-01 -z-10" />
                        <div className="absolute top-40 left-9 max-h-[15vh] w-[50%] inset-0 gradient-01 -z-10" />
                        <div className="absolute top-96 left-24 max-h-[15vh] w-[50%] inset-0 gradient-01 -z-10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
