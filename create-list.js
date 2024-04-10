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
  let year = 0;
  let markdownContent = `---\nslug: /\nsidebar_position: 1\n---\n# 문서 소개\n## 작성자\n안녕하세요, 이태경입니다.\n- [\`깃허브\`](https://github.com/hanarotg) [\`이메일\`](mailto:hanarotg@naver.com)\n## 문서 목록 (${data.length})\n`;

  data.map(({ title, link, date }, index) => {
    // 작성 연도가 다를 경우 해당 작성 연도 마크다운 텍스트 추가 후 업데이트
    if (year !== (curYear = date?.getFullYear())) {
      // 가장 최신 연도만 펼치기
      if (year === 0) {
        markdownContent += `<details open>`;
      } else {
        markdownContent += `<details>`;
      }

      year = curYear;
      markdownContent += `\n<summary>${curYear}년</summary>\n<div>\n`;
    }
    markdownContent += `- ${
      date?.getMonth() + 1
    }월 ${date?.getDate()}일 [${title}](${link})\n`;

    // 만약 지금 출력 중인 글이 마지막 글이거나, 동일한 연도에 있는 마지막 글인 경우
    if (
      index == data.length - 1 ||
      year !== data[index + 1].date?.getFullYear()
    ) {
      markdownContent += `\n</div>\n</details>\n`;
    }
  });

  fs.writeFileSync("./docs/intro.md", markdownContent, "utf-8");
  console.log("Markdown 파일이 생성되었습니다");
}

// 실행
findDocsTitlesAndLinks(docsDir);
titlesAndLinks.sort(sortByDateDescending);
saveToMarkdownFile(titlesAndLinks);
