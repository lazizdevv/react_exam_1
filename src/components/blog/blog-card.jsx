import React from "react";
import { Button } from "../ui/button";
import { Arrow } from "../arrow/arrow";

export const BlogCard = ({
  img,
  data,
  admin,
  adminImg: AdminIcon,
  heading,
  title,
}) => {
  return (
    <>
      <div className="flex">
      <div className="pb-16 mb-[185px]">
        <div
          className=" w-[677px] h-[524px] bg-center bg-no-repeat px-8 relative rounded-[30px]"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="bg-white w-[82px] h-[82px] rounded-full flex justify-center items-center absolute top-11">
            <span className="font-roboto font-extrabold text-xl w-14 text-center uppercase text-primary">
              {data}
            </span>
          </div>
          <div className="bg-white px-14 pt-11 pb-16 rounded-[31px] absolute max-w-[613px] bottom-[-66px] shadow-custom shadow-[#a7a7a7]">
            <div className="flex items-center gap-2">
              <span>{<AdminIcon />}</span>
              <h1 className="font-roboto font-normal text-lg leading-5 text-primary">{admin}</h1>
            </div>
            <div className="mt-4">
              <h1 className="font-roboto font-extrabold text-2xl leading-7 text-primary">{heading}</h1>
              <p className="font-sans font-normal text-lg text-[#525C60]">{title}</p>
            </div>
            <div className="mt-4">
              <Button children={'Read More'} variant={'gold'} endIcon={<Arrow/>} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
