---
title: Chainlink
description: 블록체인 솔루션 기업 Chainlink
keywords: ["chainlink", "blockchain"]
tags: ["chainlink", "blockchain"]
---

# Chainlink

## 개요

다양한 블록체인 솔루션을 제공하는 기업

## 대표 솔루션

### CCIP

각자 다른 메인넷을 가진 가상화폐 네트워크를 연결시켜주는 기술

비트코인 - 이더리움

### VRF

Verifiable Random Functions

검증 가능한 무작위성을 가진 랜덤 평션

일반적으로 사용하는 랜덤함수는 **랜덤하지 않다**.

Chainlink VRF는 [논문에 소개된 VRF](https://eprint.iacr.org/2017/099.pdf)의 방식을 사용.

Chainlink VRF는 단순히 VRF를 사용하는 것이 아닌,

블록체인 네트워크의 특성을 활용해 (노드 일부가 훼손되더라도 검증 결과를 조작할 수 없음) 랜덤 평선의 무작위성을 **검증**하고 검증 결과를 반환하는 솔루션

### 사용 사례

#### 메이플스토리 유니버스

다양한 메이플스토리 서비스들을 하나로 묶는 메이플스토리 유니버스에서 Chainlink VRF를 도입하기로 결정

> As players traverse MapleStory Universe to win additional items, they want to know that the item experience is fair and unbiased. The integration of Chainlink VRF will be a key component of MapleStory Universe’s development by helping ensure a verifiably fair item generation experience.

도입 이유는 아이템 획득 가능성의 무작위성을 보장하기 위함...

## 참고 자료

- https://chain.link/cross-chain
- https://eprint.iacr.org/2017/099.pdf
- https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature-korean/
- https://medium.com/@MaplestoryU/maplestory-universe-chooses-chainlink-as-its-blockchain-services-provider-for-games-b2a334a4ee74
