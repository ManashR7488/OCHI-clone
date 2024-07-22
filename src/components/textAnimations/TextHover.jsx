import { motion } from "framer-motion";
import React from "react";

const TextHover = ({ text }) => {
    
  return (
    <span  className="group relative  bg-red-300">
      <h1 className="inline">{text}</h1>
      <span className="w-full h-[2px] absolute bg-black bottom-0 left-0 group-hover:bg-red-500"></span>
    </span>
  );
};

export default TextHover;
