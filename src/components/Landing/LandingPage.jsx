import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-[#f1f1f1]">
      <div className="textStructure font-Founder flex flex-col justify-center pl-[3.25rem] h-[80vh]">
        {["We create", "eye-opening", "PRESENTATIONS"].map((items, idx) => (
          <div key={idx} className="masker w-fit flex items-center gap-2">
            {idx === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ease: [.86,0,.07,.995], duration:1.2}} 
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
          <div className="px-3 py-1 border border-[#212121] rounded-full uppercase">
            start the project
          </div>
          <div className="p-2 rounded-full border border-[#212121] flex justify-center items-center">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
