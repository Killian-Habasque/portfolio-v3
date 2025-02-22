"use client"

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/16/solid";

export interface BlockImageProps {
    image: string;
    colspan?: 1 | 2;  
}

export const BlockImage: React.FC<BlockImageProps> = ({ image, colspan = 2 }) => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-1 lg:col-span-2';
    
    return (
        <>
            <div 
                className={`${colspanClass} w-full relative overflow-hidden rounded-2xl border-2 aspect-video cursor-pointer group`}
                onClick={() => setIsImageOpen(true)}
            >
                <Image 
                    src={image} 
                    alt="Project Image" 
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsImageOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                        >
                            <div 
                                className="relative border-2 border-white rounded-2xl overflow-hidden h-auto group"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.button 
                                    className="absolute top-4 right-4 z-10 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 transition-opacity duration-200"
                                    onClick={() => setIsImageOpen(false)}
                                >
                                    <XCircleIcon className="size-5 fill-primary-light" />
                                </motion.button>
                                <Image
                                    src={image}
                                    alt="Project Image"
                                    className="max-h-[85vh] w-auto h-auto"
                                    width={1920}
                                    height={1080}
                                    priority
                                    unoptimized
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
