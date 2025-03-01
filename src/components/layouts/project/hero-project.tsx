"use client";

import {  motion } from "framer-motion";
import Image from "next/image";
import { classNames } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';
import Date from '@/components/ui/date';
import ExternalLink from '@/components/ui/externalLink';
import { HeroVideoDialog } from "./hero-video-dialog";

interface HeroProjectProps {
  className?: string;
  formattedProject: {
    date: string | null;
    type: string | null;
    text: string;
    title: string;
    externalLink?: string | null;
    videoLink?: string | null;
    imgLink: string | null;
    technologies: Array<{ id: string; imgLink?: string | null; name: string }>;
  };
}

const animationVariants = {
  fromCenter: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.1,
        damping: 10,
      }
    }
  }
};


const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 10,
      damping: 7,
    }
  }
};

export function HeroProject({
  className,
  formattedProject,
}: HeroProjectProps) {

  return (
    <motion.div
      className={classNames("relative", className)}
      variants={animationVariants.fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center flex-col items-center mb-6 font-outfit">
        <div className='flex flex-col lg:flex-row gap-2 items-center text-secondary-dark mb-3'>
          {formattedProject.date ? (
            <motion.div className='flex gap-2' variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: {
                  ...textVariants.visible.transition,
                  delay: 0.5
                }
              }
            }}>
              Année de réalisation :  <span className='font-semibold'><Date dateString={formattedProject.date} /></span>
              <span className='hidden lg:block'>•</span>
            </motion.div>
          ) : ''}
          {formattedProject.type ? (
            <motion.div variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: {
                  ...textVariants.visible.transition,
                  delay: 1
                }
              }
            }}><Badge>{formattedProject.type}</Badge></motion.div>
          ) : ''}
        </div>
        <motion.h1 className="text-5xl lg:text-9xl font-bold tracking-tighter leading-none md:leading-none mb-3 text-center md:text-left font-bold tracking-tight text-secondary-dark" variants={textVariants}>
          {formattedProject.title}
        </motion.h1>
        {formattedProject.externalLink ? (
          <motion.div className="mb-2" variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                ...textVariants.visible.transition,
                delay: 1.5
              }
            }
          }}>
            <ExternalLink url={formattedProject.externalLink} />
          </motion.div>
        ) : ''}
      </div>

      <nav className="flex flex-wrap gap-2 justify-center mb-6">
        {formattedProject.technologies && formattedProject.technologies.map((tech, index) => (
          <motion.span key={tech.id} variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                ...textVariants.visible.transition,
                delay: 1.5 + index * 0.2
              }
            }
          }}>
            <Badge variant='outline'>
              {tech.imgLink ? <Image width={20} height={20} className="w-4 h-4 object-contain" src={tech.imgLink} alt={tech.name} /> : ''}
              {tech.name}
            </Badge>
          </motion.span>
        ))}
      </nav>

      <div className="relative">
        {formattedProject.videoLink ? (
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc={`${formattedProject.videoLink}`}
            thumbnailSrc={`${formattedProject.imgLink}`}
            thumbnailAlt={`Image de ${formattedProject.title}`}
          />
        ) : (
          <div className="relative overflow-hidden rounded-3xl aspect-[16/9] border-2">
            <Image
              src={`${formattedProject.imgLink}`}
              alt={`Image de ${formattedProject.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
      <div
        className="text-xl leading-relaxed my-6 font-outfit text-secondary"
        dangerouslySetInnerHTML={{ __html: formattedProject.text }}
      />
    </motion.div >
  );
} 