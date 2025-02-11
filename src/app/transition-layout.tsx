'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isReverse, setIsReverse] = useState(false)

  useEffect(() => {
    setIsReverse(prev => !prev)
  }, [pathname])

  const variants = {
    animate: {
      width: 0,
      left: isReverse ? 'auto' : 0,
      right: isReverse ? 0 : 'auto',
    },
    exit: {
      width: '100%',
      left: isReverse ? 'auto' : 0,
      right: isReverse ? 0 : 'auto',
    }
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {children}
        <motion.div
          key={pathname}
          className="fixed inset-0 z-50 bg-black pointer-events-none"
          variants={variants}
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </>
  )
}
