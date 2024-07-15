import React from "react";
import { ProductRating } from "../product-rating/product-rating";

export const ProductCard = ({ type, img, name, oldPrice, price,rating }) => {
  return (
    <>
      <div className="rounded-[30px] pt-[30px] px-[30px] pb-5 relative h-[483px] bg-custom z-10 cursor-pointer hover:scale-105 transition-all">
        <span className="bg-primary text-white py-1 px-3 rounded-lg font-sans font-semibold text-base text-center absolute">
          {type}
        </span>
        <img className="mt-14" src={img} alt="product" />
        <div className="absolute bottom-5">
          <h1 className="font-roboto font-semibold text-xl text-primary text-start">{name}</h1>
          <div className="flex gap-[80px] items-center">
            <div className="flex gap-2 items-center">
              <del className="font-sans font-semibold text-base text-[#b8b8b8] ">{oldPrice}</del>
              <p className="font-sans font-bold text-lg text-primary">{price}</p>
            </div>
            <div className="">
              <ProductRating rating={rating}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
