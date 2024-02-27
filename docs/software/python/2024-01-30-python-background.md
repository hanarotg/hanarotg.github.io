---
title: python nuhup 백그라운드 실행
description: python nuhup 백그라운드 실행하는 방법
keywords: [python, linux]
tags: [python, linux]
---

# python nohup 백그라운드 실행

## 백그라운드 실행

파이썬 프로그램을 실행하는 예제입니다.

```bash
python nohup 파이썬파일.py
```

### output 저장

```bash
python nohup 파이썬파일.py > output저장할파일
```

### 프로세스 확인

```bash
ps -ef | grep python
```

### 자신이 실행한 프로세스만 확인

```bash
ps -ef | grep python | grep 사용자명
```

## 프로세스 종료

실행중인 파이썬 프로그램의 PID를 찾습니다. 그 다음 `kill` 명령을 수행해 주세요.

```bash
kill PID
```

## 참고 자료

- [nohup(1) — Linux manual page
  ](https://man7.org/linux/man-pages/man1/nohup.1.html)
- https://stackoverflow.com/questions/17385794/how-to-get-the-process-id-to-kill-a-nohup-process
