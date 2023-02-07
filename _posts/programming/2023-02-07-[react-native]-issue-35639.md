---
layout: single
title: React Native issue#35639 KeyboardAvoidingView 관련 버그 해결
category: programming
tags: react-native opensource keyboardavoidingview
toc: true
toc_sticky: true
---

해당 이슈 원본 스레드 또는 pull request 글을 확인하고 싶다면 아래 링크를 참고하세요.

- [issue #35639](https://github.com/facebook/react-native/issues/35639)
- [PR #36079
  ](https://github.com/facebook/react-native/pull/36079)

# 문제

## 문제 분석 방법

- 문제가 되는 컴포넌트 라이브러리 파일 내 각 함수 디버깅
- inspector 사용

<img width="516" alt="스크린샷 2023-02-07 오후 2 09 09" src="https://user-images.githubusercontent.com/34812887/217153826-096f5494-6488-42b0-81d8-29ae389feb35.png">

<p class="text-muted">inspector 사용 스크린샷</p>

## 문제 분석 결과

- `_relativeKeyboardHeight` 함수와 관련된 문제
- `_onLayout` 함수 내 `event.nativeEvent.layout` 값 관련 문제

# 결론

## 문제 상황 결론

- 네이티브에서 가져오는 레이아웃 너비 값 `event.nativeEvent.layout` 에 의한 문제
- `event.nativeEvent.layout` 값을 이해할 수 없음
- 네이티브에서 레이아웃 너비 값을 계산하는 수식까지 찾아보지 않았음
- 근본적인 문제를 해결하기 위해서는 관련 api 를 건드려야 함
- 그러나 네이티브를 연결하는 api를 수정하는 방법은 위험 (다른 라이브러리에 문제가 발생할 가능성)

따라서 `KeyboardAvoidingView.js` 내 `_relativeKeyboardHeight` 함수 수정을 통해 문제 해결 시도

## 문제 해결

`_relativeKeyboardHeight` 함수 수정

```js
import Dimensions from '../../Utilities/Dimensions' // <-- INSERT
...
async _relativeKeyboardHeight(
    keyboardFrame: KeyboardMetrics,
  ): Promise<number> {
    ...

    const deviceY = Dimensions.get('screen').height // <-- INSERT
    // Calculate the displacement needed for the view such that it
    // no longer overlaps with the keyboard
    return Math.max(frame.y + deviceY - keyboardY, 0); // <-- CHANGE frame.height to deviceY
    }
```
