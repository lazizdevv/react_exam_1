import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import { InputSearch } from "../../components/input-search";
import { Cart } from "../../components/cart";

export const Header = () => {
  return (
    <>
      <div className="max-w-[1595px] mx-auto bg-white py-[70px]">
        <div className="flex justify-between gap-5 items-center flex-wrap">
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="flex items-center gap-2 ">
                <Logo />
                <h1 className="font-roboto font-bold text-primary text-[38px] text-left">Organick</h1>
              </div>
            </Link>
          </div>
          <div className="flex gap-10 items-center justify-center flex-wrap font-roboto font-bold text-left text-primary text-xl">
            <Link className="hover:underline" to={"/"}>Home</Link>
            <Link className="hover:underline" to={"about"}>About</Link>
            <Link className="hover:underline" to={"/"}>Pages</Link>
            <Link className="hover:underline" to={"shop"}>Shop</Link>
            <Link className="hover:underline" to={"/"}>Projects</Link>
            <Link className="hover:underline" to={"/"}>News</Link>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <InputSearch />
            <Cart/>
          </div>
        </div>
      </div>
    </>
  );
};
