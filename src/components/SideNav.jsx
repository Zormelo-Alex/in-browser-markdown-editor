import React from "react";
import { iconDocument, logo } from "../assets";
import Toggle from "../baseComponents/Toggle";

const SideNav = ({
  handleDarkSwitch,
  isDark,
  data,
  handleSelected,
  setIsNavOpen,
  addDocument,
  isEmpty
}) => {
  return (
    <div className="bg-primaryDark h-[100dvh] relative w-[65dvw] md:w-[35dvw] lg:w-[20dvw] p-4 pt-8">
      <div className="h-[14px]">
        <img src={logo} className="h-full object-cover" alt="logo" />
      </div>
      <h3 className="text-textSecondary uppercase font-medium text-[16px] my-8">
        my documents
      </h3>
      <button
        className="bg-buttonPrimary hover:bg-primaryHover transition-all ease-in mb-6 w-full py-2 rounded-[4px] text-white capitalize text-[15px]"
        onClick={(e) => {
          e.preventDefault();
          addDocument();
        }}
      >
        {" "}
        + New document
      </button>
      <div className="flex flex-col gap-4 max-h-[60dvh] overflow-y-scroll dont-show">
        {data &&
          data.map((item, index) => (
            <div
              className="flex items-center gap-5 text-white cursor-pointer hover:border-b border-secondaryDark ease-in transition-all"
              key={index}
              onClick={() => {
                handleSelected(index);
                setIsNavOpen(false);
              }}
            >
              <div>
                <img src={iconDocument} alt="icon" />
              </div>
              <div>
                <p className="text-textSecondary text-[13px]">
                  {item?.createdAt}
                </p>
                <h4 className="text-[15px]">{item?.name}</h4>
              </div>
            </div>
          ))}
      </div>

      <div className="absolute bottom-[2rem] flex items-center gap-4">
        <div className={isDark ? "text-white" : "text-[#5A6069]"}>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div onClick={handleDarkSwitch}>
          <Toggle />
        </div>
        <div className={isDark ? "text-[#5A6069]" : "text-white"}>
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
