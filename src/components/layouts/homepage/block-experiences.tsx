"use client";

import { motion } from "framer-motion";
import { Badge } from "../../ui/badge";
import Image from "next/image";

interface Experience {
  logo: string;
  title: string;
  company: string;
  time: string;
  period: string;
  type: string;
  details?: string[];
}

const experienceData: Experience[] = [
  {
    logo: "/experiences/logo_doowup.png",
    title: "Développeur fullstack",
    company: "Doowup",
    time: "3 ans",
    period: "août 22 - sep. 25",
    type: "Alternace",
    details: [
      "Création d’applications internes : ERP, outils de prospection et de recrutement",
      "Développement de sites e-commerce et vitrines (CMS ou natif)",
      "Maintenance et optimisation d’un portefeuille de sites web",
      "Administration de serveurs et déploiement en production et pré-production",
      "Accompagnement client et gestion de projet Agile"
    ]
  },
  {
    logo: "/experiences/logo_figecal.png",
    title: "Intégrateur web",
    company: "Figecal",
    time: "3 mois",
    period: "avr. 22 - juin. 22",
    type: "Stage",
    details: [
      "Audit des besoins et maquettage graphique",
      "Développement du site web et intégration de contenu",
      "Optimisation et mise en place de stratégies SEO techniques"
    ]
  }
];

export function BlockExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
        damping: 25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.4,
        damping: 20,
      },
    },
  };

  return (
    <section id="experiences" className="py-40">
      <div className="container mx-auto px-4 flex justify-center flex-col">
        <motion.div
          className="mx-auto pb-20 max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl tracking-wid max-w-xl font-outfit text-secondary-dark font-medium max-w-4xl"
            variants={titleVariants}
          >
            Expériences
          </motion.h2>
          <motion.p
            className="font-outfit text-secondary-light leading-[2] font-light text-lg tracking-wide max-w-sm pt-4 pl-[8px]"
            variants={titleVariants}
          >
            I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
            a timeline of my journey.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative space-y-6 max-w-4xl w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative flex items-start gap-4 p-6 rounded-2xl shadow-sm group bg-white"
            >
              {index !== experienceData.length - 1 && (
                <div className="absolute left-[-33px] top-4 w-[2px] h-[calc(100%+24px)] bg-primary" />
              )}

              <div className="absolute left-[-32px] top-4 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[--background] bg-primary-dark z-10 " />


              <div className="w-full max-w-xs flex flex-col gap-4">
                <div className="flex gap-4 font-outfit">
                  <Badge>{experience.type}</Badge>
                  <span className="font-bold text-secondary-dark tracking-wide">{experience.time}</span>
                  •
                  <span className="text-secondary-light">{experience.period}</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 flex-shrink-0 shadow-md rounded-xl bg-white transition-transform duration-300 group-hover:scale-110">
                    <Image
                      width={100}
                      height={100}
                      src={experience.logo}
                      alt={`Logo ${experience.company}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-secondary-light tracking-wide font-outfit">{experience.title}</h3>
                    <p className="text-xl text-secondary-dark mt-1 font-outfit">{experience.company}</p>
                  </div>
                </div>
              </div>


              <div className="w-full">
                {experience.details && (
                  <ul className="mt-2 space-y-1 font-outfit">
                    {experience.details.map((detail, idx) => (
                      <li key={idx} className="text-secondary-light text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 