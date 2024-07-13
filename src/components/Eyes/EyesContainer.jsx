import React, { useRef } from 'react'
import Eye from './Eye'

const EyesContainer = () => {

  const body = useRef(null)

  return (
    <div data-scroll data-scroll-section className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.9" id='NkJ930' ref={body} className=' flex justify-center items-center w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div data-scroll data-scroll-speed="0.3" className='absolute flex gap-10 w-fit h-fit'>
              <Eye reference={body} eyeColor={"white"} eyeBollColor={"black"} text={"play"} />
              <Eye reference={body} eyeColor={"white"} eyeBollColor={"black"} text={"play"} />
            </div>
        </div>
    </div>
  )
}

export default EyesContainer