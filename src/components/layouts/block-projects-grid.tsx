"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

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

function BlockProjectsGrid({items} : BlockProjectsGridProps) {
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
      },
    }),
  };

  return (
    <div ref={sectionRef} className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                EXEMPLES DE 🛠️ PROJETS
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500 text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <motion.div
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
      </div>
    </div>
  );
}

export { BlockProjectsGrid };
