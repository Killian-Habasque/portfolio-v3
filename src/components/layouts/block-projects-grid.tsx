"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
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
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
        damping: 7,
      },
    }),
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-5xl md:text-8xl tracking-wid max-w-xl font-outfit text-secondary-dark font-medium">
              Exemple <br></br>
              de
              <span className="font-grandslang pl-4">projets</span>
            </h2>
            <div className="flex gap-2 pt-4">
              <Badge>Projet personnel</Badge>
              <Badge>Projet professionnel</Badge>
              <Badge>Projet scolaire</Badge>
            </div>
            <p className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide">
              Managing a small business today is already tough. sdggdgds gs dsg d gddsds
            </p>
          </div>
        </div>
        <motion.div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {items.map((card, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-2 items-center justify-center my-20">
        <p className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide">Managing a small business today is already tough.</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        <Link href={"/projets"} className="underline">View all projects</Link>
      </div>
    </div>
  );
}

export { BlockProjectsGrid };
