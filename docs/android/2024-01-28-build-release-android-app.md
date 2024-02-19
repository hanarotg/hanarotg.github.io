---
title: 배포용 안드로이드 앱 번들 빌드하기
description: 안드로이드 스튜디오를 활용해서 배포용 안드로이드 앱 번들을 빌드해 보겠습니다.
keywords: ["안드로이드", "빌드", "배포", "release"]
tags: ["android"]
---

# 배포용 안드로이드 앱 번들 빌드하기

안드로이드 스튜디오를 활용해서 배포용 안드로이드 앱 번들을 빌드해 보겠습니다.

## 빌드 준비

### 버전 변경

`versionCode`가 같은 번들은 play console에 업로드할 수 없습니다. 처음으로 앱을 배포하는 상황이 아닌 경우 `build.gradle` 파일 내 `versionCode` 와 `versionName` 을 수정해주세요. 두 변수의 차이점과 기능에 대해선 [공식 문서](https://developer.android.com/studio/publish/versioning?hl=ko#versioningsettings)를 참고해주세요.

![image1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrUeRG%2Fbtr01TZI71v%2Fpdt6H7lSee5JXK01iOrka0%2Fimg.png)

## 빌드

### 생성 옵션 선택

새로운 번들에 서명을 해야 합니다. Build -> Generate Singed Bundle / APK 를 선택합니다. 기본 설정(Android App Bundle)을 선택 후 다음 단계를 진행해 주세요.

![image2](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/1f4dc8f2-a928-45aa-a267-0b88128da8d7)

### 업로드 키 생성 및 적용

업로드 키가 존재하는 경우 서명 키 비밀번호와 alias를 입력해주시고 서명키가 없는 경우 Create New..를 선택하여 서명 키를 생성합니다. 기타 기본 설정을 확인한 후에 다음 단계로 진행합니다.

:::warning

업로드 키는 반드시 **안전한 곳에, 잃어버리지 않아야** 합니다. (저처럼 잃어버리지 말고..)  
키를 잃어버리는 경우 play console 에서 새 업로드 인증서 적용을 요청해야 합니다.  
새 업로드 키 및 인증서 재설정에 관한 내용은 [블로그 글](https://hanarotg.tistory.com/63 "1")을 참고해 주세요.

:::

![image3](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/7ea82f3f-9ce5-4db1-997d-0d09ef99ab90)

### 번들 빌드 옵션 선택

release를 선택 후 Create 해주세요.

![image4](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/c3164cff-9fa4-4dd6-8bd7-bd89781fc5a7)

빌드에 시간이 조금 걸릴 수 있습니다. 생성된 빌드 파일은 **프로젝트 -> app -> release** 에서 확인하실 수 있습니다.
