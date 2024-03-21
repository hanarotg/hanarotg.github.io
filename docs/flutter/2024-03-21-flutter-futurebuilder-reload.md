---
title: flutter Futurebuilder Future reload
description: flutter Futurebuilder Future 객체 리로드 시 상태 반영하기
keywords: ["플러터", "flutter", "FutureBuilder"]
tags: ["flutter", "FutureBuilder"]
---

# flutter Futurebuilder Future 객체 리로드 시 상태 반영하기

## 개요

FutureBuilder 를 통해 Future 객체의 상태에 따라 다른 위젯을 출력할 수 있습니다.

첫 Future 객체가 성공적으로 불러온 후에 다시 Future 객체 정보를 불러들이는 경우 (새로고침 또는 불러올 정보가 바뀔 때)

새 Future 객체의 데이터를 가져오고 있는 중에 다시 로딩중임을 출력할 필요가 있습니다.

관련 속성이 당연히 있으리라 생각했지만,

**없습니다.**

## 솔루션

### setState 활용

`setState` 를 사용하여 Future 객체에 null을 저장하도록 합니다.

FutureBuilder 에서 제공하는 `snapshot.hasData` 속성은 null이 아닐 때 `true` 를 반환합니다.

따라서 새로운 데이터를 로딩하는 과정에서 처음과 동일한 로딩 화면을 출력하기 위해서는

임의로 null 을 저장해야 합니다.

```dart

Future? _dataListFuture;

/// 새로운 데이터를 볼러오는 함수 내부

setState(() {
    _dataListFuture = null;
    _dataListFuture = getNewDataList();
})

/// FutureBuilder 위젯 일부
child : FutureBuilder<String>(
        future: _dataListFuture,
        builder: (context,  snapshot) {
          children;
          if (snapshot.hasData) {
            /// Future 객체가 null이 아닐 경우
          } else if (snapshot.hasError) {
            /// 에러가 발생하는 경우, null 여부와 다릅니다.
          } else {
           /// 로딩 중일떄, Future 객체가 null 일 경우 이 조건을 탑니다.
          }
        })
```

### StreamBuilder 활용

자세한 내용은 [플러터 공식 문서](https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html)를 참고하세요.

## 참고 자료

- https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html
- https://github.com/flutter/flutter/issues/62019
- https://www.greycastle.se/reloading-future-with-flutter-futurebuilder/
- https://stackoverflow.com/questions/53170330/reload-data-when-using-futurebuilder
