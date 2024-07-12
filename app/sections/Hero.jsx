'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import Image from 'next/image';
import heroImg from "../../public/Screenshot 2024-07-10 at 1.31.28 PM.png"

const Hero = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[100px] z-[0] -top-[20px]" />

        <Image
          src={heroImg}
          alt="hero_cover"
          className="w-full sm:h-[800px] h-[350px] object-cover rounded-tl-[100px] rounded-b-lg z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
