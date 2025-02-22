"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/menubar";
import { classNames } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

interface HeaderProps {
  projects: Project[];
}

export function Header({ projects }: HeaderProps) {
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
                      <svg width="20px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>linkedin [#161]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="white">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">

                              </path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Linkedin
                    </div>
                  </HoveredLink>
                  <HoveredLink href="https://github.com/Killian-Habasque" target="_blank">
                    <div className="flex gap-2">
                      <svg width="20px" height="20px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                        <g fill="white">
                          <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                          <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                        </g>
                      </svg>
                      Github
                    </div>
                  </HoveredLink>
                  <HoveredLink href="https://www.behance.net/killian-habasque" target="_blank">
                    <div className="flex gap-2">
                      <svg width="20px" height="20px" viewBox="0 -3.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>behance [#163]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -7482.000000)" fill="white">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M56.981,7324.11726 L62.069,7324.11726 L62.069,7322.65997 L56.981,7322.65997 L56.981,7324.11726 Z M59.489,7327.04322 C58.354,7327.04322 57.492,7327.74656 57.409,7329.04584 L61.481,7329.04584 C61.205,7327.50385 60.52,7327.04322 59.489,7327.04322 L59.489,7327.04322 Z M59.648,7333.06968 C60.696,7333.06968 61.465,7332.40764 61.622,7331.84992 L63.826,7331.84992 C63.196,7333.86701 61.895,7335 59.559,7335 C56.578,7335 54.905,7332.87964 54.905,7330.06626 C54.905,7323.44077 64.465,7323.20323 63.985,7330.68491 L57.409,7330.68491 C57.473,7332.20418 58.1,7333.06968 59.648,7333.06968 L59.648,7333.06968 Z M49.73,7332.77842 C50.933,7332.77842 51.775,7332.31572 51.775,7331.06705 C51.775,7329.77191 51.031,7329.21006 49.782,7329.21006 L46.768,7329.21006 L46.768,7332.77842 L49.73,7332.77842 Z M49.571,7327.26218 C50.572,7327.26218 51.263,7326.79638 51.263,7325.71399 C51.263,7324.57377 50.459,7324.22158 49.36,7324.22158 L46.768,7324.22158 L46.768,7327.26218 L49.571,7327.26218 L49.571,7327.26218 Z M49.924,7322 C52.295,7322 53.943,7322.7839 53.943,7325.22237 C53.943,7326.42973 53.458,7327.32931 52.233,7327.93557 C53.801,7328.40137 54.543,7329.62422 54.543,7331.23127 C54.543,7333.78232 52.52,7335 50.1,7335 L44,7335 L44,7322 L49.924,7322 Z" id="behance-[#163]">

                              </path>
                            </g>
                          </g>
                        </g>
                      </svg>
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
        <Navbar className="h-16 top-2 right-4" projects={projects} />
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
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                  <Link href={"/projets"} className="underline font-bold text-white tracking-wide">
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
                  <svg width="20px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>linkedin [#161]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="white">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">

                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Linkedin
                </div>
              </HoveredLink>
              <HoveredLink href="https://github.com/Killian-Habasque" target="_blank">
                <div className="flex gap-2">
                  <svg width="20px" height="20px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <g fill="white">
                      <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                      <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                    </g>
                  </svg>
                  Github
                </div>
              </HoveredLink>
              <HoveredLink href="https://www.behance.net/killian-habasque" target="_blank">
                <div className="flex gap-2">
                  <svg width="20px" height="20px" viewBox="0 -3.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>behance [#163]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -7482.000000)" fill="white">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M56.981,7324.11726 L62.069,7324.11726 L62.069,7322.65997 L56.981,7322.65997 L56.981,7324.11726 Z M59.489,7327.04322 C58.354,7327.04322 57.492,7327.74656 57.409,7329.04584 L61.481,7329.04584 C61.205,7327.50385 60.52,7327.04322 59.489,7327.04322 L59.489,7327.04322 Z M59.648,7333.06968 C60.696,7333.06968 61.465,7332.40764 61.622,7331.84992 L63.826,7331.84992 C63.196,7333.86701 61.895,7335 59.559,7335 C56.578,7335 54.905,7332.87964 54.905,7330.06626 C54.905,7323.44077 64.465,7323.20323 63.985,7330.68491 L57.409,7330.68491 C57.473,7332.20418 58.1,7333.06968 59.648,7333.06968 L59.648,7333.06968 Z M49.73,7332.77842 C50.933,7332.77842 51.775,7332.31572 51.775,7331.06705 C51.775,7329.77191 51.031,7329.21006 49.782,7329.21006 L46.768,7329.21006 L46.768,7332.77842 L49.73,7332.77842 Z M49.571,7327.26218 C50.572,7327.26218 51.263,7326.79638 51.263,7325.71399 C51.263,7324.57377 50.459,7324.22158 49.36,7324.22158 L46.768,7324.22158 L46.768,7327.26218 L49.571,7327.26218 L49.571,7327.26218 Z M49.924,7322 C52.295,7322 53.943,7322.7839 53.943,7325.22237 C53.943,7326.42973 53.458,7327.32931 52.233,7327.93557 C53.801,7328.40137 54.543,7329.62422 54.543,7331.23127 C54.543,7333.78232 52.52,7335 50.1,7335 L44,7335 L44,7322 L49.924,7322 Z" id="behance-[#163]">

                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
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
