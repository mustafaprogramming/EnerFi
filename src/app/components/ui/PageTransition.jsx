'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

//components

import Header , {SearchHeader} from "./Header";
import Footer from "./Footer";

export default function PageTransition({ children }) {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname} >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
          }}
          className='h-screen w-screen fixed z-[100] bg-[#030A12] top-0 pointer-events-none'
        />
        {pathname==='/docs'?<SearchHeader />:<Header />}
        {children}
        <Footer />
      </div>
    </AnimatePresence>
  )
}
