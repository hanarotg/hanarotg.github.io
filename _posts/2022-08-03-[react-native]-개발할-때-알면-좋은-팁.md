---
layout: post
category: reactnative
---

## 개요

RN 플랫폼을 통해 모바일 앱을 개발할 때 잊어버리기 쉬운 좋은 팁이 여럿 있습니다. 한 포스트로 쓰기에는 자잘하지만 까먹을 때마다 보기 좋은 팁들을 모아봤습니다. 제 블로그를 찾아주신 다른 분들에게도 도움이 되었으면 좋겠습니다.

#### 글자가 튀어나와요

부모 컴포넌트 스타일 속성에 아래 코드를 추가해 주세요.

```javascript
flexShrink: 1;
```

- [React native text going off my screen, refusing to wrap. What to do?
  ](https://stackoverflow.com/questions/36284453/react-native-text-going-off-my-screen-refusing-to-wrap-what-to-do)
- [[Text] Text doesn't wrap #1438](https://github.com/facebook/react-native/issues/1438)

#### [React Navigation] 다른 스크린으로 이동 시 인자 전달

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

- [React nagivation - API reference - navigate](https://reactnavigation.org/docs/navigation-prop#navigate)

#### 정중앙에 자식 컴포넌트 위치시키기

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

- [reactnative layout-props](https://reactnative.dev/docs/layout-props)
- [Text vertical align in react native (using nativebase)](https://stackoverflow.com/questions/44337469/text-vertical-align-in-react-native-using-nativebase)

#### [Android] 빌드 캐시 지우기

생각보다 빌드 오류가 자주 발생합니다. 이때 한번씩 해주면 됩니다.

```bash
cd android
./gradlew clean
```

```bash
rm -rf ~/.gradle/caches/
```

- [How to clear gradle cache?](https://stackoverflow.com/questions/23025433/how-to-clear-gradle-cache)

#### [IOS] 빌드 파일 지우기

```bash
Command + Shift + K
```

#### [IOS] fatal error : YogaKit.modulemap' not found

![yogakit](https://user-images.githubusercontent.com/34812887/182532550-d9c9a40f-8d62-461f-9362-03a902888e84.png)
xcodeproj 파일이 아닌 xcworkspace 파일에 들어가 빌드를 다시 해봅니다.
xcodeproj 파일에서 RN 기반 어플리케이션을 빌드할 때 발생하는 문제입니다.

#### 앱 아이콘 만들기

Android 앱 아이콘을 생성할 땐 기본 아이콘 이름 ic_launcher / 라운드 아이콘 이름 ic_launcher_round으로 다운받아 둘 다 적용해주는 게 좋습니다.

- [IOS : App icon Generator](https://appicon.co/)
- [ANDROID : App icon Generator](<https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher>)
- [android studio - doc - XML로 적응형 아이콘 만들기](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive?hl=ko#creating_adaptive_icons_in_xml)

#### 배포 스크린샷 만들기

- [https://studio.app-mockup.com](https://studio.app-mockup.com)
