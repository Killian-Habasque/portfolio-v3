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
            className="flex flex-col gap-2 transform transition-all duration-300 hover:scale-110 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={`/projets/${slug}`} className="flex flex-col gap-2">
                <div className="aspect-video mb-2 relative overflow-hidden rounded-xl border-2">
                    {imgLink && (
                        <Image
                            src={`/projects/${imgLink}`}
                            alt={`Cover Image for ${title}`}
                            fill
                            className="object-cover"
                        />
                    )}
                    {videoLink && (
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                <ExternalLink url={externalLink} />
            )}
        </div>
    );
}
