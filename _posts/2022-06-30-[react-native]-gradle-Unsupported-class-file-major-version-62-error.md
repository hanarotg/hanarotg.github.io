---
layout: post
category: checked
---

## 개요

IOS 빌드에 성공한 프로젝트를 안드로이드 빌드하였을 떄 에러가 출력되며 빌드에 실패했습니다. 이는 gradle이 지원하지 않는 jdk 버전을 사용하여 발생하는 문제입니다.

```bash
FAILURE: Build failed with an exception.

* Where:
Settings file '/Users/taegyeonglee/Documents/GitHub/Checked/android/settings.gradle'

* What went wrong:
Could not compile settings file '/Users/taegyeonglee/Documents/GitHub/Checked/android/settings.gradle'.
> startup failed:
  General error during conversion: Unsupported class file major version 62
...
```

## 문제 탐색

[gradle 공식 문서](https://docs.gradle.org/current/userguide/compatibility.html)에서 gradle이 지원하는 java 버전을 확인합니다.

![gradle-version](https://user-images.githubusercontent.com/34812887/176604060-3238e504-ed95-4053-910c-dc346dff0c43.png)

각 자바 버전을 지원하는 gradle 버전을 확인할 수 있습니다. java18은 아직 지원되지 않네요.

제 gralde 버전과 java 버전을 확인해보겠습니다.

#### gradle

gradle 버전을 확인하기 위해선 `프로젝트/android/gradle/wrapper/gradle-wrapper.properties` 내 `distributionUrl` 항목을 확인합니다.

```gradle
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-7.2-all.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

제 gradle 버전이 7.2임을 확인할 수 있습니다.

#### java

터미널에 `java --version` 을 입력해 로컬 환경에 설치, 적용된 자바 버전을 확인합니다.

```bash
(base) taegyeonglee@Taegyeongui-MacBookAir Checked % java --version
java 18.0.1.1 2022-04-22
Java(TM) SE Runtime Environment (build 18.0.1.1+2-6)
Java HotSpot(TM) 64-Bit Server VM (build 18.0.1.1+2-6, mixed mode, sharing)
```

java18의 [클래스 파일 버전이 62](https://javaalmanac.io/bytecode/versions/)임을 고려했을 때 해당 오류는 java18과 gradle 의 호환문제임을 유추할 수 있습니다.

제 로컬 환경 gradle이 지원하지 않는 java18이 설치되어 있음을 확인했습니다. 현재 제 gradle 버전이 7.2이므로 이에 맞는 가장 최신(latest) java버전은 java16이군요.

java18을 삭제하고 java16 이전 LTS 버전인 java11을 재설치 하여 문제를 해결해 보겠습니다.

> java16으로 재설치를 해보았으나 호환성 문제로 발생하는 빌드 오류가 발생했습니다. 따라서 java16이 아닌 LTS 버전인 java11로 설치합니다.

- 참고 : [Oracle Java SE Support Roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)

## 해결

1. java11을 [공식 다운로드 페이지](https://www.oracle.com/kr/java/technologies/javase/jdk11-archive-downloads.html)에서 다운로드 하여 설치합니다.

2. `/usr/libexec/java_home -V` 명령어를 통해 java11이 정상적으로 로컬에 설치되었는지 확인합니다.

   ```bash
   (base) taegyeonglee@Taegyeongui-MacBookAir Checked % /usr/libexec/java_home -V
   Matching Java Virtual Machines (3):
       18.0.1.1 (arm64) "Oracle Corporation" - "Java SE 18.0.1.1" /Library/Java/JavaVirtualMachines/jdk-18.0.1.1.jdk/Contents/Home
         11.0.15 (x86_64) "Oracle Corporation" - "Java SE 11.0.15" /Library/Java/JavaVirtualMachines/jdk-11.0.15.jdk/Contents/Home
       11.0.11 (x86_64) "AdoptOpenJDK" - "AdoptOpenJDK 11" /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
   /Library/Java/JavaVirtualMachines/jdk-18.0.1.1.jdk/Contents/Home
   ```

3. java18을 제거합니다.

   ```bash
   cd /Library/Java/JavaVirtualMachines
   ```

   ```bash
   (base) taegyeonglee@Taegyeongui-MacBookAir JavaVirtualMachines % ls
   adoptopenjdk-11.jdk	jdk-11.0.15.jdk	jdk-18.0.1.1.jdk
   ```

   ```bash
   sudo rm -rf jdk-18.0.1.1.jdk
   ```

4. `java --version` 을 통해 로컬 자바 버전이 갱신되었는지 확인합니다.

   ```bash
   (base) taegyeonglee@Taegyeongui-MacBookAir JavaVirtualMachines % java --version
   java 11.0.15 2022-04-19 LTS
   Java(TM) SE Runtime Environment 18.9 (build 11.0.15+8-LTS-149)
   Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.15+8-LTS-149, mixed mode)
   ```

5. 해당 프로젝트를 안드로이드 스튜디오로 열어 file > project structure > project > project SDK를 11으로 변경 후 적용합니다.

   ![](https://user-images.githubusercontent.com/34812887/176656137-f2e22c92-d58a-4f5a-a489-a63b1fd321cc.png)

6. 빌드 성공
   ![build](https://user-images.githubusercontent.com/34812887/176655972-f12db6c5-c6c7-4f97-a340-e634d079ffa2.png)
   해당 오류가 해결되었음을 확인할 수 있습니다.
