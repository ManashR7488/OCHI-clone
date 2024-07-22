import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./style.css";

const LandingPage = () => {
  const [animate, setAnimate] = useState(false);

  useGSAP(() => {
    if (animate) {
      gsap.to(".animDiv", {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
      gsap.to(".animArr", {
        scale: 1,
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
      gsap.to(".anArr", {
        color: "#ffffff",
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
    } else {
      gsap.to(".animDiv", {
        backgroundColor: "transparent",
        color: "#000000",
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
      gsap.to(".animArr", {
        scale: 0,
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
      gsap.to(".anArr", {
        color: "#000",
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      });
    }
  }, [animate]);

  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.6"
      className="w-full h-screen bg-[#f1f1f1]"
    >
      <div className="textStructure font-Founder flex flex-col justify-center pl-[3.25rem] h-[80vh]">
        {["We create", "eye-opening", "PRESENTATIONS"].map((items, idx) => (
          <div key={idx} className="masker w-fit flex items-center gap-2">
            {idx === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1.2 }}
                className="w-[9vw] h-[6vw] mt-[0.89rem] rounded-lg overflow-hidden"
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                  alt=""
                />
              </motion.div>
            )}
            <h1 className="text-[8.5rem] h-full leading-[7vw] uppercase">
              {items}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] px-[3.25rem] border-t-[#b2b2b2] py-5 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, idx) => (
          <p
            key={idx}
            className={`text-base font-normal leading-none ${
              idx === 1 && "ml-28"
            }`}
          >
            {items}
          </p>
        ))}
        <div className="start flex justify-center items-center gap-1">
          <div
            onMouseEnter={() => {
              setAnimate(true);
            }}
            onMouseLeave={() => {
              setAnimate(false);
            }}
            className="animDiv px-3 py-1 border border-[#212121] rounded-full uppercase cursor-pointer"
          >
            start the project
          </div>
          <div
            onMouseEnter={() => {
              setAnimate(true);
            }}
            onMouseLeave={() => {
              setAnimate(false);
            }}
            className="arrowB relative p-2 rounded-full border border-[#212121] flex justify-center items-center cursor-pointer"
          >
            <div className="animArr h-[110%] w-[110%] bg-black absolute z-0 rounded-full scale-0"></div>
            <MdArrowOutward className="anArr relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
