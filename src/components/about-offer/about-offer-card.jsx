import React from "react";

export const AboutOfferCard = ({ img, name }) => {
  return (
    <>
      <div className="flex flex-col justify-center cursor-pointer hover:scale-105 transition-all">
        <div className="max-w-[334px] h-[314px] bg-no-repeat bg-center rounded-[30px] bg-white" style={{backgroundImage:`url(${img})`}}>

        </div>
        <div className="text-center mt-6">
            <p className="font-roboto font-medium text-2xl leading-7 text-white">{name}</p>
        </div>
      </div>
    </>
  );
};
