"use client";

import style from "./index.style.module.scss";
import { Prism as Highlight } from "react-syntax-highlighter";

import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

/**
 * SyntaxHighlight component.
 * This component uses Prism (from react-syntax-highlighter) to highlight the syntax in a given code string.
 * It's styled with an Atom One Dark theme.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.content - Code content to be highlighted. Defaults to an empty string.
 * @returns {JSX.Element} Highlighted code block.
 */
const SyntaxHighlight = ({ content = "" }) => {
  return (
    <div className={`${style.codeBlock} flex-c full-width`}>
      <Highlight
        language="javascript"
        style={atomOneDark}
        wrapLongLines={true}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
      >
        {content}
      </Highlight>
    </div>
  );
};

export default SyntaxHighlight;
