"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/menubar";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center">
      <div className="fixed h-16 left-8 top-2 z-50">
        <svg className="h-full p-1" width="35" height="55" viewBox="0 0 35 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.000142134 51.2864L0.000142134 8.75965C0.000142134 6.43646 0.923029 4.20841 2.56578 2.56566C4.20852 0.922915 6.43657 2.44879e-05 8.75977 2.44879e-05L8.75977 42.5268C8.75977 44.85 7.83688 47.0781 6.19413 48.7208C4.55138 50.3636 2.32334 51.2864 0.000142134 51.2864Z" fill="#363636" />
          <path d="M9.07813 35.1875C10.7209 33.5448 12.9489 32.6219 15.2721 32.6219C17.5953 32.6219 19.8234 33.5448 21.4661 35.1875L34.9999 48.7213C34.1863 49.5349 33.2204 50.1802 32.1574 50.6204C31.0944 51.0606 29.955 51.2871 28.8044 51.2869C27.6539 51.2867 26.5146 51.0599 25.4517 50.6193C24.3888 50.1787 23.4232 49.5331 22.6099 48.7192L9.07813 35.1875Z" fill="#363636" />
          <path d="M23.0995 27.527C26.1354 27.527 28.5964 25.0659 28.5964 22.03C28.5964 18.9941 26.1354 16.5331 23.0995 16.5331C20.0636 16.5331 17.6025 18.9941 17.6025 22.03C17.6025 25.0659 20.0636 27.527 23.0995 27.527Z" fill="#363636" />
        </svg>
      </div>

      <Navbar className="h-16 top-2 right-2" />
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
        <div className="relative h-full w-full flex items-center rounded-full border border-transparent bg-dark dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-16 px-8 py-2">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
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
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <a href="" className="px-6 bg-white h-full rounded-full flex gap-1 justify-center items-center ">
          Contact
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 1.5C12.5 0.947715 12.0523 0.5 11.5 0.5H2.5C1.94772 0.5 1.5 0.947715 1.5 1.5C1.5 2.05228 1.94772 2.5 2.5 2.5H10.5V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5V1.5ZM2.20711 12.2071L12.2071 2.20711L10.7929 0.792893L0.792893 10.7929L2.20711 12.2071Z" fill="black" />
          </svg>
        </a>
      </Menu>
    </div>
  );
}
