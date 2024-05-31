import React, { useState } from "react";
import { iconHidePreview, iconShowPreview } from "../assets";
import MarkDown from "../baseComponents/MarkDown";

const Home = ({ selected }) => {
  const [isPreview, setisPreview] = useState(true);

  console.log(selected);
  return (
    <div className="text-black pt-[3.4rem] min-h-screen bg-white dark:bg-[#151619] dark:text-white">
      <div className="bg-[#F5F5F5] dark:bg-[#1D1F22] flex justify-between py-2 px-4 items-center">
        <h4 className="font-medium text-[14px] uppercase">Preview</h4>
        <div
          onClick={() => setisPreview(!isPreview)}
          className="cursor-pointer"
        >
          {isPreview ? (
            <img src={iconShowPreview} className="h-[14px]" alt="" />
          ) : (
            <img src={iconHidePreview} className="h-[16px]" alt="" />
          )}
        </div>
      </div>

      <div>
        <MarkDown content={selected.content} />
      </div>
    </div>
  );
};

export default Home;
