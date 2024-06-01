import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

const MarkDown = ({ content, isEmpty }) => {
  const emptyMarkdown = "# No Document Found\n\n## Please Add a Document to Proceed\n\n\nIt seems that no document was found. To proceed, please add a document.\nThank you!";
  return (
    <>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        className={"markdown"}
      >
        {isEmpty ? emptyMarkdown : content}
      </Markdown>
    </>
  );
};

export default MarkDown;
