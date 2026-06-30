"use client";

import { motion } from "framer-motion";
import { MainTitleText } from "../components";

import styles from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import heroImg from "../../public/hero-img.webp";
import Image from "next/image";
import StylizedImage from "../components/StylizedImage";

const Intro = () => (
    <section className={`${styles.paddings} relative z-10`}>
        {/* <div className="gradient-02 z-0" /> */}
        {/* <div className="absolute top-9 left-24 max-h-[15vh] w-[50%] inset-0 gradient-01 -z-10" /> */}
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <MainTitleText
                title={
                    <>
                        Neuroplay Lab
                    </>
                }
                textStyles="text-center"
                subtext="Advancing research in play, cognition, and neurodiversity"
            />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                    <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mt-14 text-base sm:text-lg text-center text-secondary-white"
                    >
                        We are psychologists at the University of Plymouth, UK, exploring how play, games, and imagination shape cognition, behaviour, and social connection. Our research focuses on neurodiversity, aiming to understand variations in social experience and leverage gaming to enhance wellbeing, inclusion, and belonging.
                    </motion.p>
                    <motion.p
                        variants={fadeIn("up", "tween", 0.3, 1)}
                        className="mt-14 text-base sm:text-lg text-center text-secondary-white"
                    >
                        From tabletop board games to virtual reality, we examine how structured play can bring people together and support cognitive and social development. To achieve this, our lab utilizes a rigorous mixed-methods approach—bridging experimental laboratory research with real-world, community-based studies. Committed to creating meaningful change, we actively collaborate with industry partners to translate our findings into real-world applications that foster social good and support neurodivergent communities.
                    </motion.p>
                </div>
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="relative flex-shrink-0 w-[300px] mt-8 self-center"
                >
                    <StylizedImage
                        imageProps={{
                            src: heroImg,
                            alt: "hero_cover",
                            priority: true,
                        }}
                        className="w-full h-auto object-cover rounded-tl-[100px] rounded-b-lg z-10 relative"
                        paddingClasses="pt-6"
                        alternateRounding="rounded-tl-[100px] rounded-b-lg"
                    />
                </motion.div>
            </div>
        </motion.div>
    </section>
);

export default Intro;
