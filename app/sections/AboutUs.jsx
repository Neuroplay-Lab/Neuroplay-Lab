import { motion } from 'framer-motion';
import styles from '../styles';
import { aboutGray } from '../constants/constants';
import { aboutLiam } from '../constants/constants';

import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

import Image from 'next/image';
import grImg from "../../public/gr-image.jpg"
import liImg from "../../public/li-image.jpg"

const AboutUs = () => (
  <section className={`p-4 md:p-8 relative z-10`} id='about-us'>
    <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.1}}
      >
        <TypingText title="| About us" />
    </motion.div>
    
    {/* Gray section */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto grid lg:grid-cols-2 gap-4`}
    >
        <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >
            <TitleText title={<>Dr. Gray Atherton</>} />
        </motion.div>

        <motion.div
            className={`flex-1 row-span-2 ${styles.flexCenter}`}
            variants={fadeIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >
            <Image
            src={grImg}
            alt="Dr Gray Atherton"
            className="w-[90%] h-[90%] object-contain"
            />
        </motion.div>

        <motion.div 
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="justify-end"
        initial="hidden"
        whileInView="show">
            {aboutGray.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
            ))}
        </motion.div>

    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto grid lg:grid-cols-2 gap-4`}
    >
        <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >
            <TitleText title={<>Dr. Liam Cross</>} />
        </motion.div>

        <motion.div
            className={`flex-1 row-span-2 ${styles.flexCenter}`}
            variants={fadeIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >
            <Image
          src={liImg}
          alt="Dr Liam Cross"
          className="w-[90%] h-[90%] object-contain"
        />
        </motion.div>

        <motion.div 
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="justify-end"
        initial="hidden"
        whileInView="show">
            {aboutLiam.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
            ))}
        </motion.div>

    </motion.div>
  </section>
);

export default AboutUs;
