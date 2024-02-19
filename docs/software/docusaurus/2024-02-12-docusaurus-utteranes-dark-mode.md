---
title: Docusaurus utterances 다크 모드 적용
description: Docusaurus utterances 다크 모드 적용 dark mode
keywords: [docusaurus, utterances]
tags: [docusaurus, utterances]
---

# Docusaurus utterances 다크 모드 적용

## 코드

`/src/components/HomepageFeatures/Comment.js`에 아래 코드 몇 줄을 추가해 주세요.

```js
import React, { useEffect, useRef } from "react";
// highlight-start
import { useColorMode } from "@docusaurus/theme-common";
// highlight-end

function Comment() {
  const containerRef = useRef(null);
  // highlight-start
  const { colorMode } = useColorMode();
  // highlight-end

  useEffect(() => {
    const createUtterancesEl = () => {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "hanarotg/hanarotg.github.io");
      script.setAttribute("issue-term", "title");
      script.setAttribute("label", "comment");
      script.setAttribute(
        "theme",
        // highlight-start
        colorMode == "light" ? "github-light" : "github-dark"
        // highlight-end
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
```

## 참고 자료

- https://docusaurus.io/docs/next/api/themes/configuration#use-color-mode
- https://github.com/rohit-gohri/redocusaurus/issues/116

:::warning

아래 링크에 소개된 방법은 docusaurus 최신버전에서 작동하지 않습니다.

:::

- https://younho9.dev/docusaurus-manage-docs-2
