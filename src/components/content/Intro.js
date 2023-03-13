import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
    const sentenceVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.06,
            },
        },
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
            },
        },
    };

    const subtitleVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.7,
                duration: 1,
            },
        },
    };

    const introVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 0,
            transition: {
                delay: 2.7,
                duration: 1,
            },

        },
        exit: {
            opacity: 0,
        }
    };

    const name = "Juan Pablo Amaya García";

    return (
        <motion.div
            className={`fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black text-white text-center z-60 flex justify-center items-center flex-col`}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h2 className="text-3xl md:text-4xl"
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
            >
                {name.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letterVariants}>
                            {char}
                        </motion.span>
                    );
                })}
            </motion.h2>
            <motion.span className="italic text-lg md:text-2xl"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
            >
                Portafolio
            </motion.span>
        </motion.div>
    );
}