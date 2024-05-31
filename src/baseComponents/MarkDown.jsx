import React from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const MarkDown = ({ content }) => {
    
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
};

export default MarkDown;
