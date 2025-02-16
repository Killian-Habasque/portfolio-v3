"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/menubar";
import { classNames } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative w-full flex items-center">
      <Link href="/" className="fixed flex items-center h-16 left-8 top-2 z-50">
        <Image width={25} height={40} alt="" src="/logo.svg" />
      </Link>
      <Navbar className="h-16 top-2 right-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={classNames("fixed top-10 w-full max-w-4xl z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="relative h-full w-full flex items-center rounded-full border border-transparent border-white/[0.2] bg-[--color-dark] shadow-input flex justify-center space-x-16 px-8 py-2">
          <MenuItem setActive={setActive} active={active} item="Présentation">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projets">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Yatzee"
                href="https://yatzee.fr"
                src="/minia yatzee.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Mon parcours">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <a href="" className="px-6 bg-primary-light hover:bg-primary h-full rounded-full flex gap-1 justify-center items-center ">
          Contact
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 1.5C12.5 0.947715 12.0523 0.5 11.5 0.5H2.5C1.94772 0.5 1.5 0.947715 1.5 1.5C1.5 2.05228 1.94772 2.5 2.5 2.5H10.5V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5V1.5ZM2.20711 12.2071L12.2071 2.20711L10.7929 0.792893L0.792893 10.7929L2.20711 12.2071Z" fill="black" />
          </svg>
        </a>
      </Menu>
    </div>
  );
}
