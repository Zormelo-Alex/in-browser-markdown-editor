import React from "react";
import {
  iconMenu,
  iconDocument,
  iconDelete,
  iconSave,
  iconClose,
  logo,
} from "../assets";

const TopNav = ({
  setIsNavOpen,
  isNavOpen,
  showDeleteModal,
  content,
  changeName,
  save,
  isEmpty,
}) => {
  return (
    <div className="w-full bg-primaryDark">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div
            className="bg-secondaryDark w-fit p-5 cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {!isNavOpen ? (
              <img src={iconMenu} className="h-[15px]" alt="menu" />
            ) : (
              <img src={iconClose} className="h-[15px]" alt="menu" />
            )}
          </div>
          <div className="hidden lg:block relative mr-5">
            <img src={logo} alt=""  />
            <span className="absolute h-[30px] w-[2px] bg-[#5A6069] top-[-0.5rem] right-[-1rem]"></span>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <img src={iconDocument} alt="icon" />
            </div>
            <div >
              <label className="text-[#7C8187] text-[12px] hidden md:block" htmlFor="name">Document Name</label>
              <input
                id="name"
                disabled={isEmpty}
                className="text-white bg-transparent w-full outline-none focus:border-b-[1px] caret-buttonPrimary"
                type="text"
                value={content?.name || ""}
                onChange={(e) => changeName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pr-2 cursor-pointer">
          <div onClick={() => showDeleteModal(true)} title="Delete document">
            <img src={iconDelete} alt="icon" />
          </div>
          <div className="p-3 bg-buttonPrimary hover:bg-primaryHover transition-all ease-in rounded-[4px] flex text-white gap-2 capitalize cursor-pointer" onClick={save} title="Save document">
            <img src={iconSave} alt="icon" />
            <span className="hidden md:block">Save changes</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
