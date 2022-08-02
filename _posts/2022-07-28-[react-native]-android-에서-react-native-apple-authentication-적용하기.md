---
layout: post
category: reactnative
---

## 개요

RN 플랫폼에서 firebase authentication를 구현하기란 쉽지 않습니다. 크로스 플랫폼의 한계일까요. 생각보다 많이 복잡합니다.

[React native firebase](https://rnfirebase.io/) 모듈 위에 [react-native-apple-authentication](https://github.com/invertase/react-native-apple-authentication)를 사용하여 안드로이드에서 애플 로그인을 구현해 보겠습니다.

## 해결

Firebase React Native 모듈 설치 & 적용 단계는 생략합니다!

### 설치

[react-native-apple-authentication](https://github.com/invertase/react-native-apple-authentication)를 설치합니다

```bash
npm i @invertase/react-native-apple-authentication
```

### XCode 적용

프로젝트명.xcodeproj 파일에 들어가 Signing & Capabilities 항목에 Sign in with Apple 를 추가합니다. 애플 어플리케이션이 모듈을 추가하는 일반적인 방식입니다.

- 참고 : [INITIAL_SETUP](https://github.com/invertase/react-native-apple-authentication/blob/main/docs/INITIAL_SETUP.md)

![s1](https://user-images.githubusercontent.com/34812887/182281993-d6ce7a51-f299-4c32-a12b-c69bbd9af814.png)

[Apple 개발자 콘솔](https://developer.apple.com/)에 접속하여 계정 로그인 후 Certificates, Identifiers & Profiles로 이동합니다.
