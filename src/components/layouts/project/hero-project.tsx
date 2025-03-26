"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { classNames } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';
import Date from '@/components/ui/date';
import ExternalLink from '@/components/ui/externalLink';
import { HeroVideoDialog } from "./hero-video-dialog";
import Magnet from "@/components/ui/magnet";
import { ButtonScrollTop } from "@/components/ui/button-scroll-top";

interface HeroProjectProps {
  className?: string;
  formattedProject: {
    date: string | null;
    type: string | null;
    text: string;
    title: string;
    externalLink?: string | null;
    repoLink?: string | null;
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
        className="lg:px-4 text-md lg:text-xl leading-relaxed my-6 font-outfit text-secondary"
        dangerouslySetInnerHTML={{ __html: formattedProject.text }}
      />
      <div className="fixed bottom-6 left-8 flex z-50">
        <motion.div
          variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                ...textVariants.visible.transition,
                delay: 1
              }
            }
          }}
        >
          <Magnet padding={50} disabled={false} magnetStrength={7}>
            <ButtonScrollTop />
          </Magnet>
        </motion.div>
      </div>
      <div className='fixed w-full flex justify-center mx-auto bottom-6 left-0 z-40'>
        <motion.div
          className='x-auto max-w-2xl flex gap-4'
          variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                ...textVariants.visible.transition,
                delay: 2
              }
            }
          }}
        >
          {formattedProject.repoLink && (
            <Magnet padding={20} disabled={false} magnetStrength={7}>
              <a
                target="_blank"
                href={formattedProject.repoLink}
                rel="noopener noreferrer"
                className="flex gap-2 px-6 py-4 bg-secondary-dark text-white hover:bg-primary-dark hover:text-black h-full rounded-full flex gap-1 justify-center items-center font-outfit cursor-pointer fill-white hover:fill-black border border-white/[0.2]">
                <svg width="20px" height="20px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                  <g>
                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                    <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                  </g>
                </svg>
                Repository Github
              </a>
            </Magnet>
          )}
          
          {formattedProject.externalLink && (
            <Magnet padding={20} disabled={false} magnetStrength={7}>
              <a
                target="_blank"
                href={formattedProject.externalLink}
                rel="noopener noreferrer"
                className="flex gap-2 px-6 py-4 bg-secondary-dark text-white hover:bg-primary-dark hover:text-black h-full rounded-full flex gap-1 justify-center items-center font-outfit cursor-pointer fill-white hover:fill-black border border-white/[0.2]"
              >
                <svg width="20px" height="20px" viewBox="0 0 4 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.26336 3.77807C0.842079 3.77807 0.462275 3.5243 0.30103 3.1351C0.139785 2.74589 0.228848 2.29788 0.526696 1.99994L0.968779 1.55786L1.26336 1.85244L0.821488 2.29432C0.663584 2.45222 0.601915 2.68237 0.659712 2.89807C0.717509 3.11377 0.88599 3.28226 1.10169 3.34005C1.31739 3.39785 1.54754 3.33618 1.70545 3.17828L2.14732 2.7364L2.4419 3.03119L2.00003 3.47307C1.80504 3.66901 1.53979 3.77884 1.26336 3.77807ZM1.41065 2.88369L1.11607 2.58911L2.5892 1.11598L2.88378 1.41057L1.41086 2.88349L1.41065 2.88369ZM3.03128 2.44182L2.73649 2.14724L3.17836 1.70536C3.33842 1.54793 3.40174 1.31675 3.34425 1.09973C3.28676 0.882714 3.11729 0.713203 2.90028 0.655661C2.68328 0.598118 2.45208 0.661385 2.29461 0.821402L1.85253 1.26328L1.55795 0.968693L2.00003 0.52661C2.40734 0.122853 3.0644 0.124292 3.46994 0.529829C3.87547 0.935366 3.87691 1.59243 3.47315 1.99974L3.03128 2.44161V2.44182Z" />
                </svg>
                Voir le site
              </a>
            </Magnet>
          )}
        </motion.div>

      </div>


    </motion.div >
  );
} 