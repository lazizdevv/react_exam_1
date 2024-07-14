import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg/Logo";
import { HeaderBanner } from "../../components/header-banner/header-banner";
import { InputSearch } from "../../components/input-search/input-search";
import { Cart } from "../../components/cart/cart";

export const Header = () => {
  return (
    <>
      <div className="container bg-white py-[70px]">
        <div className="flex justify-between items-center flex-wrap border">
          <div className="flex align-middle">
            <Link to={"/"}>
              <div className="flex items-center gap-2 ">
                <Logo />
                <h1 className="font-roboto font-bold text-primary text-[38px] text-left">Organick</h1>
              </div>
            </Link>
          </div>
          <div className="flex gap-10 align-middle justify-center border py-4 font-roboto font-bold text-left text-primary text-xl">
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"/"}>Pages</Link>
            <Link to={"shop"}>Shop</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/"}>News</Link>
          </div>
          <div className="flex gap-6">
            <InputSearch />
            <Cart/>
          </div>
        </div>
      </div>

      <HeaderBanner />
    </>
  );
};
