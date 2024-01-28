---
title: docusaurus 배포 스크립트
description: docusaurus 빌드, 배포, 깃허브 commit, push 스크립트
keywords: [git, docusaurus]
tags: [git, docusaurus]
---

## 스크립트

`package.json` script 파트에 아래와 같이 추가해 주세요.

```bash
    "all": "docusaurus build && GIT_USER=깃허브계정아이디 docusaurus deploy && git add . && git commit -m 'update .' && git push origin main"
```

```json
...
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
// highlight-start
    "all": "docusaurus build && GIT_USER=깃허브계정아이디 docusaurus deploy && git add . && git commit -m 'update .' && git push origin main"
// highlight-end
  },
...
```

프로젝트 수정 후 빌드, 배포, 커밋, 푸쉬를 한번에 진행합니다.

```bash
yarn all
```
