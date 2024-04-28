---
title: ASTx AhnLab Safe Transaction for Mac 강제종료
description: ASTx AhnLab Safe Transaction for Mac 강제종료
keywords: ["ASTx", "AhnLab", "Safe", "Transaction", "Mac"]
tags: ["ASTx"]
---

# ASTx AhnLab Safe Transaction for Mac 강제종료

맥에서 은행을 이용할 때 반드시 설치해야 하는 안랩 프로그램이 있습니다.

이 프로그램 실행 후, 종료하는 옵션이 없어 맥을 종료할 때까지 실행중인 상태로 놔두게 되는데요, 터미널 명령을 통해 강제 종료해보겠습니다.

터미널을 열어 아래와 같은 명령어를 실행시켜 주세요.

```bash
killall -9 astxAgent
```
