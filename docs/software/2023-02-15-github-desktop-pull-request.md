---
title: GitHub Desktop 오픈소스 수정, Pull Request 하기
description: GitHub Desktop 오픈소스 수정, Pull Request 하기
keywords: ["github", "desktop", "오픈소스", "Pull", "Request"]
tags: ["github"]
---

# GitHub Desktop 오픈소스 수정, Pull Request 하기

최근 React-Native의 버그를 찾아 코드를 수정하여 Pull Request하기로 하였습니다. Pull Request 하는 방법을 안내합니다.

## clone

:::info

이 글에서는 따로 브랜치를 생성하여 작업하지 않고 main 브랜치 소스코드를 수정하겠습니다.

:::

수정하고자 하는 오픈소스를 로컬에 클론 합니다. 본인의 레포지토리가 아닌 경우 자동으로 fork 됩니다.

![image2](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/e6445dd3-4681-455d-b209-7326e4c1c343)

클론이 완료되면 Continue 를 클릭합니다.

![imag3e](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/dc151bb9-f64f-4b3c-a664-518c36367c4c)

## push

코드 수정이 완료되면 저장 후 Github Desktop 에 변경 사항을 확인합니다.

변경 사항을 확인하고 커밋 메시지를 작성한 후 Commit to main 을 클릭합니다.

그 후 Push origin 을 클릭해주세요.

![image4](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/34fd9b60-c724-49cc-a712-c8743f93f74e)

## pull request

포크한 자신의 오픈소스 레포지토리에 들어갑니다.

Pull Request 항목으로 이동합니다.

![imag5e](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/15644cac-1b5f-4a9a-9d4e-96bf75887381)

New Pull Request 를 선택합니다.

![ima6ge](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/600933c4-09fa-4817-86df-0640c57183de)

원본 오픈소스와 충돌이 나지 않는 경우 Create Pull Request 를 선택합니다.

![im7age](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/2f2bae35-a2b1-4802-9077-dc3cc63f127a)

해당 오픈소스 가이드에 맞게 변경 사항을 작성하고 Create Pull Request 를 선택해줍니다.

![i8mage](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/26f0bab7-5dee-49d0-85a7-9fc563c1e430)

수정한 파일을 변경해야 하는 경우 Files changed 항목에 들어가 수정한 후 Review Changes 를 통해 해당 PR 에 새로운 커밋을 추가합니다.
