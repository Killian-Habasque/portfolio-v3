"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import Model3DLogo from "@/components/ui/model";
import { useCallback, useState } from "react";
import Image from "next/image";

type Props = {
    children?: React.ReactNode;
};

const HeroFrontpage: React.FC<Props> = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: x, y: y });
    }, []);

    return (
        <div className="p-2 bg-white h-[100vh] pt-20">
            <div
                className="border-2 relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl p-8"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
                <div className="flex justify-between h-full">
                    <div>
                        Killian
                        Habasque
                    </div>
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full max-w-4xl">
                        <div className="bg-red-300 h-full w-full rounded-full ml-16 relative overflow-hidden z-10">
                            <Image
                                src={`/20250215_1443121.jpg`}
                                alt={`Cover Image`}
                                fill
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="relative h-full w-full rounded-full overflow-hidden bg-[--color-dark]">
                            <RetroGrid />
                            <Model3DLogo mousePosition={mousePosition} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroFrontpage;
