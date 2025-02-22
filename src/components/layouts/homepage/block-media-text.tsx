"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../../ui/button";
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
        hidden: { opacity: 0 },
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
        hidden: { opacity: 0, x: -50, y: 10 },
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
        hidden: { opacity: 0, scale: 0.9, x: 100 },
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
        <section ref={ref} id="presentation" className="w-full py-20 px-4 lg:px-0 lg:py-40 block">
            <div className="container mx-auto">
                <motion.div 
                    className="grid grid-cols-1 gap-16 items-center lg:grid-cols-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <motion.div 
                        className="col-span-1 lg:col-span-2 flex gap-8 flex-col"
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
                                className="font-outfit text-secondary-light leading-[2] font-light text-md tracking-wide pt-4"
                                variants={textVariants}
                            >
                                Développeur web passionné, je conçois des solutions sur mesure en fullstack, en alliant performance, design et expérience utilisateur. Fort de plusieurs années d&apos;alternance chez Doowup, j&apos;ai développé des ERP, des sites e-commerce et vitrines en exploitant des technologies comme React, Laravel, GraphQL et Docker. Spécialisé aussi dans WordPress et Strapi, j&apos;adapte et personnalise des CMS pour répondre aux besoins spécifiques des clients.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="flex flex-row gap-4"
                            variants={textVariants}
                        >
                            <Button variant="primary" link="/projets">
                                Voir tous les projets
                                <ArrowRightIcon />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <div className="col-span-1 lg:col-span-3 grid grid-cols-3 h-full gap-4 lg:gap-8 items-center">
                        <motion.div 
                            className="relative col-span-1 rounded-full overflow-hidden mb-20 min-h-[200px] aspect-[8/16]"
                            variants={imageVariants}
                            style={{ y: animationComplete ? y1 : 0 }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/about/photo_face.jpg"
                                    alt=""
                                    fill
                                    className="sepia-[.50] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative col-span-2 rounded-3xl overflow-hidden mt-20 min-h-[200px] aspect-square"
                            variants={imageVariants}
                            style={{ y: animationComplete ? y2 : 0 }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/about/photo_paysage_dos.jpg"
                                    alt=""
                                    fill
                                    className="sepia-[.25] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export { BlockMediaText };
