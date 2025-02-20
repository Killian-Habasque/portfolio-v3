"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Education {
  logo: string;
  title: string;
  school: string;
  period: string;
  location: string;
  details?: string[];
}

const educationData: Education[] = [
  {
    logo: "/educations/ecvlogo.png",
    title: "Mastère Développement web",
    school: "ECV",
    period: "2023 - 2025",
    location: "Nantes",
    details: ["Alternance sur 3 années"]
  },
  {
    logo: "/educations/ecvlogo.png",
    title: "Bachelor 3 Chef de projet Digital",
    school: "ECV",
    period: "2022 - 2023",
    location: "Nantes"
  },
  {
    logo: "/educations/lavaliut.png",
    title: "DUT Métiers du multimédia et de l'internet",
    school: "IUT de Laval",
    period: "2020 - 2022",
    location: "Laval",
    details: [
      "Option: Programmation Intégration Multimédia",
      "Stage de fin d'étude"
    ]
  },
  {
    logo: "/educations/academierennes.png",
    title: "Baccalauréat STI2D",
    school: "Lycée Yves Thépot",
    period: "2018 - 2020",
    location: "Quimper",
    details: [
      "Option: Système Information et Numérique",
      "Mention: Très bien"
    ]
  }
];

export function BlockEducation() {
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
    <section id="educations" className="py-40 bg-white">
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
            {/* Mes <br></br> */}
            {/* <span className="font-grandslang"> */}
            Formations
            {/* </span> */}
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
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative flex items-start gap-6 p-6 bg-[--background] rounded-2xl shadow-sm group"
            >
              {index !== educationData.length - 1 && (
                <div className="absolute left-[-33px] top-4 w-[2px] h-[calc(100%+24px)] bg-primary" />
              )}

              <div className="absolute left-[-32px] top-4 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-primary-dark z-10 " />

              <div className="w-14 h-14 flex-shrink-0 shadow-md rounded-xl bg-white transition-transform duration-300 group-hover:scale-110">
                <Image
                  width={100}
                  height={100}
                  src={education.logo}
                  alt={`Logo ${education.school}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-grow ">
                <h3 className="text-xl text-secondary-dark tracking-wide font-outfit">{education.title}</h3>
                <p className="text-primary-dark mt-1 font-outfit">{education.school}</p>
                {education.details && (
                  <ul className="mt-2 space-y-1 font-outfit">
                    {education.details.map((detail, idx) => (
                      <li key={idx} className="text-secondary text-sm">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="text-right">
                <p className="text-secondary font-outfit">{education.period}</p>
                <p className="text-secondary-light mt-1 font-outfit flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  {education.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 