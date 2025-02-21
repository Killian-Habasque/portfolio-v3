"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import Model3DLogo from "@/components/ui/model";
import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WelcomeExample } from "../../ui/texts/texts";
import { ButtonScrollTop } from "../../ui/button-scroll-top";
import CurvedText from "@/components/ui/CurvedText";

type Props = {
    children?: React.ReactNode;
};

const HeroFrontpage: React.FC<Props> = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();

    const portraitY = useTransform(scrollY, [0, 1000], [0, 100]);
    const modelY = useTransform(scrollY, [0, 1000], [0, 50]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: x * 2, y: y * 1.5 });
    }, []);

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                damping: 10,
            },
        },
    };

    const itemVariants2 = {
        hidden: {
            opacity: 0,
            x: 400,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                damping: 10,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="p-4 h-[100vh] pt-20">
            <div
                className="relative flex h-full w-full flex-col justify-center rounded-2xl p-0 lg:p-8"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
                <div className="flex flex-col-reverse justify-between h-full lg:flex-row">
                    <div className="flex items-center pb-32 lg:pb-16 lg:h-full">
                        <WelcomeExample />
                    </div>
                    <motion.div
                        className="w-full-8 lg:w-full -mx-8 lg:-mx-0 h-full grid grid-cols-2 gap-2 lg:gap-6 py-16 lg:py-0 h-full max-w-4xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="group relative h-full w-full rounded-full ml-8 lg:ml-16 relative overflow-hidden z-10 bg-secondary-dark"
                            variants={itemVariants}
                            style={{ y: portraitY }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120, 
                                    damping: 12,
                                    delay: 2
                                }}
                                className="absolute h-full w-full z-10 hidden lg:block"
                            >
                                <CurvedText text="Ouvert aux opportunités !" className="absolute -bottom-8" radius={175} />
                            </motion.div>
                            <Image
                                src={`/about/photo_3-4_face.jpg`}
                                alt={`Cover Image`}
                                fill
                                className="sepia-[.25] h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            className="group relative h-full w-full rounded-full overflow-hidden bg-secondary-dark"
                            variants={itemVariants2}
                            style={{ y: modelY }}
                        >

                            <RetroGrid />
                            <Model3DLogo mousePosition={mousePosition} />
                        </motion.div>
                    </motion.div>
                </div>
                <ButtonScrollTop />
            </div>
        </div>
    );
};

export default HeroFrontpage;