import React, { useEffect, useRef, useState } from "react";

const Eye = ({text, eyeColor, eyeBollColor, reference}) => {

    const circle = useRef(null);
    const [rotate, setRotate] = useState(0)
    const [xP, setXP] = useState(0)
    const [yP, setYP] = useState(0)

    useEffect(() => {
        const { width, height,x,y } = circle.current.getBoundingClientRect();
        reference.current.addEventListener("mousemove",(e)=>{
          const deltaX = e.clientX - (x + (width/2));
          const deltaY = e.clientY - (y + (height/2));

          const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
          setRotate(angle - 180);

          const xP = ( deltaX * 5) / 120;
          const yP = ( deltaY * 5) / 120;
          setXP(xP);
          setYP(yP);
        })
    })
    

  return (
    <div ref={circle} style={{backgroundColor:`${eyeColor}`}} className="relative w-[15vw] h-[15vw] rounded-full flex justify-center items-center">
      <div style={{transform:`translate(${xP}px, ${yP}px)`,backgroundColor:`${eyeBollColor}`}} className="w-[56%] h-[56%] rounded-full absolute overflow-hidden">
        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[18px] h-[18px] bg-[#f4f4f4] rounded-full "></div>
        </div>
      </div>
      <h1 className="text-white uppercase absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 font-NewMontreal text-[1.2vw]">{text}</h1>
    </div>
  );
};
 
export default Eye;
