---
title: 업로드 키, 인증서 재설정하기
description: 기존 업로드 키를 분실하거나 더이상 사용할 수 없는 경우 새로운 업로드 키를 생성, 반영해야 합니다.
keywords: ["안드로이드", "업로드", "재설정", "인증서"]
tags: ["android"]
---

기존 업로드 키를 분실하거나 더이상 사용할 수 없는 경우 새로운 업로드 키를 생성, 반영해야 합니다. 이 과정을 기록합니다.

## 생성

새로운 업로드 키와 업로드 인증서를 생성해야 합니다.

### 새 업로드 키

android studio에서 새 업로드 키를 생성합니다. 새 업로드 키를 생성하는 과정은 [이 글](http://localhost:3000/android/2024-01-28-build-release-android-app#%EC%97%85%EB%A1%9C%EB%93%9C-%ED%82%A4-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%A0%81%EC%9A%A9)을 참고해 주세요.

### 새 업로드 인증서

생성한 업로드 키를 통해 새 업로드 인증서를 생성합니다. 아래 명령을 통해 새 업로드 인증서를 생성할 수 있습니다. 보다 자세한 설명은 공식 문서를 참고하세요.

```bash
keytool -export -rfc -keystore 생성한업로드키파일이름 -alias 업로드키생성시지정한ALIAS명 -file 생성할업로드인증서이름.pem
```

## 업로드 키 재설정 요청

play console -> 설정 -> 앱 무결성 -> 앱 서명 항목에서 업로드 키 재설정 요청을 선택합니다. 앞에서 생성한 새 업로드 인증서를 업로드 합니다.

요청이 접수되면 아래와 같은 메일을 받을 수 있습니다. 바로 새 업로드 키가 서명된 번들을 올릴 수는 없습니다. 메일 내용과 같이 조금 기다려야 합니다.

![image11](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/6fdc7186-db9c-44f9-9308-b47d28bb82b2)

## 새 번들 업로드

새 업로드 키로 서명된 번들을 빌드한 후 이를 play console에 업로드하시면 됩니다.

## 참고 자료

- https://support.google.com/googleplay/android-developer/answer/9842756?visit_id=638130117358544175-1404347720&rd=1#create
