import React from "react";
import star from "../../assets/images/products/star.png";

export const ProductCard = ({ type, img, name, oldPrice, price }) => {
  return (
    <>
      <div className="rounded-[30px] pt-[30px] px-[30px] pb-5 relative h-[483px] bg-custom z-10">
        <span className="bg-primary text-white py-1 px-3 rounded-lg font-sans font-semibold text-base text-center absolute">
          {type}
        </span>
        <img className="mt-14" src={img} alt="product" />
        <div className="absolute bottom-5">
          <h1 className="font-roboto font-semibold text-xl text-primary text-start">{name}</h1>
          <div className="flex gap-[80px]">
            <div className="flex gap-2 items-center">
              <del className="font-sans font-semibold text-base text-[#b8b8b8] ">{oldPrice}</del>
              <p className="font-sans font-bold text-lg text-primary">{price}</p>
            </div>
            <img src={star} alt="stars" />
          </div>
        </div>
      </div>
    </>
  );
};
