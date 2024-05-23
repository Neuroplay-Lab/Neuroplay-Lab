"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import menuBarSvg from "../../public/three-horizontal-lines-icon.svg"


const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
        <div
            className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white uppercase">
                Neuroplay Lab
            </h2>

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

            <div className="flex items-center gap-8 md:show lg:hidden">
                <Image
                    src={menuBarSvg}
                    alt="menu"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain"
                />
            </div>
        </div>
    </motion.nav>
);

export default Navbar;
