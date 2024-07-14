import React from "react";
import { SearchIcon } from "../../assets/svg/SearchIcon";

export const InputSearch = () => {
  return (
    <div className="w-[376px] h-16 p-1 bg-white flex justify-between rounded-[36px]">
      <input type="text" className="w-[84%] rounded-[36px] outline-none" />
      <button className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center">
        <SearchIcon />
      </button>
    </div>
  );
};
