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

#### ELB 생성

위에서 생성한 ELB Target Group을 통해 ELB를 생성해 보겠습니다.

![395304](https://user-images.githubusercontent.com/34812887/188371084-0bfd55b5-e9e4-456a-9e51-a4e5e961e212.png)

<br />

Application Load Balancer 생성을 선택합니다.

![939024](https://user-images.githubusercontent.com/34812887/188371265-7f55d89a-c5ca-4751-9d0f-04959ff5c87b.png)

<br />

Load balancer name 와 Mapping 4개 모두 선택, 보안 그룹 선택합니다. Listeners and routing 에서 80 포트에 대한 ELB 타겟 그룹을 위에서 생성한 타겟 그룹으로 지정합니다. 이후 하단의 Create Load Balancer를 클릭합니다.

![9308](https://user-images.githubusercontent.com/34812887/188397985-43720609-a083-4c8b-b82a-d89f49c0b846.png)

#### 로드 밸런서 포트 포워딩

HTTPS에 대한 포트 포워딩 처리를 해보겠습니다.

로드밸런서 -> 생성한 로드밸런서 선택 -> 리스너 -> 리스너 추가를 선택합니다.

![069069](https://user-images.githubusercontent.com/34812887/188403428-71ad95a1-f280-427b-b8dc-88448aa4f377.png)

#### Route53 도메인과 ELB 연결

Route53 -> 호스팅 영역 -> 생성한 도메인을 선택합니다.

![9595959](https://user-images.githubusercontent.com/34812887/188369441-b9fd439e-d227-4217-805d-22a4ab2b665d.png)

<br />
레코드 생성을 선택합니다.

![2202020](https://user-images.githubusercontent.com/34812887/188369982-41a5caf1-5279-4039-aa15-56c3a57d8bbb.png)

<br />

단순 라우팅을 선택합니다.

<div class="alert alert-info d-flex align-items-center" role="alert">
<i class="bi bi-info-circle-fill" style="margin-right: 10px"></i>
  <div>
   빠른 레코드 생성일 경우 마법사로 전환을 클릭해주세요.
  </div>
</div>

![309876](https://user-images.githubusercontent.com/34812887/188399754-9d8a9443-3ebd-4cfc-89b7-8ddade0472e3.png)

<br />

레코드 이름에 `*` 을 입력하고 레코드 유형은 `A - IPv4..` 사진과 같이 위에서 생성한 로드밸런서를 선택합니다. 세팅이 완료되면 단순 레코드 정의를 선택해주세요.

![37649403](https://user-images.githubusercontent.com/34812887/188400325-047e683a-b521-474f-8a81-db0ba5e74be2.png)

<br />
레코드 정의가 완료되면 레코드 생성을 선택합니다.

![8629634](https://user-images.githubusercontent.com/34812887/188401737-067ca96d-c6ec-429b-b216-664c1a81c2ae.png)

## 참고

#### 우분투 포트 포워딩
