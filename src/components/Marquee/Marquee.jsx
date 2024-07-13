import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-24 bg-[#004D43] rounded-t-3xl'>
        <div className="text flex items-center font-Founder overflow-hidden text-[28vw] uppercase border-y text-[#ffffff] border-[#469b8f] h-fit whitespace-nowrap">
            <motion.h1 initial={{X:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 10, repeat:Infinity}} className='leading-none px-14 text-nowrap -mt-20 -mb-9'>We Are Ochi</motion.h1>
            <motion.h1 initial={{X:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 10, repeat:Infinity}} className='leading-none px-14 text-nowrap -mt-20 -mb-9'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee