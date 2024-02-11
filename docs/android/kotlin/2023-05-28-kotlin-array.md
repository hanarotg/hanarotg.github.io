---
title: kotlin Array
description: 코틀린 Array
keywords: ["코틀린", "array"]
tags: ["kotlin"]
---

코틀린의 Array 자료형을 간단하게 알아보겠습니다.

## 생성

### arrayOf()

자료형을 명시하지 않는 경우(Any), 자료형 구분없이 다양한 타입을 원소로 갖는 배열을 생성할 수 있습니다.

```kotlin
val arrTmp = arrayOf<Any>(1, 2.200304, 3, "WTF", 5)

// 1 2.200304 3 WTF 5
```

### arrayOfNulls()

원하는 갯수의, null로 모두 이루어진 배열을 생성합니다.

```kotlin
val arrTmp = arrayOfNulls<String>(5);

// null null null null null
```

### Array()

배열을 생성할 때 가장 자주 사용하는 방법입니다. 파이썬처럼 내부 조건문을 활용해서 다양한 배열을 생성할 수 있습니다.

```kotlin
val arrTmp = Array<Int>(5) { i -> if (i%2 == 0) 0 else i};

// 0 1 0 3 0
```

## 접근 및 수정

코틀린에서는 접근 함수 get() 과 수정 함수 set()을 제공합니다.

```kotlin
var arrTmp = Array<Int>(5) { i -> i};
arrTmp.forEach { print(it) }

var arrTmpGet1: Int = arrTmp.get(1)
print("\n" + arrTmpGet1 + "\n")

var arrTmpSet1 = arrTmp.set(1, 6)
arrTmp.forEach { print(it) }
print("\n" + arrTmpSet1)

/*
01234
1
06234
kotlin.Unit
*/
```

여기서 눈여겨 볼만한 점은 arrTmpSet1 은 `Kotlin.Unit`을 반환한다는 점인데, 이에 대한 보다 자세한 설명은 [여기](https://medium.com/@lunay0ung/kotlin-unit%EA%B3%BC-nothing-e3ff9143fd65)를 참고하세요.
