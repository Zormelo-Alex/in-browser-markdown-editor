import React from "react";
import { iconMenu, iconDocument, iconDelete, iconSave, iconClose } from "../assets";

const TopNav = ({setIsNavOpen, isNavOpen}) => {
  return (
    <div className="w-full bg-primaryDark">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-secondaryDark w-fit p-5 cursor-pointer" onClick={()=> setIsNavOpen(!isNavOpen)}>
            {
              !isNavOpen ? 
              <img src={iconMenu} className="h-[15px]" alt="menu" />
              : 
              <img src={iconClose} className="h-[15px]" alt="menu" />
            }
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <img src={iconDocument}  alt="icon" />
            </div>
            <p className="text-white lowercase">Welcome.md</p>
          </div>
        </div>
        <div className="flex gap-4 items-center pr-2">
          <div>
            <img src={iconDelete} alt="icon" />
          </div>
          <div className="p-3 bg-buttonPrimary rounded-[4px]">
            <img src={iconSave} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
