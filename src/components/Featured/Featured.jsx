import React from "react";
import Cards from "./Cards";

const Featured = () => {
  return (
    <div className="w-full py-10 bg-[#f1f1f1]">
      <h1 className="py-10 text-[3.5vw] px-[3.25rem]">Featured projects</h1>
      <div className="cards border-t border-[#cacaca] w-full pt-14 pb-10">
        <div className="w-full flex gap-5 px-[3.25rem] flex-wrap">
          <Cards
            name={"FYDE"}
            btnText={["audit", "Copywriting", "sales deck", "slides design"]}
            img={
              "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            }
          />
          <Cards
            name={"VISE"}
            btnText={["AGENCY", "COMPANY PRESENTATION"]}
            img={
              "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            }
          />
          <Cards
            name={"TRAWA"}
            btnText={["brand identity", "design research", "investor deck"]}
            img={
              "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            }
          />
          <Cards
            name={"premium blend"}
            btnText={["branded template"]}
            img={
              "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-20">
      <button className="flex gap-10 bg-black text-white rounded-full items-center px-7 py-4">
            VIEW ALL CASE STUDIES <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
      </div>
    </div>
  );
};

export default Featured;
