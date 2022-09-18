---
layout: post
title: React-Native 안드로이드 커스텀 폰트 출력 문제 IncludeFontPadding 해결하기
category: checked
---

커스텀 폰트 문제가 android에서 발생했습니다. 추가 마진(아니면 패딩)이 모든 커스텀 폰트에 적용되어 있습니다.

|                                                        IOS(아이폰 XR)                                                         |                                                       Android(엑스페리아 Z1c)                                                        |
| :---------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| ![IMG_620CF1E0E41C-1](https://user-images.githubusercontent.com/34812887/180598377-fa3313ae-fe9f-427a-ac0d-58ff5cbe59dc.jpeg) | ![Screenshot_20220723-180326](https://user-images.githubusercontent.com/34812887/180598410-d21eae2b-eabd-47a4-a930-fc99e6dcebdd.png) |

구글링하여 이 문제에 관한 많은 글을 찾을 수 있었습니다.

- [React Native Android Text Component extra padding](https://stackoverflow.com/questions/41525842/react-native-android-text-component-extra-padding)
- [android:includeFontPadding](https://developer.android.com/reference/android/widget/TextView#attr_android:includeFontPadding)
- [React Native - Text Style Props - IncludeFontPadding](https://reactnative.dev/docs/text-style-props#includefontpadding-android)

안드로이드 TextView 기본값이 참인 `includeFontPadding` 속성이 적용된 것이 문제였습니다.

`includeFontPadding` 속성이 거짓임을 명시해줍니다.

```
include-font-padding: false;
```

적용 예 1:

```javascript
import styled from "styled-components/native";

const BodyText = styled.Text`
  include-font-padding: false; // <-- 이부분 추가
  color: #363636;
  font-family: "NotoSansKR-Regular";
`;

export default BodyText;
```

다시 테스트한 안드로이드 기기에서 이제 정상적으로 커스텀 폰트가 적용됨을 확인할 수 있습니다.

|                                                       Android(엑스페리아 Z1c)                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------: |
| ![Screenshot_20220723-184321](https://user-images.githubusercontent.com/34812887/180600073-4ff66299-7fd1-43b0-a651-7c4e914f29e5.png) |
