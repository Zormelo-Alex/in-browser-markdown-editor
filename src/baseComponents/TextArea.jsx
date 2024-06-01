import React from "react";

const TextArea = ({ content, handleTextChange, isEmpty }) => {
  // console.log(content)
  return (
    <div className="py-4 h-full">
      <textarea
        name=""
        id=""
        value={content || ""}
        disabled={isEmpty}
        onChange={(e)=> handleTextChange(e.target.value)}
        className="w-full min-h-[85dvh] h-full p-3 outline-none border-none dark:bg-[#151619]"
      >
      </textarea>
    </div>
  );
};

export default TextArea;
