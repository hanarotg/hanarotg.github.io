---
title: React Native 개발할 때 알면 좋은 팁
description: React Native 개발할 때 알면 좋은 팁
keywords: ["react-native"]
tags: ["react-native"]
---

# React-Native 개발할 때 알면 좋은 팁

## 개요

RN 플랫폼을 통해 모바일 앱을 개발할 때 잊어버리기 쉬운 좋은 팁이 여럿 있습니다.

한 포스트로 쓰기에는 사소하지만 까먹을 때마다 보기 좋은 팁들을 모아봤습니다.

제 블로그를 찾아주신 다른 분들에게도 도움이 되었으면 좋겠습니다.

## 일반적인 팁

### 서드파티 라이브러리 사용을 최대한 지양하세요.

그 중 제대로 관리되는 라이브러리는 소수입니다. 나중에 의존성 지옥에 갇히게 됩니다.

가벼운 라이브러리는 컴포넌트로 스스로 구현하는 것이 좋습니다.

하나라도 의존성에서 벗어나게 하세요. 지금 제공되는 기본 컴포넌트로도 충분합니다.

### Button 컴포넌트 사용을 지양하세요.

Button컴포넌트는 기능이 정말 빈약합니다.

### 모든 텍스트나 뷰 색상을 지정해 주세요.

IOS 텍스트 컬러 기본 값과 Android 텍스트 컬러 기본 값이 다릅니다. 컬러 코드로 색상을 지정해 주세요.

크로스 플랫폼의 가장 큰 장점이 하나의 코드로 모든 기기에 똑같이 보이게 할 수 있기 때문 아닌가요?

## 글자가 튀어나와요

부모 컴포넌트 스타일 속성에 아래 코드를 추가해 주세요.

```jsx
flexShrink: 1;
```

## React-Navigation 다른 스크린으로 이동 시 인자 전달

먼저 컴포넌트에 다음과 같이 navigation 인자를 받습니다.

```jsx
const OriginView = ({navigation}) => {
    return ...
}
```

다른 스크린으로 이동 이벤트 내에 다음과 같이 명시해줍니다.

```jsx
navigation.navigate("ScreenName", { name: "banana" });
```

이동한 스크린 컴포넌트에서 인자를 활용하려면 다음과 같이 작성합니다.

```jsx
const ScreenName = ({ route, navigation }) => {
  const { name } = route.params;
  console.log(name)// banana
  return ...
};
```

## 정중앙에 자식 컴포넌트 위치시키기

justifyContent와 alignItems를 부모 컴포넌트 스타일 속성에 명시합니다.

```jsx
<View
  style={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text>horizental & vertical center</Text>
</View>
```

## 빌드 시 :app:installDebug 단계에서 진행되지 않는 경우

adb 서버를 재시작합니다.

```jsx
adb kill-server
adb start-server
```

## 빌드 캐시 지우기

일시적인 빌드 오류가 꽤 자주 발생합니다. 이때 한번씩 해주면 됩니다.

```jsx
cd android
./gradlew clean
```

```jsx
rm -rf ~/.gradle/caches/
```

## Execution failed for task ':app:mergeDexDebug'

빌드 시 발생할 수 있는 오류입니다. ./gradlew assembleRelease를 통해 빌드할 때 발생했습니다.

android/app/build.gradle파일을 열어 다음과 같이 두 줄을 추가해줍니다.

```jsx
  android {
        defaultConfig {
            ...
            multiDexEnabled true
            ...
        }
        ...
    }

    dependencies {
      implementation 'com.android.support:multidex:1.0.3'
    }
```

## 애플리케이션 버전 정보 설정

play store에 새로운 버전을 출시하기 위해선 ./gradlew bundleRelease 전에 android > app > build.gradle 에서 버전 코드를 수정해야 합니다.

```jsx
android {
    ...
    defaultConfig {
        ...
        versionCode 2
        versionName "1.1"
    }

}
```

## 앱 엑세스 계정 등록하기

google play console 접속 > 정책 > 앱 콘텐츠 > 앱 엑세스 권한 (관리)

![googleplay](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/2a481a6f-8cfb-4788-8a3a-3b2c15825d75)

## 빌드 파일 지우기

```bash
Command + Shift + K
```

## fatal error : YogaKit.modulemap' not found

![yogakit](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/c416c811-442f-435b-99ec-9ed1757c657b)

xcodeproj 파일이 아닌 xcworkspace 파일에 들어가 빌드를 다시 해봅니다. xcodeproj 파일에서 RN 기반 어플리케이션을 빌드할 때 발생하는 문제입니다.

## 빌드 시 PhaseScriptExecution 에러

```bash
The following build commands failed:
    PhaseScriptExecution [CP-User]\ Generate\ Specs /Users/taegyeonglee/Library/Developer/Xcode/DerivedData/Checked-dweldbcwquxwlsknliekndlc/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build/Script-34C70EFSED90A5EIL023AEB404F232A.sh (in target 'FBReactNativeSpec' from project 'Pods')
(1 failure)
```

arm64 Mac 개발 환경에서 발생할 수 있는 문제인데 nvm가 기타 다른 모듈과 다른 아키텍처용으로 설치되어 있는 경우 발생할 수 있습니다.

아래 명령을 통해 nvm을 제거해 주세요. (nvm을 사용하지 않는 경우 해당)

```bash
brew uninstall nvm
```

## inspector 사용

`control` + `command` + `z` 후 show inspector 선택

사용 시 시물레이터 내 가상 키보드가 비활성화 되는 점 참고해주세요.

## 앱 아이콘 만들기

Android 앱 아이콘을 생성할 땐 기본 아이콘 이름 ic_launcher / 라운드 아이콘 이름 ic_launcher_round으로 다운받아 둘 다 적용해주는 게 좋습니다.

- https://appicon.co/
- https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher
- https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive?hl=ko#creating_adaptive_icons_in_xml

## 배포 스크린샷 만들기

- https://studio.app-mockup.com/

## 목업 제작 사이트

- https://mockuphone.com/

## 버전 업그레이드 도우미

방치한 프로젝트를 업데이트하려 할 때 정말 많은 것들을 수정해야 할 수도 있습니다.

- https://react-native-community.github.io/upgrade-helper/

## 참고 자료

- https://stackoverflow.com/questions/36284453/react-native-text-going-off-my-screen-refusing-to-wrap-what-to-do
- https://github.com/facebook/react-native/issues/1438
- https://reactnavigation.org/docs/navigation-prop#navigate
- https://reactnative.dev/docs/layout-props
- https://stackoverflow.com/questions/44337469/text-vertical-align-in-react-native-using-nativebase
- https://stackoverflow.com/questions/46933612/react-native-project-stuck-on-appinstalldebug
- https://stackoverflow.com/questions/23025433/how-to-clear-gradle-cache
- https://paulaner80.tistory.com/entry/Execution-failed-for-task-appmergeDexDebug
- https://stackoverflow.com/a/69573717/10815889
