'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2, textVariant3 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[40px] text-white ${textStyles}`}
  >
    {title.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {Array.from(el).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}{" "}
        </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const MainTitleText = ({ title, textStyles, subtext }) => (
  <div>
    <motion.h1
      variants={textVariant3(0.1)}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold text-5xl md:text-6xl lg:text-7xl text-white ${textStyles}`}
    >
      {title}
    </motion.h1>
    <motion.p
      variants={textVariant3(0.3)}
      initial="hidden"
      whileInView="show"
      className="text-lg md:text-xl mt-3 text-white font-light"
    >
      {subtext}
    </motion.p>
  </div>
);
