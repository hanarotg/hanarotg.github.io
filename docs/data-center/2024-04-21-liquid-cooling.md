---
title: Liquid Cooling (Direct to Chip, Rear Door, Immersions)
description: 액체 냉각 방식 세 가지 비교
keywords: ["Direct to Chip", "Rear Door", "Immersions"]
tags: ["Liquid Cooling"]
---

# Liquid Cooling (Direct to Chip, Rear Door, Immersions)

## 개요

대표적인 액체 냉각 방식 세 가지로, 인공지능 수요 폭증과 공랭 방식의 한계로 인해 주목받는 기술들

## Direct to Chip

냉각이 필요한 장치에 액체 주입 및 배출 호스가 있는 냉각판을 부착하여 냉각 하는 기술.

기존 칩에 냉각판을 추가로 설치하여 사용이 가능하다.

## Rear Door Heat Exchange

냉각 코일과 팬을 통해 캐비닛 내부 장치의 열을 해소하는 방식.

Direct to Chip가 달리 직접 장치를 냉각하는 것이 아니다. 기존 공랭 방식에 냉각 코일을 추가하여 냉각 효율을 올리는 방식. Direct to Chip보다는 냉각 성능이 낮다.

세 기술 중 현 공랭 방식에서 전환하기에 가장 현실적인 방안 (모든 칩에 냉각판을 붙이는 것보다. 캐비닛 단위로 코일 판을 설치하는 것이 당연히 현실적)

## Immersion Cooling

액체에 장치를 넣어 냉각하는 방식, 가장 냉각 성능이 좋다. 현재 기술적인 한계가 여럿 존재 sk엔무브가 관련 특수 용액 기술을 개발하고 있음

### 공랭 방식에서의 전환 어려움

기존 공랭 방식에서 전환하기 어려움. 처음 부터 다시 데이터 센터를 설계해야 한다. 또한 사용하는 서버, 스위치 장비 모두 특수 용액 사용에 문제가 없어야 한다.

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
