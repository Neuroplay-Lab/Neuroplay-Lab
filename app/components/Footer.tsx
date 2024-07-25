"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import brainImg from "../../public/icons8-brain-64.png";

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className={`${styles.xPaddings} py-8 relative overflow-x-clip`}
    >
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            {/* TODO: No longer needed? */}
            {/* <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white">
                    Social and Embodied Cognition
                </h4>
                <button
                    type="button"
                    className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
                >
                    <Image
                        src="/icons8-brain-64.png"
                        alt="Brain icon"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px] object-contain"
                    />
                    <span className="font-normal text-[16px] text-white">
                        Explore now
                    </span>
                </button>
            </div> */}

            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />
                <div className="flex items-center md:justify-between flex-wrap md:gap-4">
                    <div className="flex items-center">
                        <h4 className="font-extrabold text-[24px] text-white uppercase">
                            Neuroplay Lab
                        </h4>
                        {/* <div className="flex gap-4 md:order-2">
                            {socials.map((social) => (
                                <Image
                                    key={social.name}
                                    src={social.url}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                                />
                            ))}
                        </div> */}
                        <Image
                            src={brainImg}
                            alt="Brain icon"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] object-contain mx-3"
                        />
                    </div>
                    <p className="font-normal text-xs text-white opacity-50">
                        Copyright © 2024 {""} Neuroplay Lab. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
