"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import Link from "next/link";
import { useProjects } from "@/contexts/project-context";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface BlockProjectsGridProps {
  preview?: boolean;
}

function BlockProjectsGrid({ preview = false }: BlockProjectsGridProps) {
  const { projects, orderedProjects } = useProjects();

  const [selectedType, setSelectedType] = useState<string>("");

  const handleBadgeClick = (type: string) => {
    setSelectedType(type);
  };

  const projectItems = preview ? orderedProjects : projects.filter(project =>
    selectedType ? project.type === selectedType : true
  );

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
            {preview ? (
              <h2 className="text-5xl md:text-8xl tracking-wid max-w-xl font-outfit text-secondary-dark font-medium">
                Exemple <br />
                de<span className="font-grandslang pl-4">projets</span>
              </h2>
            ) : (
              <h2 className="text-5xl md:text-8xl tracking-wid max-w-2xl font-outfit text-secondary-dark font-medium">
                L&apos;ensemble <br />de mes<span className="font-grandslang pl-4">projets</span>
              </h2>
            )}
          </motion.div>


          <motion.p
            variants={fadeUpVariants}
            custom={0.6}
            className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide"
          >
            Découvrez ci-dessous quelques-uns de mes projets les plus significatifs :
          </motion.p>
          {!preview ? (
            <motion.div variants={fadeUpVariants} custom={0.4} className="flex flex-wrap gap-2 pt-4">
              <Badge
                onClick={() => handleBadgeClick("")}
                variant={selectedType === "" ? "primary" : "outline"}
                className="cursor-pointer"
              >
                Tout
              </Badge>
              <Badge
                onClick={() => handleBadgeClick("Projet personnel")}
                variant={selectedType === "Projet personnel" ? "primary" : "outline"}
                className="cursor-pointer"
              >
                Projet personnel
              </Badge>
              <Badge
                onClick={() => handleBadgeClick("Projet professionnel")}
                variant={selectedType === "Projet professionnel" ? "primary" : "outline"}
                className="cursor-pointer"
              >
                Projet professionnel
              </Badge>
              <Badge
                onClick={() => handleBadgeClick("Projet scolaire")}
                variant={selectedType === "Projet scolaire" ? "primary" : "outline"}
                className="cursor-pointer"
              >
                Projet scolaire
              </Badge>
            </motion.div>
          ) : ''}
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInViewGrid ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projectItems.map((card, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card {...card} preview={preview} />
            </motion.div>
          ))}
        </motion.div>
        {preview ? (
          <motion.div
            initial="hidden"
            animate={isInViewGrid ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUpVariants} custom={0.2}>
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-center my-20">
                <p className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide">
                  Retrouvez l&apos;ensemble de mes projets
                </p>
                <div className="flex gap-2 items-center">
                  <ArrowLongRightIcon className="size-5" />
                  <Link href={"/projets"} className="underline font-bold tracking-wide font-outfit">
                    En découvrir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : ''}
      </div>

    </div>
  );
}

export { BlockProjectsGrid };
