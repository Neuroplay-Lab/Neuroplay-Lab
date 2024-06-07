'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Intro = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* <div className="gradient-02 z-0" /> */}
    <div className="absolute top-9 left-24 max-h-[15vh] w-[50%] inset-0 gradient-01 -z-10" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

        Welcome to the research world of <span className="font-extrabold text-white"> Gray Atherton </span> and <span className="font-extrabold text-white"> Liam Cross,</span> psychologists at University of Plymouth, United Kingdom. We delve into various facets of social and embodied cognition, exploring topics such as group dynamics, stereotypes, and pro-social behavior. Our keen interest lies in understanding autism spectrum disorder, examining social cognition and well-being enhancement strategies.
        {' '}
      </motion.p>

    </motion.div>
  </section >
);

export default Intro;
