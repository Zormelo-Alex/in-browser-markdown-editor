import React, { useState } from "react";
import { iconHidePreview, iconShowPreview } from "../assets";
import MarkDown from "../baseComponents/MarkDown";
import TextArea from "../baseComponents/TextArea";

const Home = ({ selected, handleTextChange, isEmpty, setNav, isNav }) => {
  const [isPreview, setisPreview] = useState(true);

  return (
    <div className="text-black pt-[3.4rem] bg-white dark:bg-[#151619] min-h-[100dvh] dark:text-white">
      <div className="bg-[#F5F5F5] dark:bg-[#1D1F22] flex justify-between py-2 px-4 items-center md:hidden">
        <h4 className="font-medium text-[14px] uppercase tracking-widest">
          {isPreview ? "Preview" : "MarkDown"}
        </h4>
        <div
          onClick={() => {
            if (isEmpty) return;
            setisPreview(!isPreview);
          }}
          className="cursor-pointer"
        >
          {isPreview ? (
            <img src={iconHidePreview} className="h-[16px]" alt="" />
          ) : (
            <img src={iconShowPreview} className="h-[14px]" alt="" />
          )}
        </div>
      </div>

      <div
        className={`hidden md:grid ${
          !isPreview ? " grid-cols-2 " : " grid-cols-1 "
        } bg-[#F5F5F5] dark:bg-[#1D1F22] justify-between px-4 items-center`}
      >
        {!isPreview && (
          <div>
            <h4 className="font-medium text-[14px] uppercase tracking-widest">
              {"MarkDown"}
            </h4>
          </div>
        )}
        <div
          className={` ${
            !isPreview && " border-l px-4 "
          } py-2 flex justify-between`}
        >
          <h4 className="font-medium text-[14px] uppercase tracking-widest">
            {"Preview"}
          </h4>
          <div
            onClick={() => {
              if (isEmpty) return;
              setisPreview(!isPreview);
            }}
            className="cursor-pointer"
          >
            {isPreview ? (
              <img src={iconHidePreview} className="h-[16px]" alt="" />
            ) : (
              <img src={iconShowPreview} className="h-[14px]" alt="" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          !isPreview ? " grid-cols-2 " : " grid-cols-1 "
        } hidden md:grid h-full`}
      >
        {!isPreview && (
          <div>
            <TextArea
              content={selected?.content}
              handleTextChange={handleTextChange}
              isEmpty={isEmpty}
            />
          </div>
        )}
        <div className={isPreview && "flex justify-center h-full"}>
          <div
            className={`${!isPreview ? "border-l px-6 " : " w-[672px] "} p-2 h-full`}
          >
            <MarkDown content={selected?.content} isEmpty={isEmpty} />
          </div>
        </div>
      </div>

      <div className="px-4 pb-6 md:hidden">
        {isPreview ? (
          <MarkDown content={selected?.content} isEmpty={isEmpty} />
        ) : (
          <TextArea
            content={selected?.content}
            handleTextChange={handleTextChange}
            isEmpty={isEmpty}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
