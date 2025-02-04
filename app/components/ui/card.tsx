import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icon";
import { useState, useRef } from "react";

type CardProps = {
    title?: string;
    text?: string;
    link?: string;
    imgLink?: string;
    videoLink?: string; 
    externalLink?: string;
};

export function Card({ title, text, link = "#", imgLink, videoLink, externalLink }: CardProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play(); 
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause(); 
        }
    };

    return (
        <div
            className="flex flex-col gap-2 transform transition-all duration-300 hover:scale-110 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={link} className="flex flex-col gap-2">
                <div className="bg-[--color-dark] rounded-xl aspect-video mb-2 relative overflow-hidden ">
                    {imgLink && (
                        <Image
                            src={imgLink}
                            alt={title || "Image"}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    )}
                    {videoLink && (
                        <video
                            ref={videoRef} 
                            className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            loop
                            muted
                            playsInline
                        >
                            <source src={videoLink} type="video/mp4" />
                            Votre navigateur ne prend pas en charge la vidéo.
                        </video>
                    )}
                </div>
                {title && <h3 className="text-xl tracking-tight">{title}</h3>}
                {text && <p className="text-neutral-500 text-base">{text}</p>}
            </Link>
            {externalLink && (
                <a
                    target="_blank"
                    href={externalLink}
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center text-indigo-600 underline"
                >
                    <Icon label="link" />
                    {externalLink}
                </a>
            )}
        </div>
    );
}
