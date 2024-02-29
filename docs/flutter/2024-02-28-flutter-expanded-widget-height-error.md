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

이 에러는 `Expanded`의 부모 위젯을 `Colunm` `Row` `Flex`가 아닌 이외의 ConstraintBox 위젯으로 설정했을 경우 발생 가능

## 참고 자료

- https://stackoverflow.com/questions/54905388/incorrect-use-of-parent-data-widget-expanded-widgets-must-be-placed-inside-flex
- https://otrodevym.tistory.com/entry/Flutter-Incorrect-use-of-ParentDataWidget
