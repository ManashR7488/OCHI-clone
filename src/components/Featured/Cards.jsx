import React from 'react'
import MyBtn from './MyBtn'
import { motion } from 'framer-motion'

const Cards = ({btnText = [], name, img}) => {
  
  return (
    <div  className="card w-[49%]">
      <h1 className="flex justify-start items-center gap-3 text-lg py-3">
        <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
        <div className='uppercase'>
          {name}
        </div>
      </h1>
      <motion.div initial={{scale:1}} whileHover={"hover"} transition={{ease:[.4,0,.2,1], duration:0.5}} variants={{hover:{scale:0.95}}} className="w-full h-[39vw] bg-[#cdcdc] rounded-xl overflow-hidden">
        <motion.img initial={{scale:1}} variants={{hover:{scale:1.1}}} transition={{ease:[.4,0,.2,1], duration:1}} className='h-full w-full object-cover' src={img} alt="" />
      </motion.div>
      <div className="btn w-full py-3 flex gap-3 dur">
        {
          btnText.map((text , idx)=>(

            <MyBtn key={idx} text={text} />
          ))
        }
      </div>
    </div>
  )
}

export default Cards