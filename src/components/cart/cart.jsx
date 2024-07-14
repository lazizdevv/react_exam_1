import React from "react";
import { CartIcon } from "../../assets/svg/CartIcon";

export const Cart = () => {
  return (
    <>
      <div className="flex gap-3 items-center border rounded-[36px] p-1">
        <button className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
          <CartIcon />
        </button>
        <h1 className="text-primary font-roboto font-semibold text-lg text-left">Cart (0)</h1>
      </div>
    </>
  );
};
