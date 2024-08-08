"use client";

import { motion } from "framer-motion";
import { TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

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
            <TitleText
                title={
                    <>
                        Welcome to the research world of{" "}
                        <span className="font-extrabold text-white">
                            Gray Atherton
                        </span>{" "}
                        and{" "}
                        <span className="font-extrabold text-white">
                            Liam Cross
                        </span>
                    </>
                }
                textStyles="text-center max-w-[1200px]"
            />

            <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="mt-8 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
                We are psychologists at University of Plymouth, United Kingdom.
                We delve into various facets of social and embodied cognition,
                exploring topics such as group dynamics, stereotypes, and
                pro-social behavior. Our keen interest lies in understanding
                autism spectrum disorder, examining social cognition and
                well-being enhancement strategies. We also undertake research in
                the area of Gamification, covering both modern board games, as
                well as a range of digital games, including the use of VR
                technology.
            </motion.p>
        </motion.div>
    </section>
);

export default Intro;
