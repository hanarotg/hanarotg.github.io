import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

function Comment() {
  const containerRef = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const createUtterancesEl = () => {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "hanarotg/hanarotg.github.io");
      script.setAttribute("issue-term", "title");
      script.setAttribute("label", "comment");
      script.setAttribute(
        "theme",
        colorMode == "light" ? "github-light" : "github-dark"
      );
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    };

    createUtterancesEl();
  }, []);

  return <div ref={containerRef} />;
}

export default Comment;
