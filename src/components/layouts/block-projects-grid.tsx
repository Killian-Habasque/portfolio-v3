"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

function BlockProjectsGrid() {
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

  const cards = [
    {
      title: "Yatzee",
      text: "Création d’une web application interactive pour jouer au Yatzee. Technologies : JavaScript, Three.js, Express, Firebase",
      link: "/projets/projet-1",
      externalLink: "https://yatzee.fr",
      videoLink: "/yatzee.mp4",
      imgLink: "/projects/yatzee.png",
    },
    {
      title: "Yatzee",
      text: "Création d’une web application interactive pour jouer au Yatzee. Technologies : JavaScript, Three.js, Express, Firebase",
      link: "test",
      imgLink: "/projects/doo-erp.png",
    },
    {
      title: "Yatzee",
      text: "Création d’une web application interactive pour jouer au Yatzee. Technologies : JavaScript, Three.js, Express, Firebase",
      link: "test",
      imgLink: "/projects/suboptimize.png",
    },
    { title: "Projet 4", text: "Description du projet 4...", link: "test", externalLink: "https://siege-ergonomique.com", imgLink: "/projects/siege-ergonomique.png" },
    { title: "Projet 5", text: "Description du projet 5...", link: "test", externalLink: "https://lapetiteproduction.com",  imgLink: "/projects/lapetiteproduction.png" },
    { title: "Projet 6", text: "Description du projet 6...", link: "test", imgLink: "/projects/balado.png" },
  ];

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
            {cards.map((card, index) => (
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
