"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants/constants";
import { fadeIn } from "../utils/motion";
import { ExploreCard, TitleText } from "../components";

import planetImg1 from "../../public/planet-01.jpg";
import planetImg2 from "../../public/planet-02.jpg";
import planetImg3 from "../../public/planet-03.jpg";
import planetImg4 from "../../public/planet-04.jpg";
import planetImg6 from "../../public/anthropomorphism.png";
import planetImg7 from "../../public/autism_child.png";

const Explore = () => {
    const [active, setActive] = useState("world-2");

    const planetImages = [
        planetImg1,
        planetImg2,
        planetImg3,
        planetImg4,
        planetImg6,
        planetImg7,
    ];

    return (
        <section className={`${styles.paddings}`} id="explore">
            {/* <motion.div
                // variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            > */}
                <TitleText
                    title={
                        <>
                            We are interested in{" "}
                            <br className="md:block hidden" /> exploring...
                        </>
                    }
                    textStyles="text-center"
                />
                <motion.div variants={fadeIn("right", "spring", 0, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mt-5 flex lg:flex-row flex-col min-h-[80vh] gap-5 xl:px-[10vw]">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            id={world.id}
                            title={world.title}
                            imgUrl={planetImages[world.imgNo - 1]}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </motion.div>
            {/* </motion.div> */}
        </section>
    );
};

export default Explore;
