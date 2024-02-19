---
title: 안드로이드 프로젝트 gradle 스크립트에 대한 이해
description: 안드로이드 프로젝트 gradle 스크립트에 대한 이해
keywords: ["안드로이드", "gradle"]
tags: ["android", "gradle"]
---

# 안드로이드 프로젝트 gradle 스크립트에 대한 이해

## gradle

gradle은 Groovy 또는 Kotlin을 사용하여 다양한 플랫폼 개발의 자동화를 돕는 스크립트 도구입니다.

저는 네이티브 안드로이드 앱 개발과 React-Native 앱 개발을 하는 과정에서 gradle 스크립트를 활용하고 있습니다.

## android 프로젝트에서의 gradle

안드로이드 생태계에선 어플리케이션을 개발하기 위해 적극적으로 gradle을 활용합니다. 아래 스크린샷은 한 프로젝트에 일반적으로 포함되는 gradle 파일들입니다.

![gradleinand](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/45316054-27d7-4636-81d0-c1d735eb6398)

- settings.gradle
- build.gradle (프로젝트)
- build.gradle (각 모듈)
- gradle.properties
- local.properties
- gradle-wrapper.properties
- proguard-rules.pro (각 모듈)

### settings.gradle

- 프로젝트의 root 디렉토리에 위치하며 **프로젝트 단위**의 설정 파일
- 하나의 프로젝트에는 하나가 아닌 여러 개의 모듈이 있을 수 있음

아래와 같이 android, auto 와 같은 여러 개의 모듈이 한 프로젝트에 있는 경우 `dependencyResolutionManagement` 하단에 이를 명시해야 함

![settinggradle](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/074f6909-bee9-4b57-8ee5-1a03a7db09f6)

```gradle
...
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = "nowinandroid"
include(":app")
include(":app:android")
include(":app:auto")

include(":feature:home")
include(":feature:reviews")
include(":feature:players")

include(":data:books")
include(":data:reviews")
...
```

### build.gradle `Project`

- 프로젝트의 root 디렉토리에 위치하며 **프로젝트 단위**의 설정 파일
- 프로젝트의 모든 모듈에 공통적으로 사용되는 플러그인들을 명시
- 각 모듈 플러그인 명시에 대한 코드의 단순화 장점

```gradle
...
// Lists all plugins used throughout the project without applying them.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.jvm) apply false
    alias(libs.plugins.kotlin.serialization) apply false
    alias(libs.plugins.firebase.crashlytics) apply false
    alias(libs.plugins.firebase.perf) apply false
    alias(libs.plugins.gms) apply false
    alias(libs.plugins.hilt) apply false
    alias(libs.plugins.ksp) apply false
    alias(libs.plugins.secrets) apply false
}
```

### build.gradle `Module`

- **각 모듈**의 gradle 스크립트
- 해당 모듈에 필요한 의존성 항목 및 [플러그인](https://kotlinworld.com/323) 관리
- 안드로이드 프로젝트를 처음 생성할 때 존재하는 모듈은 :app 으로 하나

```gradle
...
plugins {
    id("nowinandroid.android.feature")
    id("nowinandroid.android.library.compose")
    id("nowinandroid.android.library.jacoco")
}

android {
    namespace = "com.google.samples.apps.nowinandroid.feature.search"
}

dependencies {
    implementation(project(":feature:bookmarks"))
    implementation(project(":feature:foryou"))
    implementation(project(":feature:interests"))
    implementation(libs.kotlinx.datetime)
}
...
```

아래는 `exampleModule` 모듈을 안드로이드 프로젝트에 추가한 모습의 구조, `exampleModule`의 build.gradle 이 안드로이드 프로젝트에 추가된 것을 확인할 수 있습니다.

![examplemodule](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/5dfcb3ca-ea32-4b10-b7da-34aa06f7cbd3)

### gradle.properties

gradle 스크립트 작업 옵션(데몬 힙 사이즈 등)

### local.properties

gradle 스크립트 작업 옵션(데몬 힙 사이즈 등)

### gradle-wrapper.properties

- gradle 스크립트가 특정 작업 환경에 제약받지 않도록 도와주는 파일
- 해당 프로젝트에 사용할 gradle 버전을 명시

### proguard-rules.pro `Module`

각 모듈의 축소, 난독화 설정을 담당하는 파일. [이 코드를 예제](https://gist.github.com/albinmathew/c4436f8371c9c41461ab)로 참고

## 참고 자료

- https://kotlinworld.com/323
- https://developer.android.com/studio/build/shrink-code?hl=ko
- https://github.com/android/nowinandroid
- https://developer.android.com/build
- https://developer.android.com/studio/build?hl=ko#kts
