import React from "react";
import TextHover from "../textAnimations/TextHover";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-position="start,end"
      data-scroll-speed="0.4"
      className="w-full py-10 bg-[#CDEA68] rounded-t-3xl font-NewMontreal"
    >
      <h1 className=" px-[3.25rem] text-[3.5vw] leading-none py-14">
        Ochi is a strategic partner for fast-growing tech <br /> businesses that
        need to <TextHover text={"raise funds"} />, sell products, <br />{" "}
        explain complex ideas, and hire great people.
      </h1>
      <div className="w-full pt-5 pb-28 flex border-y border-[#9eb454] px-[3.25rem] text-[1.15vw]">
        <div className="w-1/2">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-1/2 flex ">
          <div className="w-1/2">
            <h1>
              We create tailored presentations to help <br /> you persuade your
              colleagues, clients, or <br /> investors. Whether it's live or
              digital, <br />
              delivered for one or a hundred people.
            </h1>
            <br />
            <h1>
              We believe the mix of strategy and <br /> design (with a bit of
              coffee) is what <br /> makes your message clear, convincing,{" "}
              <br /> and captivating.
            </h1>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center pt-20">
            <div>
              <h1>S:</h1>
              <br />
              <h1>Instagram</h1>
              <h1>Behance</h1>
              <h1>Facebook</h1>
              <h1>Linkedin</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 flex px-[3.25rem]">
        <div className="w-1/2 ">
          <h1 className="text-[3.6vw]">Our approach:</h1>
          <button className="flex gap-10 bg-black text-white rounded-full items-center px-7 py-4">
            READ MORE <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#9eb454] h-[65vh] rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
