---
title: react-native-google-singin 앱 심사에 통과하기 위한 앱 서명 인증서(SHA-1) 키 적용하기
description: react-native-google-singin 앱 심사에 통과하기 위한 앱 서명 인증서(SHA-1) 키 적용하기
keywords: ["react-native", "react-native-google-singin", "sha-1"]
tags: ["react-native"]
---

# react-native-google-singin 앱 심사에 통과하기 위한 앱 서명 인증서(SHA-1) 키 적용하기

## 개요

debug 빌드에서 잘 기능하는 구글 소셜 로그인이 동작하지 않아 플레이 스토어 심사에서 승인받지 못했습니다.

찾아보니 앱 서명 인증서 SHA-1 키를 파이어베이스 콘솔에 추가해야 한다고 합니다.

(디버그 환경에서는 상관이 없으니) 귀찮다고 추가 안했던 기억이 나네요...

![ban](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/83ab6d9a-d1a9-43d9-a1b0-9aa475b52009)

## SHA-1 키 복사

구글 플레이 콘솔 -> 앱 선택 -> 설정 -> 앱 무결성 -> 앱 서명에서 앱 서명 인증서(SHA-1) 지문을 복사합니다.

![copy](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/7a664153-5fd9-497b-a766-ab518908bc92)

## 파이어베이스 콘솔 적용

파이어베이스 콘솔 -> 프로젝트 선택 -> 프로젝트 설정 -> 디지털 지문 추가를 클릭합니다.

![firebase](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/c357ee5e-eb22-4271-adbd-52b6a282e5fd)

복사한 SHA-1 키를 붙여넣은 후 저장합니다.

![paste](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/20bff013-6081-4636-9768-8952e6aff1cd)

## (선택) Release 빌드 SHA-1키 콘솔에 적용하기

구글 로그인이 Release 빌드에서도 정상적으로 기능하도록 Release SHA-1 키를 적용해보겠습니다.

터미널을 통해 프로젝트 > android 디렉토리에서 다음 명령을 실행합니다.

```bash
./gradlew signingReport
```

Task :app:signingReport에서 Variant: release 항목을 찾습니다.

Variant: release의 SHA-1 키를 복사합니다.

![paste2](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/d08644a8-c802-474d-8efc-4cb3980a57e9)

이후 같은 방법으로 파이어 베이스 콘솔에 SHA-1 키를 추가합니다.

파이어베이스 콘솔 저장을 완료되면 배포 빌드를 다시 진행 후 테스트 해보세요.

## 참고 자료

- https://github.com/react-native-google-signin/google-signin/blob/master/docs/android-guide.md
- https://developers.google.com/android/guides/client-auth
