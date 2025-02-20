"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import Model3DLogo from "@/components/ui/model";
import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WelcomeExample } from "../../ui/texts/texts";
import { ButtonScrollTop } from "../../ui/button-scroll-top";

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
        setMousePosition({ x: x, y: y });
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
        <div className="p-2 h-[100vh] pt-20">
            <div
                className="relative flex h-full w-full flex-col justify-center rounded-2xl p-8"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
                <div className="flex justify-between h-full">
                    <div className="flex items-center h-full">
                        <WelcomeExample />
                    </div>
                    <motion.div
                        className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full max-w-4xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="group relative h-full w-full rounded-full ml-16 relative overflow-hidden z-10 bg-secondary-dark"
                            variants={itemVariants}
                            style={{ y: portraitY }}
                        >
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