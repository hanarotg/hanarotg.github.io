---
title: Liquid Cooling (Direct to Chip, Rear Door, Immersion)
description: 액체 냉각 방식 세 가지 비교
keywords: ["Direct to Chip", "Rear Door", "Immersion"]
tags: ["Liquid Cooling"]
---

# Liquid Cooling (Direct to Chip, Rear Door, Immersion)

## 개요

대표적인 액체 냉각 방식 세 가지

- Direct to Chip
- Rear Door
- Immersion

인공지능 수요 폭증 -> 그래픽 카드 등 장치의 냉각 기술에 따라 인공지능 학습 성능 좌우 -> 현재 공랭 방식엔 명확한 한계 존재 -> 액체 냉각 기술 주목

## Direct to Chip

![dtc](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/4c8b466d-879b-44c9-8807-dfefd9f067f4)

냉각이 필요한 장치에 액체 주입 및 배출 호스가 있는 냉각판을 부착

- 기존 칩에 냉각판을 추가로 설치하여 사용

## Rear Door Heat Exchange

![drhe](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/6b9fbbbf-6b97-449e-8d51-52d878212a44)

냉각 코일과 팬을 통해 캐비닛 내부 장치의 열을 해소

- 직접 장치를 냉각하는 것이 아님
- 기존 공랭 방식에 냉각 코일을 추가하여 냉각 효율을 올리는 방식 -> Direct to Chip 보다는 냉각 성능이 낮다.
- 세 기술 중 현 공랭 방식에서 전환하기에 가장 현실적인 방안 (모든 칩에 냉각판을 붙이는 것보다. 캐비닛 단위로 냉각 코일 판을 설치하는 것이 당연히 합리적)

## Immersion Cooling

![lc](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/32c3d6fc-21e7-47ab-a010-a85b6c93fda2)

액체에 장치를 넣어 냉각하는 방식

- 가장 냉각 성능이 좋다.
- 현재 기술적인 한계가 여럿 존재
- sk엔무브가 관련 특수 용액 기술을 개발하고 있음

### 공랭 방식에서의 전환 어려움

- 처음부터 다시 데이터 센터를 설계해야 한다. (특수 용액이 지나가는 호스 관 설계 등등 )
- 또한 사용하는 서버, 스위치 장비 모두 특수 용액 사용에 문제가 없어야 한다.

### 유지 보수의 어려움

장치가 고장나면 잠수복 입고 수리해야 한다.

### 특수 용액 유독성

현재 수준에서 사용 가능한 특수 용액은 유독성이 있음

## 정리

- 냉각 성능 : Immersion > Direct to Chip > Rear Door
- 현실적인 기술 : Direct To Chip, Rear Door

## 참고 자료

- [에퀴닉스, 기업 AI 워크로드 지원 위한 액체냉각기술 구축 가속화 및 간소화...다이렉트-투-칩 액체 냉각 지원 < 기업 < FOCUS < 기사본문 - 인공지능신문 (aitimes.kr)](https://www.aitimes.kr/news/articleView.html?idxno=29681)
- [후면 도어 열교환기의 설치에 대한 계획 - IBM Documentation](https://www.ibm.com/docs/ko/power9?topic=planning-installation-rear-door-heat-exchangers)
- [Rear-Door Heat Exchanger for High-density Data Center  - AKCP](https://www.akcp.com/articles/rear-door-heat-exchanger-for-high-density-data-center/)
