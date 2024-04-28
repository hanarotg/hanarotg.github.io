---
title: React-Native github 레포지토리 첫 업로드하기
description: React-Native github 레포지토리 첫 업로드하기
keywords: ["react-native", "github"]
tags: ["react-native"]
---

# React-Native github 레포지토리 첫 업로드하기

## 프로젝트 생성

아래 명령을 통해 로컬 프로젝트를 생성합니다.

```bash
npx react-native init 프로젝트명
```

## github 레포지토리 생성

로컬 환경에서 react native 프로젝트를 생성하는 동안 github에 접속하여 레포지토리를 생성해 주세요.

:::warning

- react-native cli 로 프로젝트 생성 시 자동으로 `.gitignore`이 생성되므로 생성 옵션 중 `.gitignore` 파일 추가를 선택하지 마세요.
- README 파일 추가도 선택하지 마세요.

:::

![image22](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/63c60904-a21e-412e-87aa-b9ff809e88e2)

## 깃 초기화

로컬 프로젝트 생성이 완료되었으면 로컬 프로젝트 디렉토리에서 깃 초기화를 해주세요.

```bash
git init
```

## 깃 리모트 설정

깃허브에서 생성한 레포지토리와 로컬 프로젝트를 연결합니다.

```bash
git remote add origin https://github.com/그룹또는회원명/프로젝트명.git
```

## 첫 커밋 작성

첫 커밋 작성 후 브랜치 생성이 가능합니다. 간단한 커밋 메시지를 작성해 주세요.

```bash
git add .
git commit -m "init"
```

## push

이제 첫 커밋을 할 준비가 완료되었습니다. 로컬 파일을 푸쉬해주세요.

:::info

브랜치가 없는 경우 브랜치를 생성하여 주세요.

- 브랜치 목록 출력 : git branch
- 브랜치 생성 : git branch 브랜치명

:::

```bash
git push origin main
```
