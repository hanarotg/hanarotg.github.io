---
title: nightshade
description: nightshade 이해
keywords: ["nightshade"]
tags: ["nightshade"]
---

# NightShade

## 개요

이미지를 생성하는 Stable diffusion 기술이 나날이 발전

발전 과정에서 허가되지 않은 이미지들이 무단으로 학습에 활용되고 있음

### 정의

NightShade는 이미지에 픽셀 단위로 특정한 워터마크를 주입하는 기술

해당 기술을 통해 특정한 워터마크가 주입된 이미지를 독이 있는(poisoned) 이미지로 표현

시카고 대학 연구진이 23년 10월에 발표한 기술

NightShade가 적용된 이미지를 학습 데이터로 사용하는 경우 이미지 내 '독성'을 먹은 모델은 잘못된 학습을 하게 됨

NightShade를 원본 이미지에 적용하는 가이드를 배포하고 있음

### 예시

해당 논문에 게시된, 동일한 모델에 독성이 있는 이미지 학습 여부에 따른 결과물 차이

![diff](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/17e7d4ba-27b0-4304-82d6-0ecfdf219536)

더 많은 독성 이미지를 학습할 수록 더 낮은 성능의 모델이 만들어짐

## 한계

해당 기술은 모델의 학습을 방해하는 것이 목표이므로 원천적인 문제의 해결책(무단 이미지 학습에 대한)이 될 수는 없음

## 참고 자료

- https://nightshade.cs.uchicago.edu/whatis.html
- https://arxiv.org/abs/2310.13828
