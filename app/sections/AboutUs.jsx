import { motion } from 'framer-motion';
import styles from '../styles';
import { aboutGray } from '../constants';
import { aboutLiam } from '../constants';

import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const AboutUs = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| About us" />
        <TitleText title={<>Dr. Gray Atherton</>} />

        <div className="mt-[34px] justify-end">
          {aboutGray.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/gr-image.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 mt-16`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>Dr. Liam Cross</>} />

        <div className="mt-[34px] justify-end">
          {aboutLiam.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/li-image.jpg"
          alt="liam-cross"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default AboutUs;
