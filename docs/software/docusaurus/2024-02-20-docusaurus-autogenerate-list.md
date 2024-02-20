---
title: Docusaurus 문서 작성 최신 정렬 스크립트
description: Docusaurus 문서 작성 최신 정렬 스크립트
keywords: [docusaurus]
tags: [docusaurus]
---

# Docusaurus 문서 작성 최신 순 정렬 스크립트

## 전제

- `/docs/intro.md` 파일이 연도 별 문서 정렬할 마크다운 파일
- `/docs/intro.md` 를 제외한 모든 파일은 `생성연도-생성월-생성일-제목.md`과 같은 형식으로 구성
- 모든 파일은 `h1`제목을 가지고 있어야 함(예: `# 제목`)

## 코드

루트 디렉토리에 `create-list.js`파일 작성 후 실행

```js
const fs = require("fs");
const path = require("path");

// 문서 폴더 경로
const docsDir = path.join(__dirname, "docs");

// 문서 제목과 링크를 저장할 배열
const titlesAndLinks = [];

// Markdown 파일에서 제목과 링크 추출하는 함수
function extractTitleAndLink(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const matches = content.match(/^#\s*(.*)$/m);
  const title = matches ? matches[1] : null;
  const link = filePath.replace(docsDir, "").replace(/\.md$/, ".html");

  return { title, link };
}

// 문서 폴더 내의 모든 Markdown 파일 탐색
function findDocsTitlesAndLinks(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findDocsTitlesAndLinks(filePath);
    } else if (file.endsWith(".md") && file !== "intro.md") {
      // intro.md 파일 제외
      const { title, link } = extractTitleAndLink(filePath);

      if (title && link) {
        titlesAndLinks.push({
          title,
          link,
          date: extractDateFromFileName(file),
        });
      }
    }
  });
}

// 파일명에서 생성년월 추출하여 날짜로 변환하는 함수
function extractDateFromFileName(fileName) {
  const regex = /(\d{4}-\d{2}-\d{2})/;
  const match = fileName.match(regex);

  return match ? new Date(match[0]) : null;
}

// 최신 글 순으로 정렬하는 함수
function sortByDateDescending(a, b) {
  return b.date - a.date;
}

// 마크다운 파일로 변환하여 저장하는 함수
function saveToMarkdownFile(data) {
  let year = data[0].date.getFullYear();
  let markdownContent = `---\nslug: /\nsidebar_position: 1\n---\n# 문서 소개\n## 작성자\n안녕하세요.\n## 문서 최신 순 (${data.length})\n### ${year}\n`;

  data.map(({ title, link, date }) => {
    // 작성 연도가 다를 경우 해당 작성 연도 마크다운 텍스트 추가 후 업데이트
    if (year !== (curYear = date?.getFullYear())) {
      year = curYear;
      markdownContent += `### ${year}\n`;
    }

    markdownContent += `- ${
      date?.getMonth() + 1
    }월 ${date?.getDate()}일 [${title}](${link})\n`;
  });

  fs.writeFileSync("./docs/intro.md", markdownContent, "utf-8");
  console.log("Markdown 파일이 생성되었습니다");
}

// 실행
findDocsTitlesAndLinks(docsDir);
titlesAndLinks.sort(sortByDateDescending);
saveToMarkdownFile(titlesAndLinks);
```

## 참고 자료

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
