---
title: prediction 예측과 inference 추론의 차이
description: prediction 예측과 inference 추론의 차이
keywords: ["prediction", "inference", "예측", "추론"]
tags: ["ml"]
---

# prediction 예측과 inference 추론의 차이

## 개요

머신러닝을 공부하기 시작할 때 접하는 두 가지 개념이 있습니다.

예측과 추론인데요, 이 두 개념의 차이에 대해 명확히 이해해 보겠습니다.

## 예측과 추론

머신러닝에서의

- 예측은 '결과'를 중점으로 아는 것
- 추론은 원인과 결과의 '인과관계'를 중점으로 아는 것

으로 설명할 수 있습니다.

## 모델을 선택하는 기준

내가 머신러닝을 하는 목적이 예측인지 추론인지에 따라 적절한 모델을 선택할 수 있습니다.

![ima3323ge](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/d69c4600-a8a1-4d29-ad24-d6ba8f375755)

내가  원하는 것이 무엇인지에 따라 머신러닝 모델이 달라집니다.

내가 예측을 하고 싶을 때 이해 가능성(Interpretability)이 낮은 SVM, Boosting과 같은 모델을 사용하는 것이 유리하며 (굳이 이해 가능성이 높을 필요가 없기에 유연성이 높은 모델을 채택하는 것이 유리),
내가 추론을 하고 싶을 땐 이해 가능성이 높은 선형 회귀 모델을 선택하는 것이 목적에 더 부합합니다.

단, 예측과 추론을 흑백과 같은 이진 개념으로 생각해서는 안됩니다. 만약 예측과 추론이 둘 다 필요할 경우 이해가능성과 유연성이 비슷한 모델을 선택하는 것이 올바른 선택입니다.

## 참고 자료

- [Machine Learning: Inference & Prediction Difference](https://vitalflux.com/machine-learning-inference-prediction-difference/)
