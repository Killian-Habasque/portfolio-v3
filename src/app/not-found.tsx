"use client"

import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Model3DLogo from "@/components/ui/model";

export default function Custom404() {
  return (
    <div className="relative w-full h-full bg-secondary-dark min-h-[100dvh] flex flex-col justify-center ">
      <div className="text-center h-full w-full z-[80] rounded-2xl">
        <motion.h1 
          className="text-5xl font-bold text-primary-dark mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5  }}
        >
          <span className="font-grandslang">404</span> - Page non trouvée
        </motion.h1>
        <motion.p 
          className="text-lg text-white mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Désolé, la page que vous recherchez n&apos;existe pas.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button variant="primary" link="/">
            <ArrowLeftIcon />
            Retour à l&apos;accueil
          </Button>
        </motion.div>
      </div>
      <div
        className="group absolute h-full w-full overflow-hidden z-40"
      >
        <Model3DLogo mousePosition={{ x: 0, y: 0 }} />
      
      </div>
      <RetroGrid />
    </div>

  );
}