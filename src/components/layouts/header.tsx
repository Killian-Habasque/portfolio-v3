"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/menubar";
import { classNames } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "@/contexts/project-context";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface Project {
  id: string;
  title: string;
  slug: string;
  text: string;
  imgLink?: string | null;
  videoLink?: string | null;
  externalLink?: string | null;
  technologies: { name: string }[];
}

export function Header() {
  const { orderedProjects } = useProjects();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full flex items-center">
      <div className="fixed left-8 top-2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.6,
            type: "spring",
            bounce: 0.4,
            damping: 10,
          }}
        >
          <Link href="/" className="flex items-center h-16">
            <Image width={25} height={40} alt="" src="/logo.svg" />
          </Link>
        </motion.div>
      </div>

      {/* Mobile burger menu button */}
      <div className="fixed right-4 top-2 h-16 z-[100] lg:hidden">

        <nav
          className="relative h-full flex items-center rounded-full border border-transparent bg-secondary-dark shadow-input flex justify-between space-x-16 px-2 py-2"
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-6 bg-secondary-dark text-white h-full rounded-full border border-white/[0.2] flex gap-1 justify-center items-center font-outfit"
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 10, bounce: 0.4 }}
            className="fixed inset-0 z-[99] lg:hidden p-4 pt-20"
          >
            <div className="flex flex-col bg-black p-2 h-full rounded-3xl">
              <div className="flex flex-col bg-black items-center justify-center h-full space-y-8 border border-white/[0.2] text-white rounded-2xl">
                <div className="flex flex-col space-y-4 text-sm text-center">
                  <Link href="/projets" className="text-2xl font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                    Projets
                  </Link>
                </div>
                <div className="flex flex-col space-y-4 text-sm text-center">
                  <Link href="/projets" className="text-2xl font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                    À propos
                  </Link>
                  <HoveredLink href="/#presentation" onClick={() => setIsMobileMenuOpen(false)}>Présentation</HoveredLink>
                  <HoveredLink href="/#educations" onClick={() => setIsMobileMenuOpen(false)}>Formations</HoveredLink>
                  <HoveredLink href="/#technologies" onClick={() => setIsMobileMenuOpen(false)}>Technologies</HoveredLink>
                  <HoveredLink href="/#experiences" onClick={() => setIsMobileMenuOpen(false)}>Expériences</HoveredLink>
                  <HoveredLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</HoveredLink>
                </div>
                <div className="flex flex-col space-y-4 text-sm text-center">
                  <Link href="/projets" className="text-2xl font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                    Réseaux
                  </Link>
                  <HoveredLink href="https://www.linkedin.com/in/killian-habasque-041841220/" target="_blank">
                    <div className="flex gap-2">
                      <Image width={20} height={20} alt="Linkedin" src="/about/linkedin.svg" className="h-4" />
                      Linkedin
                    </div>
                  </HoveredLink>
                  <HoveredLink href="https://github.com/Killian-Habasque" target="_blank">
                    <div className="flex gap-2">
                      <Image width={20} height={20} alt="Github" src="/about/github.svg" />
                      Github
                    </div>
                  </HoveredLink>
                  <HoveredLink href="https://www.behance.net/killian-habasque" target="_blank">
                    <div className="flex gap-2">
                      <Image width={20} height={20} alt="Behance" src="/about/behance.svg" />
                      Behance
                    </div>
                  </HoveredLink>
                </div>

                <a href="/about/CV_Killian_Habasque.pdf" target="_blank" className="h-12 text-secondary-dark px-6 bg-primary-light hover:bg-primary rounded-full flex gap-1 justify-center items-center font-outfit">
                  CV
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 1.5C12.5 0.947715 12.0523 0.5 11.5 0.5H2.5C1.94772 0.5 1.5 0.947715 1.5 1.5C1.5 2.05228 1.94772 2.5 2.5 2.5H10.5V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5V1.5ZM2.20711 12.2071L12.2071 2.20711L10.7929 0.792893L0.792893 10.7929L2.20711 12.2071Z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <div className="hidden lg:block w-full">
        <Navbar className="h-16 top-2 right-4" projects={orderedProjects} />
      </div>
    </div>
  );
}

const Navbar = ({ className, projects }: { className?: string; projects: Project[] }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
        type: "spring",
        bounce: 0.4,
        damping: 10,
      }}
      className={classNames("fixed top-10 w-full max-w-4xl 2xl:max-w-5xl z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="relative h-full w-full flex items-center rounded-full border border-transparent border-white/[0.2] bg-secondary-dark shadow-input flex justify-center space-x-16 px-8 py-2 font-outfit">
          <MenuItem setActive={setActive} active={active} item="Projets">
            <div className="text-sm grid grid-cols-2 gap-8 p-4">
              {projects.slice(0, 4).map((project) => (
                <ProductItem
                  key={project.id}
                  title={project.title}
                  href={`/projets/${project.slug}`}
                  src={project.imgLink || "/placeholder.png"}
                  description={project.text}
                />
              ))}
              <div className="col-span-2 w-full flex gap-2 justify-center">
                <p className="font-outfit text-secondary-light font-light tracking-wide">
                  Retrouvez l&apos;ensemble de mes projets
                </p>
                <div className="flex gap-2 items-center">
                  <ArrowLongRightIcon className="size-5 text-white" />
                  <Link href={"/projets"} className="underline font-bold text-white tracking-wide font-outfit">
                    En découvrir plus
                  </Link>
                </div>
              </div>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="À propos">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#presentation">Présentation</HoveredLink>
              <HoveredLink href="/#educations">Formations</HoveredLink>
              <HoveredLink href="/#technologies">Technologies</HoveredLink>
              <HoveredLink href="/#experiences">Expériences</HoveredLink>
              <HoveredLink href="/#contact">Contact</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Réseaux">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://www.linkedin.com/in/killian-habasque-041841220/" target="_blank">
                <div className="flex gap-2">
                  <Image width={20} height={20} src="/about/linkedin.svg" alt="Linkedin" className="h-4" />
                  Linkedin
                </div>
              </HoveredLink>
              <HoveredLink href="https://github.com/Killian-Habasque" target="_blank">
                <div className="flex gap-2">
                  <Image width={20} height={20} src="/about/github.svg" alt="Github" />
                  Github
                </div>
              </HoveredLink>
              <HoveredLink href="https://www.behance.net/killian-habasque" target="_blank">
                <div className="flex gap-2">
                  <Image width={20} height={20} src="/about/behance.svg" alt="Behance" />
                  Behance
                </div>
              </HoveredLink>
            </div>
          </MenuItem>
        </div>

        <a href="/about/CV_Killian_Habasque.pdf" target="_blank" className="px-6 bg-primary-light hover:bg-primary h-full rounded-full flex gap-1 justify-center items-center font-outfit">
          CV
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 1.5C12.5 0.947715 12.0523 0.5 11.5 0.5H2.5C1.94772 0.5 1.5 0.947715 1.5 1.5C1.5 2.05228 1.94772 2.5 2.5 2.5H10.5V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5V1.5ZM2.20711 12.2071L12.2071 2.20711L10.7929 0.792893L0.792893 10.7929L2.20711 12.2071Z" fill="black" />
          </svg>
        </a>
      </Menu>
    </motion.div>
  );
}
