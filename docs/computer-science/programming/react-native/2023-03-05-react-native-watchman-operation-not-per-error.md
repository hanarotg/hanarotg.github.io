---
title: React-Native Watchman Operation not permitted 접근 권한 버그
description: React-Native Watchman Operation not permitted 접근 권한 버그
keywords: ["react-native", "watchman"]
tags: ["react-native"]
---

# React-Native Watchman std::\_\_1::system_error: Operation not permitted 접근 권한 버그 해결하기

## 개요

:::info

이 글은 watchman 설치를 완료한 상태를 전제로 합니다.

:::

RN 앱을 개발할 때 필요한 도구인 watchman, 프로젝트 디렉토리 접근 권한이 부여된 상태임에도 실행 시 접근 권한이 없다고 에러를 출력하는 문제가 있습니다.

이 문제를 해결해보겠습니다.

```json
...
{
  watchmanResponse: {
    error: 'std::__1::system_error: open: /Users/taegyeonglee/Documents/GitHub/Checked: Operation not permitted',
    version: '2023.01.16.00'
  }
}
```

## 권한 삭제

설정 -> 개인정보 보호 및 보안 -> 파일 및 폴더 에서 watchman을 모두 삭제해 줍니다.

## shutdown

watchman을 종료합니다.

```bash
watchman shutdown-server
```

## 실행

아래 명령을 통해 watchman을 다시 실행합니다.

```bash
watchman
```

실행 시 권한 부여에 대한 팝업창이 팝업됩니다.

권한을 허용해 주세요. 이제 정상적으로 실행 가능합니다.
