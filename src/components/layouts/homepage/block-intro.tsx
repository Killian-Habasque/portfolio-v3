"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BlockIntro = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.610, 0.355, 1.000]
            }
        }
    };

    return (
        <div ref={ref} id="more" className="w-full flex justify-end py-40 lg:py-60">
            <motion.div
                className="flex flex-col px-8 max-w-4xl gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ y }}
            >
                <motion.p
                    className="font-outfit text-2xl text-secondary-dark"
                    variants={itemVariants}
                >
                    Bienvenue sur mon portfolio ! Vous trouverez ici un aperçu de mon parcours et de mes réalisations en développement web.
                </motion.p>
                <motion.p
                    className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide"
                    variants={itemVariants}
                >
                    Spécialisé en fullstack, j’interviens sur la création d’applications, l’optimisation de sites e-commerce et la personnalisation de CMS comme WordPress. Toujours en quête d’innovation, j’aime relever de nouveaux défis pour développer des projets modernes et évolutifs.
                </motion.p>
            </motion.div>
        </div>
    );
}; 