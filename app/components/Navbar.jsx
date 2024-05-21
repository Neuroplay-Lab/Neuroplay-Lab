'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (

  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        AUTOPLAY LAB
      </h2>

      <div className="flex items-center gap-8 lg:flex sm:hidden md:hidden">
        <a href="/" className="text-lg text-white hover:text-gray-300">Home</a>
        <a href="#about-section" className="text-lg text-white hover:text-gray-300">About Us</a>
        <a href="/about" className="text-lg text-white hover:text-gray-300">Contact</a>
        <a href="/about" className="text-lg text-white hover:text-gray-300">Press</a>
        <a href="/about" className="text-lg text-white hover:text-gray-300">Publications</a>
        <a href="/about" className="text-lg text-white hover:text-gray-300">Measures and Code</a>
        <a href="/about" className="text-lg text-white hover:text-gray-300">Research Topics</a>
      </div>

      <div className="flex items-center gap-8 md:show lg:hidden">
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </div>
  </motion.nav >
);

export default Navbar;
