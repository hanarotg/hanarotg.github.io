---
title: Docusaurus 올인원 배포 스크립트
description: docusaurus 빌드, 배포, 깃허브 commit, push 스크립트
keywords: [git, docusaurus]
tags: [git, docusaurus]
---

# Docusaurus 올인원 배포 스크립트

## 스크립트

:::warning

MacOS(Darwin) 운영체제에서만 호환됩니다.

:::

`package.json` script 파트에 아래와 같이 추가해 주세요.

```json
    "commit": "git add . && git commit -m 'update .' && git push origin main",
    "deploy-ps": "cmd /C \"set \"GIT_USER=hanarotg\" && yarn deploy\"",
    "deploy-mac": "GIT_USER=hanarotg docusaurus deploy",
    "all": "docusaurus build && GIT_USER=hanarotg docusaurus deploy && commit"
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
    "commit": "git add . && git commit -m 'update .' && git push origin main",
    "deploy-ps": "cmd /C \"set \"GIT_USER=hanarotg\" && yarn deploy\"",
    "deploy-mac": "GIT_USER=hanarotg docusaurus deploy",
    "all": "docusaurus build && GIT_USER=hanarotg docusaurus deploy && commit"
// highlight-end
  },
...
```

프로젝트 수정 후 빌드, 배포, 커밋, 푸쉬를 한번에 진행합니다.

```bash
yarn all
```

## 참고 자료

:::info

운영 체제 별 다른 명령어 제공 추가 예정입니다.

:::

- https://stackoverflow.com/questions/45082648/npm-package-json-os-specific-script
