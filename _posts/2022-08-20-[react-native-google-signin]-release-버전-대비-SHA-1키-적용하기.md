---
layout: post
category: checked
---

debug 빌드에서 잘 기능하는 구글 소셜 로그인이 release 빌드에서 제대로 동작하지 않았습니다. 찾아보니 release 빌드용 SHA-1 키를 파이어베이스 콘솔에 추가해야 한다고 합니다. 예전에 귀찮다고 추가 안했던 기억이 나네요...

![111](https://user-images.githubusercontent.com/34812887/185731407-e4f3a853-97c7-48d6-9163-5add12bdb980.png)

## 해결

#### SHA-1 키 확인

터미널을 통해 프로젝트 > android 디렉토리에서 다음 명령을 실행합니다.

```bash
./gradlew signingReport
```

<br />
Task :app:signingReport에서 Variant: release 항목을 찾습니다.
Variant: release의 SHA-1 키를 복사합니다.

![222](https://user-images.githubusercontent.com/34812887/185732191-8cd9d484-2691-4f18-b0cb-311138f50a80.png)

#### 파이어베이스 콘솔에 적용

파이어베이스 콘솔 -> 프로젝트 선택 -> 프로젝트 설정 -> 디지털 지문 추가를 클릭합니다.

![34225](https://user-images.githubusercontent.com/34812887/185732610-1da67f6e-4baf-4bda-86cf-ed67dbb56abe.png)

<br />

복사한 SHA-1 키를 붙여넣은 후 저장합니다.

![223245](https://user-images.githubusercontent.com/34812887/185732801-9b7ed7a4-5a6c-4608-b91c-0e7e3458edfc.png)

<br />

저장이 완료되면 배포 빌드를 다시 진행 후 테스트 해보세요.

```bash
npx react-native run-android --variant=release
```

참고

- [react-native-google-signin/google-signin - Android Guide](https://github.com/react-native-google-signin/google-signin/blob/master/docs/android-guide.md)
- [Google play service - Authenticating Your Client](https://developers.google.com/android/guides/client-auth)
