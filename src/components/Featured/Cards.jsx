import React from 'react'
import MyBtn from './MyBtn'

const Cards = ({btnText = [], name, img}) => {
  return (
    <div className="card w-[49%]">
      <h1 className="flex justify-start items-center gap-3 text-lg py-3">
        <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
        <h1 className='uppercase'>
          {name}
        </h1>
      </h1>
      <div className="w-full h-[39vw] bg-[#cdcdc] rounded-xl overflow-hidden">
        <img className='h-full w-full object-cover' src={img} alt="" />
      </div>
      <div className="btn w-full py-3 flex gap-3">
        {
          btnText.map((text)=>(

            <MyBtn text={text} />
          ))
        }
      </div>
    </div>
  )
}

export default Cards