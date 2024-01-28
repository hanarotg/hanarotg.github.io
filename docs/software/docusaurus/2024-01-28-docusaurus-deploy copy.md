---
title: 배포하기
description: docusaurus gh-pages 브랜치로 deploy하는 방법
keywords: [git, docusaurus]
tags: [git, docusaurus]
---

## 사전 준비

### 브랜치

프로젝트의 브랜치는 아래와 같이 구성되어 있음을 가정합니다.

:::info

만약 `gh-pages` 브랜치가 없는 경우 생성해 주세요. 도큐사우루스의 `DeploymentBranch`의 기본값이 `gh-pages` 이므로 브랜치명을 똑같이 맞추어 생성해 주세요.
:::

:::warning

기본 브랜치가 `gh-pages`가 아닌 다른 브랜치로 설정되어 있어야 합니다.

:::

- `main` (default)
- `gh-pages`

### pages 설정

깃허브 프로젝트 -> settings -> pages 에서 Branch를 `gh-pages`, `/(root)`로 설정해 주세요.

![image2](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/37990696-bd97-46c7-898c-ab6f4f514d05)

## 빌드

### 프로젝트 빌드

로컬 프로젝트 터미널서 배포할 프로젝트를 빌드합니다.

```bash
yarn build
```

### 브랜치 확인 및 변경

배포 시, `gh-pages` 브랜치가 아니라 다른 브랜치에서 배포 명령을 실행해야 합니다.

먼저 터미널에서 브랜치를 확인하고 필요 시 브랜치를 바꾸어 주세요.

```bash
git branch
* main
gh-pages
```

### 빌드 및 배포

이제 준비가 완료되었습니다. 배포해 주세요.

```bash
GIT_USER=깃허브계정아이디 yarn deploy
```

## 참고 자료

- [Deployment - Docusaurus](https://docusaurus.io/docs/next/deployment)
- [Creating a GitHub Pages site - GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
