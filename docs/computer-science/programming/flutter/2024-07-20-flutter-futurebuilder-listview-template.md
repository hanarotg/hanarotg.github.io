---
title: flutter Futurebuilder Future ListView 템플릿
description: flutter Futurebuilder Future ListView 템플릿
keywords: ["플러터", "flutter", "FutureBuilder"]
tags: ["flutter", "FutureBuilder"]
---

# flutter Futurebuilder Future ListView 템플릿

## 개요

FutureBuilder Future 객체를 활용 코드 템플릿

## 코드

### Future 객체 생성

객체를 초기화 해줍니다. 객체 선언시 `final`를 선언하는 경우도 있습니다. 이 템플릿에서는 사용하지 않습니다.

```dart
Future<List> fruitListFuture = Future.value([]);
```

### 객체에 담을 데이터 Fetching 함수 작성

```dart
  // 유저의 리뷰 목록을 가져오는 함수
  Future<List> getFruit() async {
   // 여기에 각 상황에 적합한 fetch 함수 추가

    if (response['code'] == 200) {
      return response['data']['list'];
    }

    return [];
  }
```

### FutureBuilder 작성

```dart
return FutureBuilder(
                future: fruitListFuture,
                builder: (BuildContext context, AsyncSnapshot<List> snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.hasData) {
                    return ListView.builder(
                      itemCount: snapshot.data!.length,
                      itemBuilder: (context, index) {
                        final fruit = snapshot.data![index];
                        return Text(fruit['name'] ?? 'no fruit name available');
                      },
                    );
                  } else {
                    return const Center(child: Text("No data available"));
                  }
                });
```

## 선택 사항

### after WidgetBinding in initState

만약 Provider 전역 변수를 활용하고자 하는 경우 아래와 같이 작성합니다.

```dart
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      // 이 구간부터 Provider 전역 변수를 활용할 수 있습니다.
      setState(() {
        fruitListFuture = getFruit();
      });
    });
  }
```
