---
title: flutter Don't use 'BuildContext's across async gaps.
description: flutter Don't use 'BuildContext's across async gaps.
keywords: ["플러터", "flutter"]
tags: ["flutter"]
---

# Flutter Don't use 'BuildContext's across async gaps.

## 내용

동일한 블록에서 비동기 처리가 있는 경우, BuildContext 객체의 직접적인 사용을 경고하는 메시지

다음과 같은 상황에서 발생할 수 있습니다.

- BuildContext 객체가 Future 메소드, StreamBuilder 내에서 활용될 경우

## 원인

### Stale Data 문제 가능성

비동기 처리 중일때, BuildContext 객체를 직접 활용할 경우 만료되거나, 존재하지 않는 위젯을 가리킬 수 있습니다.

이는 의도하지 않은 신선하지 않은 데이터를 가지고 있음을 의미하며, Stale Data로 칭합니다.

이외에도, 메모리 누수, 앱 종료등의 문제가 발생할 수 있습니다.

## 해결

### 마운트 여부 사전 확인

BuildContext 객체를 활용하기 앞서 위젯의 마운트 여부를 미리 확인합니다.

마운트 되지 않는 상황에서의 BuildContex 객체를 사용하는 일을 없도록 합니다.

```dart
if(!mount) { return; }
```

## 참고 자료

- https://medium.com/nerd-for-tech/do-not-use-buildcontext-in-async-gaps-why-and-how-to-handle-flutter-context-correctly-870b924eb42e
- https://www.montecarlodata.com/blog-stale-data/
