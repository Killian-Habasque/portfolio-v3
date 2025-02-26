'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isReverse, setIsReverse] = useState(false)
  const prevPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsReverse(prev => !prev)
      prevPathnameRef.current = pathname
    }
  }, [pathname])

  const variants = {
    initial: {
      width: '100%',
      left: isReverse ? 'auto' : 0,
      right: isReverse ? 0 : 'auto',
    },
    animate: {
      width: 0,
      left: isReverse ? 'auto' : 0,
      right: isReverse ? 0 : 'auto',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: {
      width: '100%',
      left: isReverse ? 'auto' : 0,
      right: isReverse ? 0 : 'auto',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        {children}
        <motion.div
          key={pathname}
          className="fixed inset-0 z-50 bg-black pointer-events-none"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
        </motion.div>
      </AnimatePresence>
    </>
  )
}
