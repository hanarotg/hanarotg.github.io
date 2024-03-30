---
title: react-native-webview 안드로이드 플랫폼에서 웹뷰를 출력하지 않는 문제
description: react-native-webview 안드로이드 플랫폼에서 웹뷰를 출력하지 않는 문제
keywords: ["react-native", "react-native-webview"]
tags: ["react-native"]
---

# react-native-webview 안드로이드 플랫폼에서 웹뷰를 출력하지 않는 문제

## 개요

앱 내 웹뷰를 이식하려고 했습니다. 웹뷰를 사용하기 위해 react-native-webview 라이브러리를 사용하려 했으나.. 안드로이드 플랫폼에서 정상적으로 출력이 되지 않았습니다.

빈 공간만 출력되었습니다.

IOS 플랫폼에선 정상적으로 원하는 웹뷰가 출력되었습니다. 안드로이드 플랫폼에서만 발생하는 문제였습니다.

깃허브 issue 항목에 비슷한 문제에 대한 해결 방법을 찾을 수 있었습니다.

## 상위 컴포넌트 없이 리턴

View 나 ScrollView 같은 상위 컴포넌트가 존재할 때 리턴하는 경우 발생하는 문제였습니다.

### 잘못된 예

```jsx
return (
  <View>
    <WebView
      startInLoadingState={true}
      source={{ uri: "https://reactnative.dev/" }}
    />
  </View>
);
```

### 올바른 예

```jsx
return <WebView source={{ uri: "https://reactnative.dev/" }} />;
```

## WebSize 옵션 추가(선택)

webview의 width 와 height 를 명시하고 startInLoadingState 옵션을 설정합니다.

```jsx
<WebView
  style={{
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }}
  startInLoadingState={true}
  source={{ uri: "https://reactnative.dev/" }}
/>
```

## 참고

- https://github.com/react-native-webview/react-native-webview/issues/1426#issuecomment-1207378759
- https://github.com/react-native-webview/react-native-webview/issues/1426
