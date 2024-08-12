"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants/constants";
import { fadeIn } from "../utils/motion";
import { ExploreCard, TitleText } from "../components";

import planetImg0 from "../../public/synchrony-walking-world.png";
import planetImg1 from "../../public/social-cognition-world.png";
import planetImg2 from "../../public/autism_child.png";
import planetImg3 from "../../public/anthropomorphism.png";
import planetImg4 from "../../public/gamification-world.png";

const Explore = () => {

    const exploreClick = (id) => {
        setActive(id);
    }

    const [active, setActive] = useState("world-3");

    const planetImages = [
        planetImg0,
        planetImg1,
        planetImg2,
        planetImg3,
        planetImg4,
    ];

    return (
        <section className={`${styles.paddings}`} id="explore">
            <TitleText
                title={
                    <>
                        We are interested in <br className="md:block hidden" />{" "}
                        exploring...
                    </>
                }
                textStyles="text-center"
            />
            <motion.div
                variants={fadeIn("right", "spring", 0, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mt-5 flex lg:flex-row flex-col min-h-[80vh] gap-5 xl:px-[5vw]"
            >
                {exploreWorlds.map((world, index) => (
                    <ExploreCard
                        key={world.id}
                        id={world.id}
                        title={world.title}
                        imgUrl={planetImages[world.imgNo]}
                        index={index}
                        active={active}
                        handleClick={exploreClick}
                        relevantPageLink={world.relevantPageLink}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Explore;
