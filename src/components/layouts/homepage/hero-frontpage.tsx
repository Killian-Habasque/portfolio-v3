"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import Model3DLogo from "@/components/ui/model";
import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WelcomeText } from "../../ui/texts/texts";
import { ButtonScrollTop } from "../../ui/button-scroll-top";
import CurvedText from "@/components/ui/texts/curved-text";
import Magnet from "@/components/ui/magnet";

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
        <div className="p-4 h-[100dvh] pt-20">
            <div
                className="relative flex h-full w-full flex-col justify-center rounded-2xl p-0 lg:p-8 items-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
                <div className="flex flex-col-reverse justify-end lg:justify-between h-full lg:flex-row max-w-md lg:max-w-full w-full lg:auto">
                    <div className="flex items-center py-8 pb-24 lg:pb-0 lg:py-0 lg:h-full">
                        <h1 className="sr-only">Killian Habasque</h1>
                        <h2 className="sr-only">Développeur web</h2>
                        <h2 className="sr-only">Portoflio 2025</h2>
                        <WelcomeText />
                    </div>
                    <motion.div
                        className="flex items-center w-full-8 lg:w-full -mx-8 lg:-mx-0 h-full max-h-96 lg:max-h-full grid grid-cols-2 gap-2 lg:gap-6 lg:py-0 lg:max-w-4xl 2xl:max-w-5xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="aspect-[2/3] group relative w-full rounded-full ml-8 lg:ml-16 relative overflow-hidden z-10 bg-secondary-dark"
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
                                <CurvedText text="#OpenToWork" className="-bottom-8" radius={175} />
                            </motion.div>
                            <Image
                                src={`/about/photo_3-4_face.jpg`}
                                alt={`Killian Habasque photo 3/4 face`}
                                fill
                                className="sepia-[.25] h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            className="aspect-[2/3] group relative w-full rounded-full overflow-hidden bg-secondary-dark"
                            variants={itemVariants2}
                            style={{ y: modelY }}
                        >

                            <RetroGrid />
                            <Model3DLogo mousePosition={mousePosition} />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="fixed bottom-6 left-6 lg:left-8 flex z-50">
                    <Magnet padding={50} disabled={false} magnetStrength={7}>
                         <ButtonScrollTop />
                    </Magnet>
                </div>
            </div>
        </div>
    );
};

export default HeroFrontpage;