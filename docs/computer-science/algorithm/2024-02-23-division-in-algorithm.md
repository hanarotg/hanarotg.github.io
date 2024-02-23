---
title: 나머지 분배법칙
description: 나머지 분배법칙
keywords: ["나머지", "분배법칙"]
tags: ["나머지", "분배법칙"]
---

# 나머지 분배법칙

## 나머지 분배 법칙

사칙 연산의 분배 법칙과는 다르다.

```
( a + b ) % mod = ( a % mod + b % mod ) % mod
```

## 주의점

알고리즘 문제에서 오버플로를 피하기 위해 편의 상 `N`을 나눈 값을 출력하라고 한다. (예: 1000000)

나머지 분배 법칙은 사칙 연산의 분배 법칙과 다르다는 점을 명심해야 한다.

두 개 이상의 경우에 수를 문제 풀이 과정에서 연산해야 하는 경우 **한꺼번에 묶어서** 나누어 주어야 한다.

아래 두 코드 중 하나는 정답이고 하나는 오답이다.

- https://www.acmicpc.net/source/73883080
- https://www.acmicpc.net/source/73882786

## 참고 자료

- https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic
- https://code-piggy.tistory.com/entry/C-모듈러-연산나머지-분배-법칙
