---
title: strict weak ordering
description: strict weak ordering 이해
keywords: ["strict weak ordering", "c++", "sort"]
tags: ["strict weak ordering", "c++", "sort"]
---

## 문제 상황

C++ `sort` 정렬 함수에 비교 함수를 직접 작성하는 경우 `segment fault` 에러를 접할 수 있습니다.

작성한 비교 함수가 strict weak ordering를 만족하지 않아서 발생할 수 있습니다.

### strict weak ordering

strict weak ordering은 일련의 순서를 결정하는 weak ordering의 종류 중 하나입니다.

C++ `sort` 함수의 비교 함수는 아래 조건들을 만족해야 합니다.

- For all a, comp(a, a) == false.
- If comp(a, b) == true then comp(b, a) == false.
- if comp(a, b) == true and comp(b, c) == true then comp(a, c) == true.

#### For all a, comp(a, a) == false.

모든 자기 자신에 대한 비교는 `false` 를 반환해야 합니다.

#### If comp(a, b) == true then comp(b, a) == false.

만약 a b 비교 시 `true` 이면, b a 비교 시 `false` 여야 합니다.

#### if comp(a, b) == true and comp(b, c) == true then comp(a, c) == true.

a b 비교 시 `true`, b c 비교 시 `true` 이면, a c 비교 시 `true`여야 합니다.

### 문제 코드

아래 비교 함수는 `segment fault` 런타임 에러를 발생시킵니다.

```cpp
bool comp(pair<int, int> a, pair<int, int> b) {
    if(a.first <= b.first) {
        return true;
    }
    return false;
}
```

만족해야 할 조건들 중 **For all a, comp(a, a) == false**를 만족하지 않습니다. 만약 a = {1, 2} 일때, comp(a, a)는 `false`가 아닌 `true`를 반환합니다.

따라서 이를 수정해야 합니다.

수정한 코드는 아래와 같고, 정상적으로 처리됩니다.

```cpp
bool comp(pair<int, int> a, pair<int, int> b) {
    if(a.first <= b.first) {
        return true;
    }
    return false;
}
```

## 참고 자료

- https://m.blog.naver.com/luku756/222125315824
- https://en.wikipedia.org/wiki/Weak_ordering#Strict_weak_orderings
- https://en.cppreference.com/w/cpp/named_req/Compare
