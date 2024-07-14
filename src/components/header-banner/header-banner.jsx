import React from "react";
import headerBg from "../../assets/images/header-bg.png";
const bgPosition = "75% center";
import bg from "../../assets/images/Background.png";
import { Button } from "../ui/button";
import { Arrow } from "../arrow/arrow";
export const HeaderBanner = () => {
  return (
    <>
      <div
        className=" z-[1] relative h-screen  max-h-[898px] bg-cover bg-no-repeat w-full  max-w-[1920px] m-auto flex flex-col justify-center"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundPosition: bgPosition,
        }}
      >
        <div className="container  flex flex-col w-full h-[405px]">
          <h1 className="font-tail font-normal text-4xl text-left text-secondary">
            100% Natural Food
          </h1>
          <h2 className="font-roboto font-extrabold text-[70px] h-[246px] leading-[82px] text-left text-primary w-[530px] flex flex-col justify-start items-start p-0 tracking-normal">
            Choose the <br /> best <br /> healthier way
          </h2>
          <Button
            children={"Explore Now"}
            variant="gold"
            endIcon={<Arrow />}
            className="mt-6"
          />
        </div>
        <img className="z-[-1] absolute top-0" src={bg} alt="bg" />
      </div>
    </>
  );
};
