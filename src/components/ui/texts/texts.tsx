'use client'

import { VerticalCutReveal } from "./letter-vertical-cut-reaveal"
import { motion } from "framer-motion"

function WelcomeExample() {
  return (
    <div className="flex flex-col">
      <div className="text-secondary-dark left-0 xs:text-2xl text-2xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl flex flex-col items-start justify-center font-outfit tracking-wide text-secondary-dark">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 0.5,
          }}
        >
          {`Killian`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="last"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 1,
          }}
          className="pl-[8px] font-grandslang"
        >
          {`Habasque`}
        </VerticalCutReveal>
      </div>

      <div className="flex justify-between w-full items-center gap-2 px-[8px] font-outfit text-secondary">
        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.1}
          staggerFrom="first"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            delay: 1.5,
          }}
          className="flex whitespace-nowrap gap-1"
        >
          {`Développeur web`}
        </VerticalCutReveal>

        <motion.span 
          className="w-full h-[1px] bg-secondary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            delay: 2
          }}
          style={{ transformOrigin: "left" }}
        />

        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.1}
          staggerFrom="last"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            delay: 2.5,
          }}
          className="flex whitespace-nowrap gap-1"
        >
          {`Portfolio 2025`}
        </VerticalCutReveal>
      </div>
    </div>

  )
}

function LinesSplitExample() {
  return (
    <div className="w-full h-full text md:text-2xl lg:text-4xl flex flex-col items-start justify-center font-azeretMono p-6 md:p-16 lg:p-20 xl:p-24 text-[#0015ff] tracking-wide">
      <div className="flex flex-col justify-center w-full items-start space-y-4">
        <VerticalCutReveal
          splitBy="lines"
          staggerDuration={0.2}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            delay: 0.2,
          }}
          containerClassName="text-[#00000] leading-relaxed"
        >
          {"→ We're on a mission\nto make the 🌐 web \nsuper fun again! ☺"}
        </VerticalCutReveal>
      </div>
    </div>
  )
}

function WordsSplitExample() {
  return (
    <div className="w-full h-full text-lg md:text-2xl flex flex-col items-start justify-center font-calendas p-10 md:p-16 lg:p-24 bg-[#0015ff] text-white tracking-wide font-bold">
      <div className="flex flex-col justify-center w-full items-center space-y-4">
        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.1}
          staggerFrom="first"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
          }}
        >
          {`super cool & awesome example text`}
        </VerticalCutReveal>
      </div>
    </div>
  )
}

function StaggerDirectionsExample() {
  return (
    <div className="w-full h-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex flex-col items-start justify-center font-overusedGrotesk p-2 text-[#0015ff] tracking-wide uppercase font-bold">
      <div className="flex flex-col justify-center w-full items-center space-y-4">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
          }}
        >
          {`THIS STAGGERS FROM FIRST`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="last"
          reverse={true}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 1,
          }}
        >
          {`THIS STAGGERS FROM LAST`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="center"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 2.3,
          }}
        >
          {`THIS STAGGERS FROM CENTER`}
        </VerticalCutReveal>
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom={5}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 3.2,
          }}
        >
          {`THIS ONE FROM THE 5TH CHARACTER`}
        </VerticalCutReveal>
      </div>
    </div>
  )
}

function LongTextExample() {
  return (
    <div className="w-full h-full text md:text-xl flex items-center justify-center font-overusedGrotesk p-10 md:p-16 lg:p-24 text-[#0015ff]">
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.002}
        staggerFrom="random"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 35,
          delay: 0.1,
        }}
        containerClassName="text-[#00000] leading-snug"
      >
        {`"When a small, unassuming object exceeds our expectations, we are not only surprised but pleased. Our usual reaction is something like, "That little thing did all that?" Simplicity is about the unexpected pleasure derived from what is likely to be insignificant and would otherwise go unnoticed. The smaller the object, the more forgiving we can be when it misbehaves."\n― John Maeda`}
      </VerticalCutReveal>
    </div>
  )
}

export {
  WelcomeExample,
  LinesSplitExample,
  WordsSplitExample,
  StaggerDirectionsExample,
  LongTextExample
}