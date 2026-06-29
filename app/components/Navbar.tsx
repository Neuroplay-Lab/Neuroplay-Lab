"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles";
import { navVariants, mobileMenuVariants } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";
import menuBarSvg from "../../public/three-horizontal-lines-icon.svg";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/consultancy", label: "Consultancy" },
    { href: "/press", label: "Press" },
    { href: "/publications", label: "Publications" },
    { href: "/talks-and-videos", label: "Talks/Videos" },
    { href: "/measures-and-code", label: "Measures & Code" },
    { href: "/research-topics", label: "Research Topics" },
];

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
        toggleIsOpen(!isOpen);
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-6 sm:pr-8 z-20 relative`}
        >
            {/* Centred container — matches the 2xl:max-w-[1280px] innerWidth cap */}
            <div className="2xl:max-w-[1280px] w-full mx-auto flex items-center justify-between gap-6">

                {/* Brand name */}
                <h2 className="font-extrabold whitespace-nowrap text-[clamp(0.7rem,1.2vw,1.1rem)] leading-tight text-white uppercase self-center flex-shrink-0">
                    Dr Gray Atherton and Dr Liam Cross
                </h2>

                {/* Hamburger — visible below xl */}
                <div className="flex items-center lg:hidden">
                    <button onClick={handleMenuClick} aria-label="Open menu">
                        <Image
                            src={menuBarSvg}
                            alt="menu"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] object-contain"
                        />
                    </button>
                </div>

                {/* Desktop nav — hidden below xl */}
                <div className="hidden lg:flex items-center flex-wrap justify-end gap-y-1 gap-x-[clamp(0.4rem,0.7vw,1.25rem)] text-white text-[clamp(0.77rem,0.88vw,0.95rem)]">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="hover:text-secondary-white whitespace-nowrap"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="origin-top absolute overflow-hidden z-20 left-0 h-[100dvh] pb-[95px] top-full divide-y grid bg-primary-black w-full text-center text-xl font-light"
                        variants={mobileMenuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {navLinks.map(({ href, label }) => (
                            <motion.div key={href} className="grid items-center">
                                <Link
                                    href={href}
                                    className="text-white hover:text-gray-300"
                                    onClick={handleMenuClick}
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
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