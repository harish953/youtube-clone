import React from "react";
import { LOGO_CDN, MENU_CDN, USER_ICON } from "../utils/constants";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleOptionMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleOptionMenu());
  };
  return (
    <div className="  grid grid-flow-col p-2 shadow-lg ">
      <div className=" flex grid-cols-1 px-4">
        <img
          className="h-6 my-1 cursor-pointer"
          src={MENU_CDN}
          alt="menu"
          onClick={toggleMenuHandler}
        ></img>
        <img className="h-8 ml-2" src={LOGO_CDN} alt="logo"></img>
      </div>
      <div className="flex col-span-10 text-left px-10">
        <input
          type="text"
          className=" w-1/2 border border-gray-400 rounded-l-full p-2"
          placeholder="Search..."
        ></input>
        <button
          type="button"
          className=" border px-5 border-gray-400 bg-gray-100 rounded-r-full"
        >
          <BsSearch />
        </button>
      </div>
      <div className="flex ">
        {" "}
        <img className="h-8" src={USER_ICON} alt="logo"></img>
      </div>
    </div>
  );
};

export default Header;
