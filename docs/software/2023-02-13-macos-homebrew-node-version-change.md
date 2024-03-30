---
title: MacOS Homebrew로 node 버전 바꾸기
description: MacOS Homebrew로 node 버전 바꾸기
keywords: ["MacOS", "Homebrew", "node", "버전", "바꾸기"]
tags: ["MacOS", "homebrew", "node"]
---

# MacOS Homebrew로 node 버전 바꾸기

## 개요

vscode 코드에 궁금한 점이 생겨 로컬에 클론하게 되었습니다. 로컬 노드 버전이 19.04 인데 vscode 모듈 중 일부가 노드 v19를 지원하지 않아 앱 실행이 불가능했습니다.

homebrew를 통해 node 버전을 바꾸어 보겠습니다.

## 로컬 node 버전 확인

저는 node 19.04가 로컬에 설치되어 적용되고 있었습니다

```bash
node -v
```

## 원하는 node 버전 설치

homebrew 공식 사이트에서 원하는 node 버전을 확인하고 설치합니다. 저는 v18로 설치해보겠습니다.

- https://formulae.brew.sh/formula/node#default

```bash
brew install node@18
```

## 설치된 node 확인

설치된 노드 목록을 확인합니다. 기존에 설치된 **node**와 방금 새로 설치한 **node@18**이 체크되어 있습니다.

```bash
brew search node
```

```bash
==> Formulae
libbitcoin-node   node ✔            node@10           node@16           nodebrew          ode
linode-cli        node-build        node@12           node@18 ✔         nodeenv
llnode            node-sass         node@14           node_exporter     nodenv
```

## node 링크

기존에 설치된 node를 unlink 합니다. 기존에 설치된 node 의 이름은 앞서 node임을 확인하였으니 아래와 같은 명령을 시행합니다.

```bash
brew unlink node
```

새로 설치한 **node@18**을 링크합니다.

```bash
brew link node@18
```

link 완료되면 새로 설치된 node가 적용되었는지 확인합니다.

```bash
node -v
v18.13.0
```

성공적으로 node 버전을 바꾸었습니다.

## 참고 : Could not symlink bin/npm 에러 대응

```bash
Error: Could not symlink bin/npm
Target /opt/homebrew/bin/npm
already exists. You may want to remove it:
  rm '/opt/homebrew/bin/npm'

To force the link and overwrite all conflicting files:
  brew link --overwrite node@18

To list all files that would be deleted:
  brew link --overwrite --dry-run node@18
```

아래 명령을 통해 심볼릭 링크를 삭제한 다음 다시 link 를 시도해 주세요.

```bash
rm '/opt/homebrew/bin/npm' '/opt/homebrew/bin/npx'
rm -rf '/opt/homebrew/lib/node_modules/npm'
```

## 참고 자료

- https://docs.brew.sh/Querying-Brew#linked-keg-only-formulae
