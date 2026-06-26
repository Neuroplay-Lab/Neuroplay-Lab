"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { aboutGray, aboutLiam } from "../constants/constants";

import { NewFeatures, TitleText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

import Image from "next/image";
import grImg from "../../public/gray.webp";
import liImg from "../../public/liam.webp";

const PersonSection = ({ name, img, altText, features, direction }) => (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto mb-12`}
    >
        <motion.div
            variants={fadeIn(direction, "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="mb-4"
        >
            <TitleText title={name} textStyles="text-[32px] md:text-[40px]" />
        </motion.div>

        {/* Image + Background row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-start mb-6">
            <motion.div
                className="md:col-span-1 lg:col-span-2 relative md:mt-2"
                variants={fadeIn("left", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
            >
                <div className="absolute w-full h-full hero-gradient rounded-xl -z-[1]" />
                {/* <div className="absolute w-full h-[10px] hero-gradient rounded-tl-[100px] rounded-tr-[100px] z-[0] -top-[10px]" /> */}
                {/* <div className="absolute h-full w-[10px] hero-gradient rounded-bl-[100px] z-[0]" /> */}
                <Image
                    src={img}
                    alt={altText}
                    className="w-full rounded-xl object-cover pl-2 pt-2"
                />
            </motion.div>

            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className="md:col-span-1 lg:col-span-3 flex flex-col gap-4"
            >
                {/* Background always shows beside image at md+ */}
                <div>
                    <h1 className="font-bold text-[18px] leading-[30px] text-white">
                        {features[0].title}
                    </h1>
                    <p className="mt-2 font-normal text-[14px] text-[#B0B0B0] leading-[26px]">
                        {features[0].subtitle}
                    </p>
                </div>

                {/* Research interests hidden here on md, shown in full-width section below */}
                <div className="hidden lg:block">
                    {features.slice(1).map((feature) => (
                        <div key={feature.title} className="mt-4">
                            <h1 className="font-bold text-[18px] leading-[30px] text-white">
                                {feature.title}
                            </h1>
                            {Array.isArray(feature.subtitle)
                                ? feature.subtitle.map((para, i) => (
                                    <p key={i} className="mt-2 font-normal text-[14px] text-[#B0B0B0] leading-[26px]">
                                        {para}
                                    </p>
                                ))
                                : (
                                    <p className="mt-2 font-normal text-[14px] text-[#B0B0B0] leading-[26px]">
                                        {feature.subtitle}
                                    </p>
                                )
                            }
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Research interests shown below image on md, hidden on lg where they appear inline */}
        <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="lg:hidden"
        >
            {features.slice(1).map((feature) => (
                <div key={feature.title} className="mb-4">
                    <h1 className="font-bold text-[18px] leading-[30px] text-white">
                        {feature.title}
                    </h1>
                    <p className="mt-2 font-normal text-[14px] text-[#B0B0B0] leading-[26px]">
                        {feature.subtitle}
                    </p>
                </div>
            ))}
        </motion.div>
    </motion.div>
);

const AboutUs = () => (
    <section className={`p-4 md:p-8 relative z-10`} id="about-us">
        <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex justify-center flex-col mb-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
        >
            <TitleText title={"About Us"} textStyles={"text-center mx-4"} />
        </motion.div>

        <PersonSection
            name="Dr. Gray Atherton"
            img={grImg}
            altText="Dr Gray Atherton"
            features={aboutGray}
            direction="right"
        />

        <div className={`${styles.innerWidth} mx-auto mb-10 h-[1px] bg-white opacity-10`} />

        <PersonSection
            name="Dr. Liam Cross"
            img={liImg}
            altText="Dr Liam Cross"
            features={aboutLiam}
            direction="left"
        />
    </section>
);

export default AboutUs;