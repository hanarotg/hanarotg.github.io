---
title: flutter Incorrect use of ParentDataWidget 에러
description: flutter Incorrect use of ParentDataWidget 에러
keywords: ["플러터", "flutter"]
tags: ["flutter"]
---

# flutter Incorrect use of ParentDataWidget 에러

## 에러 내용

```bash
======== Exception caught by widgets library =======================================================
The following assertion was thrown while applying parent data.:
Incorrect use of ParentDataWidget.

The ParentDataWidget Expanded(flex: 1) wants to apply ParentData of type FlexParentData to a RenderObject, which has been set up to accept ParentData of incompatible type ParentData.

Usually, this means that the Expanded widget has the wrong ancestor RenderObjectWidget. Typically, Expanded widgets are placed directly inside Flex widgets.
The offending Expanded is currently placed inside a ConstrainedBox widget.
```

## 해결

이 에러는 `Expanded`과 같이 가로 또는 세로 길이가 제한되지 않은 위젯을 **포함한 위젯**의 **길이**를 명시하지 않았을 때 발생할 수 있습니다.

저의 경우 `Culumn`안에 위젯의 크기를 명시하지 않아 해당 에러가 발생했습니다.

```dart
Column(
        children: [
            Container(
              // highlight-start
              height: 200,
              // highlight-end
              child: // Expanded 위젯을 포함한 위젯,
            ),
          Container(child: const Text("제목")),
        ],),
```

## 참고 자료

- https://stackoverflow.com/questions/63530292/flutter-error-with-expanded-although-already-wrapped-with-column
