import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import ExternalLink from "./externalLink";

type CardProps = {
    title: string;
    slug: string;
    text: string;
    imgLink?: string | null;
    videoLink?: string | null;
    externalLink?: string | null;
};

export function Card({ title, text, slug = "#", imgLink, videoLink, externalLink }: CardProps) {
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
            className="flex flex-col gap-2 transform transition-all shadow-sm duration-300 hover:scale-105 group bg-white rounded-3xl p-2 pb-4 h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={`/projets/${slug}`} className="flex flex-col gap-2">
                <div className="aspect-video mb-2 relative overflow-hidden rounded-2xl border">

                    {imgLink && (
                        <Image
                            src={`/projects/${imgLink}`}
                            alt={`Cover Image for ${title}`}
                            fill
                            className="object-cover"
                        />
                    )}
                    {videoLink && (
                        <>
                            <div className="absolute ml-2 mt-2 p-2 bg-black/50 z-50 rounded-md">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                            >
                                <source src={`/projects/${videoLink}`} type="video/mp4" />
                                Votre navigateur ne prend pas en charge la vidéo.
                            </video>
                        </>
                    )}
                </div>
                <div className="flex px-4 items-center">
                    <div className="w-full">
                        {title && <h3 className="font-outfit text-xl text-secondary-dark">{title}</h3>}
                        {text && <p className="font-outfit text-secondary-light leading-[2] font-light text-md tracking-wide">{text}</p>}
                    </div>
                    <svg className="size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </Link>
            <div className="flex px-4">
                {externalLink && (
                    <ExternalLink url={externalLink} />
                )}
            </div>
        </div>
    );
}
