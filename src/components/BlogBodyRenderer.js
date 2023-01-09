import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogBodyRenderer = ({ body }) => {
  console.log(body.raw);
  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="hover:underline text-blue-500">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className="my-2">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-2xl mt-10 mb-3">{children}</h2>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="my-4">{children}</p>;
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return (
          <blockquote className="my-7 text-xl border-l-2 border-secondary-light pl-4 leading-9">
            {children}
          </blockquote>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target;
        return (
          <GatsbyImage
            className="rounded-md my-4"
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        );
      },
    },
  };

  return <>{renderRichText(body, options)}</>;
};

export default BlogBodyRenderer;
