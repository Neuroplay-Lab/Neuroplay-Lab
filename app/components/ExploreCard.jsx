"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ExploreCard = ({
    id,
    imgUrl,
    title,
    index,
    active,
    handleClick,
    relevantPageLink,
}) => (
    <motion.div
        // variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${
            active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[1]"
        } 
      flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer lg:min-w-[f ] min-h-fit`}
        onClick={() => handleClick(id)}
    >
        <Link
            href={relevantPageLink ? relevantPageLink : ""}
            className={`${
                active === id
                    ? "absolute z-10 bg-slate-400 bg-opacity-0 hover:bg-opacity-10 w-full h-full rounded-[24px]"
                    : ""
            }
                ${relevantPageLink ? "" : "pointer-events-none"}`}
        />
        <Image
            src={imgUrl}
            className="absolute w-full h-full object-cover rounded-[24px]"
            width={600}
            height={600}
            alt={"Generic image card relating to " + title}
        />
        {active !== id ? (
            <h3 className="font-semibold text-[1rem] text-white relative lg:absolute z-0 lg:bottom-[17rem] lg:rotate-[-90deg] lg:origin-[0,0] mx-2 lg:mx-0 lg:w-[500px]">
                <span className="bg-[rgba(0,0,0,0.25)] rounded-md p-2">
                    {title}
                </span>
            </h3>
        ) : (
            <div className="absolute max-h-[90%] bottom-0 px-8 py-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                <h2 className="md:text-[20px] font-semibold sm:text-[32px] text-xl text-white">
                    {title}
                </h2>
                <span className="text-secondary-white text-lg">
                    Click to read more
                </span>
            </div>
        )}
    </motion.div>
);

export default ExploreCard;
