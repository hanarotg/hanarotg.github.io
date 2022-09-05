---
layout: post
title: AWS EC2 서버 구축 올인원 가이드 (EC2, ELB, Route53, 포트포워딩까지)
category: spellteam
---

정말 여러 번 했지만 매번 까먹는 것 같습니다.

<div class="alert alert-warning d-flex align-items-center" role="alert">
  <i class="bi bi-exclamation-triangle-fill" style="margin-right: 10px"></i>
  <div>
   이 글은 AWS 계정을 생성하고 EC2 인스턴스 생성, Route53 도메인 신청을 완료한 이후의 단계를 알려줍니다. 
  </div>
</div>

## 개요

보다 세세한 과정들이 있지만 간략하게 표현하면 다음과 같습니다.

![1231245](https://user-images.githubusercontent.com/34812887/188363666-be491c86-f32a-4fcc-b9f5-90a5d65d331a.jpeg)

#### 탄력적 IP (ElasticIP) 생성

생성한 EC2 인스턴스에 탄력적 IP를 생성하여 연결해보겠습니다. 탄력적 IP는 각 인스턴스에 1:1로 연결해야 합니다.

EC2 -> 네트워크 및 보안 -> 탄력적 IP -> 탄력적 IP 주소 할당을 선택합니다.

![123204](https://user-images.githubusercontent.com/34812887/188364296-32078818-de0b-40ae-89be-81798f6fc76d.png)

<br />
기본 설정을 건드리지 않고 할당을 선택합니다.

![2525](https://user-images.githubusercontent.com/34812887/188364553-2489de64-a4e6-42d1-98ea-77bb13d7c005.png)

<br />
할당이 가능한 탄력적 IP가 생성되었습니다. 작업 -> 탄력적 IP 주소 연결을 선택합니다.

![010101010](https://user-images.githubusercontent.com/34812887/188364781-7e4a1bff-fc33-445e-b9f0-db3df5623ed0.png)

<br />
생성한 EC2 인스턴스 및 EC2 인스턴스의 프라이빗 IP 주소를 선택하고 연결을 선택합니다.

![22422](https://user-images.githubusercontent.com/34812887/188365136-729ec4b9-a55a-4098-b3e4-80ab276bac8e.png)

생성한 EC2 인스턴스와 탄력적 IP 할당을 완료하였습니다.

![IMG_998C1E18E37E-1](https://user-images.githubusercontent.com/34812887/188366305-d874b56f-3411-468b-8653-e54cc1e4c029.jpeg)

#### ELB 타겟 그룹 만들기

이제 ELB 타겟 그룹을 만들어 보겠습니다. 저는 이미 만들어 둔 게 여러 개 있네요.

EC2 -> 로드 밸런싱 -> 대상 그룹 -> Create Target Group을 선택합니다.

![3333535](https://user-images.githubusercontent.com/34812887/188366025-2c4baeca-c05b-4479-afc6-1e96069960dd.png)

<br />
슬슬 어질어질하기 시작하죠? Target group name만 설정하고 나머지는 기본값으로 한 후 다음을 선택합니다.

![44453](https://user-images.githubusercontent.com/34812887/188366570-82feeefc-01de-4529-9fb4-0a7daf146efd.png)

<br />
EC2 인스턴스를 체크한 후 Include as pending below를 선택합니다.

![11100099](https://user-images.githubusercontent.com/34812887/188367048-87bf948c-2401-4ad9-96e5-dab8a4bdc2f7.png)

<br />
pending 목록에 해당 인스턴스가 pending 상태로 추가된 것을 확인할 수 있습니다. Create Target Group를 선택하여 타겟 그룹 생성을 완료합니다.

![949494949](https://user-images.githubusercontent.com/34812887/188367221-2afba096-16f7-4249-a397-c817c0ebf70f.png)

<br />
ELB 타겟 그룹을 정상적으로 생성하였습니다. 위의 단계를 통해 생성한 ELB 타겟 그룹이 요청을 받았을 때 EC2 인스턴스의 80번 포트로 포워딩하도록 설정하였습니다.

![IMG_9C745D8F40B0-1](https://user-images.githubusercontent.com/34812887/188367998-2db1734a-f90b-40e7-90e8-4ad1f09c3ea1.jpeg)

#### Route53 도메인과 ELB 연결
