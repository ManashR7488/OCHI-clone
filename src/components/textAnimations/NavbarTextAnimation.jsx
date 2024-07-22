import { useGSAP } from "@gsap/react";
import { easeOut, motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const NavbarTextAnimation = ({ text , id }) => {
  const textRef = useRef(null);
  const parentDiv = useRef(null);
  const [linkHeight, setLinkHeight] = useState(0);

  useEffect(() => {
    const dims = textRef.current.getBoundingClientRect();
    setLinkHeight(dims.height+5);
  }, []);
 
  useGSAP(() => {
    parentDiv.current.addEventListener('mouseenter',()=>{
      gsap.fromTo(`#${id}`, {x:"-100%"}, {x:0,duration:0.5,ease:[0.215, 0.61, 0.355, 1]})
    });
    parentDiv.current.addEventListener('mouseleave',()=>{
      gsap.fromTo(`#${id}`, {x:0}, {x:"100%",duration:0.5,ease:[0.215, 0.61, 0.355, 1]})
    })
  })

  return (
    <motion.div
    ref={parentDiv}
      initial="initial"
      whileHover="hover"
      className={`relative w-full flex flex-col overflow-hidden`}
      style={{ height: linkHeight }}
    >
      <motion.div
        variants={{ initial: { y: 0 }, hover: { y: "-50%" } }}
        transition={{ ease: [0.215, 0.61, 0.355, 1], duration: 0.3 }}
        className=""
      >
        <h1 ref={textRef} className=" overflow-hidden">{text}</h1>
        <h1 className=" overflow-hidden">{text}</h1>
      </motion.div>
      <motion.span
        id={id}
        className=" absolute w-full h-[1.0px] bg-black left-0 bottom-0 -translate-x-[100%]"
      ></motion.span>
    </motion.div>
  );
};

export default NavbarTextAnimation;
