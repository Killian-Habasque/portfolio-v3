"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import Link from "next/link";

interface BlockProjectsGridProps {
  items: ProjectPreview[];
}

interface ProjectPreview {
  id: string;
  title: string;
  slug: string;
  text: string;
  imgLink?: string | null;
  videoLink?: string | null;
  externalLink?: string | null;
  technologies: { name: string }[];
}

function BlockProjectsGrid({ items }: BlockProjectsGridProps) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const isInViewTitle = useInView(sectionRef, { once: true, margin: "-100px" });
  const isInViewGrid = useInView(gridRef, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
        damping: 7,
      },
    }),
  };

  return (
    <div className="w-full container mx-auto px-4 lg:px-0">
      <div className="flex flex-col gap-10">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInViewTitle ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex gap-4 flex-col items-start"
        >
          <motion.div variants={fadeUpVariants} custom={0.2} className="flex gap-2 flex-col">
            <h2 className="text-5xl md:text-8xl tracking-wid max-w-xl font-outfit text-secondary-dark font-medium">
              Exemple <br />
              de <span className="font-grandslang pl-4">projets</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUpVariants} custom={0.4} className="flex flex-wrap gap-2 pt-4">
            <Badge>Projet personnel</Badge>
            <Badge>Projet professionnel</Badge>
            <Badge>Projet scolaire</Badge>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            custom={0.6}
            className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide"
          >
            Découvrez ci-dessous quelques-uns de mes projets les plus significatifs :
          </motion.p>
        </motion.div>

        {/* Grille des projets */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInViewGrid ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {items.map((card, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center my-20">
        <p className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide">
          Retrouvez l&apos;ensemble de mes projets
        </p>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          <Link href={"/projets"} className="underline font-bold tracking-wide">
            En découvrir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

export { BlockProjectsGrid };
