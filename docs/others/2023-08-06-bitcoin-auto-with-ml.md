---
title: 강화학습 비트코인 자동 매매 봇
description: 강화학습 비트코인 자동 매매 봇
keywords: ["bitcoin", "ml", "qlearning"]
tags: ["qlearning"]
---

# 강화학습 비트코인 자동 매매 봇

<img src="https://github.com/hanarotg/code-push-ready/assets/34812887/b8ad85ca-08d9-4c0e-9023-18b3f4d2384d" width="64px" />

23-1학기 컴퓨터공학특강 개인 프로젝트

## 프로젝트 개요

- 분류 : 인공지능(강화학습)
- 일시 : 2023.03 ~ 2023.06
- 스택 : **Python**, **Numpy**
- 주제 : 강화학습을 활용한 비트코인 자동매매 봇
- 역할 : 개인 프로젝트

## 프로젝트 소개

23-1학기 컴퓨터공학특강 수업에서 개인 프로젝트로 진행한 강화학습 활용 비트코인 자동 매매 봇입니다.

자동매매 봇을 구현하기 위해 인공지능을 활용한 시도는 많습니다. 허나 강화학습을 활용한 자동매매 봇 구현에 대한 내용을 찾아보기 어려웠습니다. 평소 강화학습에 대한 흥미가 있기에 강화학습을 활용하여 자동매매 봇을 개발, 성능 개선을 개인 프로젝트로 진행했습니다.

## 프로젝트 기여 및 배운 점

### 강화학습 Q-Learning 이해

- Numpy로 모델 직접 구현 (기타 프레임워크 미사용)

### 모델 성능 개선

- Learning Rate및 Gamma 값 조정
- Epsilon-greedy 정책 도입
- State 값 4개 추가
- 학습 데이터 양 기존 대비 25배 증가

![bit2](https://github.com/hanarotg/code-push-ready/assets/34812887/766e2baa-4b7c-41d2-9fa3-89534f3a8670)

▲ 모델 초기 성능

![bit3](https://github.com/hanarotg/code-push-ready/assets/34812887/28ca71f1-2f0d-4462-87eb-62bc692e1d9d)

▲ 성능 개선 후

### 실제 거래 및 Slack 봇 구현

- 업비트 API를 활용하여 실거래 진행
- Slack 봇으로 거래 결과 알림 구현

![bit5](https://github.com/hanarotg/code-push-ready/assets/34812887/0f44553f-03a8-4be3-b14a-f3e4abf1a839)

▲ 업비트 실거래 내역

![bit6](https://github.com/hanarotg/code-push-ready/assets/34812887/fbba415d-0582-4434-aa2b-bd81cc764fcb)

▲ Slack 알람 봇

## 프로젝트 성과

### 모의 거래 결과

- 실제 과거 데이터를 임의 선택한 모의 거래 평균 수익 63,360원 달성
- 그러나 항상 수익을 내는 것은 아니며, 손해를 보는 경우 또한 존재

![bit7](https://github.com/hanarotg/code-push-ready/assets/34812887/9a2c831c-7caf-486d-aac3-8af60bb90e7c)

![bit8](https://github.com/hanarotg/code-push-ready/assets/34812887/e24ca771-eddd-4ee4-9d6d-77e85354150b)
