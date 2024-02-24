---
title: 안드로이드 id tag name 차이
description: 안드로이드 android:id android:tag android:name 차이
keywords: ["안드로이드", "tag", "name", "id"]
tags: ["android"]
---

# 안드로이드 android:tag android:name android:id 차이

명확한 역할 구분보다는 효율적인 개발 구성을 위해 모두 제공하는 것 같다.

## id

고유 명칭으로 액티비티 메소드에서 활용

```xml
<Button
   android:id="@+id/my_button"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:text="@string/my_button_text"/>
```

```java
Button myButton = (Button) findViewById(R.id.my_button);
```

## tag

id를 보조하거나, 가변적인 객체 리스트에서 활용.

일반적으로는 id를 사용

## name

fragment 트랜젝션 및 교체 시 해당 인스턴스화할 Fragment의 고유 이름으로 사용

```xml
<!-- res/layout/example_activity.xml -->
<androidx.fragment.app.FragmentContainerView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/fragment_container_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:name="com.example.ExampleFragment" />
```

```java
// Replace whatever is in the fragment_container view with this fragment
transaction.replace(R.id.fragment_container, ExampleFragment.class, null);
```

그러나 이러한 이유로 반드시 name 속성을 써야 하는 것은 아니며 class 속성을 사용해도 무방

또는, string.xml 등의 리소스 집합 파일 내에서 각 항목의 이름을 지정할 때 사용

```xml
<string name="string_name">Text Resource Here</string>
```

## 참고 자료

- https://stackoverflow.com/questions/9757069/what-are-tag-and-id-on-layouts
- https://developer.android.com/guide/fragments/create?hl=en
- https://stackoverflow.com/questions/10162983/activity-layout-fragment-class-vs-androidname-attributes
