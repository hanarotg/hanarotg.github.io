---
layout: single
category: architecture
title: React-Native Pressable 컴포넌트로 재사용 가능한 버튼 구성하기
tags: react-native pressable resuable sa
toc: true
toc_sticky: true
---

Presssable 컴포넌트는 RN 앱 개발을 위해 반드시 알아야 하는 컴포넌트입니다. press 상호작용에 관한 기능을 제공하는 컴포넌트이기 때문에 적절히 커스텀해서 버튼 등의 기능을 대신할 수 있습니다. (RN 기본 컴포넌트 Button 컴포넌트는 너무 빈약합니다.)

# 재사용 가능한 버튼 구성

그러나 Pressable을 재사용 가능한 버튼으로 바로 사용하기에는 난감한 문제들이 있습니다. 버튼 뿐만 아니라 기타 press event에도 대응하기 위해(버튼 그 이상의 목적으로 광범위한 용도를 위해) 만들어졌기 때문입니다.

## 구성

`ButtonCustom.js` 예

{% raw %}

```jsx
import React from "react";
import { Pressable, Text } from "react-native";

const ButtonCustom = ({ onPress, text, type, line }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          // 모든 버튼이 공유하는 고정값
          padding: 14,
          borderRadius: 10,
          borderWidth: 1,
          alignItems: "center",
          // 받은 인자에 따라 변화하는 값
          borderColor: line ? line : color,
          backgroundColor: pressed ? color : "#ffffff",
        },
      ]}
    >
      <Text style={{ color: color }}>{text}</Text>
    </Pressable>
  );
};

export default ButtonCustom;
```

{% endraw %}

## 사용

사용 예)

{% raw %}

```jsx
<View style={{ paddingBottom: 10 }}>
  <ButtonCustom
    text="도서 상세 정보"
    type="primary"
    onPress={() => {
      Linking.openURL(book && book.url);
    }}
  />
</View>
```

{% endraw %}
