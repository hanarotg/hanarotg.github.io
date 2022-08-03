---
layout: post
category: reactnative
---

## 개요

RN 플랫폼을 통해 모바일 앱을 개발할 때 잊어버리기 쉬운 좋은 팁이 여럿 있습니다. 제 블로그를 찾아주신 다른 분들에게도 도움이 되었으면 좋겠습니다.

## 개발

### 글자가 튀어나와요

부모 컴포넌트 스타일 속성에 아래 코드를 추가해 주세요.

```javascript
flexShrink: 1;
```

참고

- [React native text going off my screen, refusing to wrap. What to do?
  ](https://stackoverflow.com/questions/36284453/react-native-text-going-off-my-screen-refusing-to-wrap-what-to-do)
- [[Text] Text doesn't wrap #1438](https://github.com/facebook/react-native/issues/1438)

### [React Navigation] 다른 스크린으로 이동 시 인자 전달

먼저 컴포넌트에 다음과 같이 `navigation` 인자를 받습니다.

```javascript
const OriginView = ({navigation}) => {
    return ...
}
```

다른 스크린으로 이동 이벤트 내에 다음과 같이 명시해줍니다.

```javascript
navigation.navigate("ScreenName", { name: "banana" });
```

이동한 스크린 컴포넌트에서 인자를 활용하려면 다음과 같이 작성합니다.

```javascript
const ScreenName = ({ route, navigation }) => {
  const { name } = route.params;
  console.log(name)// banana
  return ...
};
```

참고

- [React nagivation - API reference - navigate](https://reactnavigation.org/docs/navigation-prop#navigate)

### 정중앙에 자식 컴포넌트 위치시키기

`justifyContent`와 `alignItems`를 부모 컴포넌트 스타일 속성에 명시합니다.

```javascript
<View
  style={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text>horizental & vertical center</Text>
</View>
```

참고

- [reactnative layout-props](https://reactnative.dev/docs/layout-props)
- [Text vertical align in react native (using nativebase)](https://stackoverflow.com/questions/44337469/text-vertical-align-in-react-native-using-nativebase)

## 빌드

### [Android] 빌드 캐시 지우기

가끔 빌드 오류가 발생할 때 한번씩 해주면 됩니다.

```bash
rm -rf ~/.gradle/caches/
```

참고

- [How to clear gradle cache?](https://stackoverflow.com/questions/23025433/how-to-clear-gradle-cache)

### [IOS] 빌드 파일 지우기

```bash
Command + Shift + K
```

### [IOS] fatal error : YogaKit.modulemap' not found

![yogakit](https://user-images.githubusercontent.com/34812887/182532550-d9c9a40f-8d62-461f-9362-03a902888e84.png)
xcodeproj 파일이 아닌 xcworkspace 파일에 들어가 빌드를 다시 해봅니다.
xcodeproj 파일에서 RN 기반 어플리케이션을 빌드할 때 발생하는 문제입니다.
