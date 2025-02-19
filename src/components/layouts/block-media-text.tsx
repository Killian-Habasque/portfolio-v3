"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

function BlockMediaText() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const containerVariants = {
        hidden: { 
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15,
                when: "beforeChildren"
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0,
            x: -50,
            y: 10
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.1,
                damping: 15
            }
        }
    };

    const imageVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.9,
            x: 100
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.1,
                damping: 15,
                onComplete: () => setAnimationComplete(true)
            }
        }
    };

    return (
        <div ref={ref} className="w-full py-40">
            <div className="container mx-auto">
                <motion.div 
                    className="grid grid-cols-1 gap-16 items-center lg:grid-cols-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-300px" }}
                >
                    <motion.div 
                        className="col-span-2 flex gap-8 flex-col"
                        variants={textVariants}
                    >
                        <div className="flex gap-4 flex-col">
                            <motion.h1 
                                className="text-5xl md:text-8xl tracking-wid max-w-xl font-outfit text-secondary-dark font-medium"
                                variants={textVariants}
                            >
                                Qui<br></br>
                                <span className="font-grandslang ">suis</span>-je ?
                            </motion.h1>
                            <motion.p 
                                className="font-outfit text-secondary-light leading-[2] font-light text-md tracking-wide"
                                variants={textVariants}
                            >
                                Salut ! Moi c&apos;est Killian Habasque. Je viens de Quimper dans le Finistère et j&apos;étudie actuellement à Laval. Je suis un étudiant passionné par le design et le développement Web. J&apos;ai eu de nombreuses expériences dans ce domaine dû à mes formations mais également lors de projets personnels. Je possède donc de bonnes compétences en langages de programmation comme le Html, CSS ou Php mais aussi en logiciels comme la suite Adobe ou Affinity.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="flex flex-row gap-4"
                            variants={textVariants}
                        >
                            <Button variant="primary" link="/test">
                                Bouton par défaut
                                <ArrowRightIcon />
                            </Button>
                        </motion.div>
                    </motion.div>
                    <div className="col-span-3 grid grid-cols-3 h-full gap-8 items-center">
                        <motion.div 
                            className="relative col-span-1 rounded-full overflow-hidden mb-20 aspect-[8/16]"
                            variants={imageVariants}
                            style={{ y: animationComplete ? y1 : 0 }}
                        >
                            <Image
                                src={`/20250215_1443121.jpg`}
                                alt=""
                                fill
                                className="sepia-[.50] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div 
                            className="relative col-span-2 rounded-3xl overflow-hidden mt-20 aspect-square"
                            variants={imageVariants}
                            style={{ y: animationComplete ? y2 : 0 }}
                        >
                            <Image
                                src={`/about-image1.jpg`}
                                alt=""
                                fill
                                className="sepia-[.25] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export { BlockMediaText };