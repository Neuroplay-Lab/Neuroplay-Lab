"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants/constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

import Image from "next/image";
import getStartedImg from "../../public/get-started.webp";

const PrimaryResearch = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                className={`flex-1 ${styles.flexCenter}`}
                variants={fadeIn("left", "tween", 0.2, 1)}
            >
                <Image
                    src={getStartedImg}
                    alt="get-started"
                    className="w-[90%] h-[90%] object-contain"
                />
            </motion.div>
            <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] flex justify-center flex-col"
            >
                <TypingText title="| Primary Research Areas" />
                <TitleText title={<>We are currently looking into...</>} />
                <div className="mt-[31px] flex flex-col gap-[24px]">
                    {startingFeatures.map((feature, index) => (
                        <StartSteps
                            key={feature}
                            number={`${index < 10 ? "0" : ""} ${index + 1}`}
                            text={feature}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default PrimaryResearch;
