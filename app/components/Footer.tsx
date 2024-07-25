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
            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />
                <div className="flex items-center md:justify-between flex-wrap md:gap-4">
                    <div className="flex items-center">
                        <h4 className="font-extrabold text-[24px] text-white uppercase">
                            Neuroplay Lab
                        </h4>
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
