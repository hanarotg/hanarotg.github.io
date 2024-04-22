---
title: CXL 메모리
description: CXL 메모리
keywords: ["cxl"]
tags: ["cxl"]
---

# CXL (Compute Express Link) 메모리

## 요약

- 인공지능 학습 및 활용에는
  - 대규모 데이터 센터 필요
  - 활용 가능한 램이 많을 수록 유리
- 그러나 현재 널리 쓰이는 방식(DDR, CPU와 램을 같은 메인보드에 연결)은 한계
- 따라서 이론상 램을 무한대로 공유, 확장 가능한 CXL 메모리 기술 부상
- 기존 방식보다는 속도가 느릴 수는 있으나 확장성을 고려했을 때, 인공지능 서비스 운용에 매우 유리한 구조

## 발전

24년 2월 기준 최근 3.0 표준 규격 발표

다수의 CPU가 모든 메모리에 접근가능하게 되므로 (일반적으로 모델은 램에 올라간다.) 인공지능 서비스 운용에 매우 유리

스위치, 풀링을 통해 확장중. 계속 발전하고 있음

- CXL 1.0
- CXL 2.0
- CXL 3.0

## 관련사

- 오픈엣지테크놀로지 (CXL 컨트롤로 IP)
- 엑시콘 (CXL 1.0 램 검사 장비 제조)

## 참고 자료

- https://computeexpresslink.org/
- https://www.synopsys.com/designware-ip/technical-bulletin/compute-express-link-standard-2019q3.html
- https://news.samsungsemiconductor.com/kr/ai-%EC%8B%9C%EB%8C%80%EB%A5%BC-%EC%9D%B4%EB%81%8C-%EC%B0%A8%EC%84%B8%EB%8C%80-d%EB%9E%A8-cxl-%EB%A9%94%EB%AA%A8%EB%A6%AC%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83/
- https://www.sedaily.com/NewsView/29YMFR9TU3
