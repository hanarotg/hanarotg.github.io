---
title: kotlin nullability
description: 코틀린 nullability
keywords: ["코틀린", "nullability"]
tags: ["kotlin"]
---

해당 변수가 Null 임을 확인하기 위해 다른 언어는 조건문 등을 통해 null exception을 잡아주어야 합니다. 간단한 소프트웨어 개발에는 크게 문제가 되지 않지만 규모가 커지면서 예외처리를 잡아주기 위한 코드는 배가 됩니다. 코드의 가독성과 효율이 낮아집니다.

이러한 문제를 코틀린에서 심플하게 해결할 수 있습니다.

## nullable 변수 선언

코틀린에선, 일반적인 변수 선언 후 변수에 `null`을 저장할 수 없습니다.

```kotlin
fun main() {
    val name: String = null
}

// 에러 : Null can not be a value of a non-null type String
```

그러나 ? 연산자를 변수 선언 시 같이 작성하는 경우 null 또한 저장이 가능합니다.

```kotlin
fun main() {
    val name: String? = null
}
```

## nullsafe 연산자

코틀린에서는 변수의 nullability를 감안하여 nullsafe한 연산자를 여럿 제공합니다.

### ?. 연산자

```
A ?. B
```

A가 `null`일 때 `null`을 반환하고
A가 `null`이 아닐 때, B를 반환합니다.

### ?: 연산자 (Elvis operator)

```
A ?: B
```

A ?: B 은 A가 `null`일때, B를 반환합니다.

![elvis](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/d054b294-2517-44e5-bc43-57bf83ad6d96)

엘비스 헤어 스타일과 비슷하다고하여 엘비스 연산자라고 부릅니다.

- null 반환이 아닌 다른 형식의 반환을 원하는 경우 ?. 보다 용이
- 조건문 여러 줄을 작성하여 null을 처리하는 것보다 훨씬 간결하게 작성 가능한 이점
- 이를 통해 에러 처리에 활용할 수도 있음

### !! 연산자

```
A !!
```

코틀린의 세계에선 모든 자료형엔 하위 두 가지 형태가 존재, 하나는 Not Nullable과 Nullable한 자료형입니다.

그러나 Nullable한 자료형을 Not Nullable한 자료형처럼 사용해야 할 때가 있습니다. 예를 들어, 써드파티 라이브러리 사용 시 라이브러리에 Nullable한 자료형을 내 프로그램에서 Not Nullable하게 작성해야 할 경우

만일 null이 되는 경우가 발생하면 Exception이 발생하므로 그 목적에 맞게 신중히 사용해야 합니다.

## 참고 자료

- https://kotlinlang.org/docs/null-safety.html#safe-casts
- https://developer.android.com/codelabs/kotlin-bootcamp-basics#3
- https://www.baeldung.com/kotlin/not-null-assertion
