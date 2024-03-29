---
title: appstore connect 앱 스크린샷 업로드 오류를 Curl API를 통해 우회적으로 해결하기
description: appstore connect 앱 스크린샷 업로드 오류를 Curl API를 통해 우회적으로 해결하기
keywords: ["appstore connect", "스크린샷", "업로드", "오류", "curl", "API"]
tags: ["appstore connect"]
---

# appstore connect 앱 스크린샷 업로드 오류를 Curl API를 통해 우회적으로 해결하기

## 개요

앱 미리보기에 업로드 하려는데 업로드가 되지 않았습니다.

가끔 웹 클라이언트가 먹통이 되는데요, 이 문제를 Appstore connect API를 활용해 해결해보겠습니다.

![error](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/52e80283-b400-4091-9107-0a3fa66f9f12)

## API 키 생성

:::warning

생성한 API키는 한번만 다운로드 가능합니다.

:::

Appstore connect -> 사용자 및 엑세스 -> 키 에 들어가서 새로운 키를 생성합니다.

![api](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/321faf58-5ed9-4601-99a5-ee9defc80d16)

API키를 생성했으면 목록 우측에 API 키 다운로드 링크를 통해 API 키를 다운로드합니다.

## Ruby script 작성

터미널을 열어 다음과 같이 루비스크립트를 작성합니다. ISSUER_ID, iss, KEY_ID, kid 를 올바는 값으로 바꿔주세요.

AuthKey_XXXXXX.p8 는 다운로드한 API 키 파일 명으로 바꾸어 주세요.

:::info

- 만료일(exp)을 늘려 주는 게 좋습니다.
- jwt gem을 설치해야 하는 경우 root권한으로 jwt 를 설치해주세요. `sudo su gem install jwt`

:::

```bash
require "base64"
require "jwt"
ISSUER_ID = "XXXX-XX-XXXXXX-XX-XXXXXXXX"
KEY_ID = "XXXXXXXX"
private_key = OpenSSL::PKey.read(File.read("AuthKey_XXXXXX.p8"))
token = JWT.encode(
   {
    iss: "XXXX-XX-XXXXXX-XX-XXXXXXXX",
    exp: Time.now.to_i + 20 * 60,
    aud: "appstoreconnect-v1"
   },
   private_key,
   "ES256",
   header_fields={
     kid: "XXXXXXXXX" }
 )
puts token
```

저장한 루비스크립트를 실행시켜 주세요.

```bash
ruby 루비스크립트명.rb
02OrHS6BAuG4mbTv7gao4W2zvybBPrImvvVTOOs2OT6pHhVs6RSQO2YVrBiAduQb3SptRgAWaQO01PRwgmyGGHCgHage5CdMXCebzSjrSeq2SCruWpNeIDkpL6hZkXxF6Bn2Xg3RTtj2uu9T6osN0Iyq7eROqCwxy1gCBnq2xOodjSsDI4XDEDUxK91XR1kstFeJxZeQ
```

생성한 토큰을 APPSTORETOKEN명으로 export 해줍니다.

:::warning

export: not valid in this context: 에러가 발생할 경우 루비스크립트를 다시 실행하여 새 토큰값으로 다시 시도해 보세요. 토큰 내에 공백이 있는 경우 문제가 있을 수 있습니다.

:::

```bash
export APPSTORETOKEN=02OrHS6BAuG4mbTv7gao4W2zvybBPrImvvVTOOs2OT6pHhVs6RSQO2YVrBiAduQb3SptRgAWaQO01PRwgmyGGHCgHage5CdMXCebzSjrSeq2SCruWpNeIDkpL6hZkXxF6Bn2Xg3RTtj2uu9T6osN0Iyq7eROqCwxy1gCBnq2xOodjSsDI4XDEDUxK91XR1kstFeJxZeQ
```

## appStoreVersionLocalizations 값 얻기

사파리 또는 구글 크롬 개발자 콘솔을 띄워든 상태로 appstore connect -> 문제가 되는 앱 으로 이동합니다.

콘솔에서 500 RESPONSE ERROR 를 확인할 수 있습니다.

에러가 발생한 주소의 뒤 X부분 (...[appStoreVeresionLocalization]=`XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`) 복사해주세요.

`XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` 이 appStoreVersionLocalizations 값입니다.

![appstoreversion](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/523d96d5-90d8-4578-9c45-dadee191953c)

## 모든 스크린샷 제거

다시 터미널로 돌아와 아래와 같은 명령어를 실행해 줍니다. `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`은 appStoreVersionLocalizations 값입니다.

```bash
curl 'https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/appScreenshotSets'  --Header "Authorization: Bearer $APPSTORETOKEN"
```

아래와 같이 appScreenshotSets을 확인할 수 있습니다.

```json
{
  "data" : [ {
    "type" : "appScreenshotSets",
    "id" : 아이디,
    "attributes" : {
      "screenshotDisplayType" : "APP_IPAD_PRO_3GEN_129"
    },
    "relationships" : {
      "appScreenshots" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appScreenshotSets/아이디/relationships/appScreenshots",
          "related" : "https://api.appstoreconnect.apple.com/v1/appScreenshotSets/아이디/appScreenshots"
        }
        ... 이하생략
```

다시 appstore connect에 들어가서 다시 스크린샷을 업로드 해봅니다.

한번 해서 해결되지 않으면 여러번 시도해 보세요. 저는 3번째 시도에 성공했습니다.

## 참고 자료

[원글](https://stackoverflow.com/questions/73313352/app-store-screenshots-screenshot-uploads-in-progress-error-appscreenshotse)에서 조금 내용을 보강했습니다.

웹 클라이언트에서 안되면 API를 쓰면 되지 않냐? 라는 생각을 하다니.. 참 똑똑한 사람들이 많네요..

- https://developer.apple.com/documentation/appstoreconnectapi/create_an_app_screenshot_set
- https://developer.apple.com/forums/thread/712222
- https://stackoverflow.com/questions/73313352/app-store-screenshots-screenshot-uploads-in-progress-error-appscreenshotse
- https://developer.apple.com/documentation/appstoreconnectapi/delete_an_app_screenshot_set
