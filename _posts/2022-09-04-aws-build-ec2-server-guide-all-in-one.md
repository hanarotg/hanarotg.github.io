---
layout: single
title: AWS EC2 서버 구축 올인원 가이드
category: devops
tags: EC2 ELB Route53 ACM AWS
toc: true
toc_sticky: true
---

정말 여러 번 했지만 매번 까먹는 것 같습니다. AWS 계정을 생성하고 EC2 인스턴스 생성, Route53 도메인 신청을 완료한 이후의 구축 과정입니다.

보다 세세한 과정들이 있지만 간략하게 표현하면 다음과 같습니다.

![1231245](https://user-images.githubusercontent.com/34812887/188363666-be491c86-f32a-4fcc-b9f5-90a5d65d331a.jpeg)

# 탄력적 IP (ElasticIP) 생성

생성한 EC2 인스턴스에 탄력적 IP를 생성하여 연결해보겠습니다. 탄력적 IP는 각 인스턴스에 1:1로 연결해야 합니다.

EC2 -> 네트워크 및 보안 -> 탄력적 IP -> 탄력적 IP 주소 할당을 선택합니다.

![123204](https://user-images.githubusercontent.com/34812887/188364296-32078818-de0b-40ae-89be-81798f6fc76d.png)

기본 설정을 건드리지 않고 할당을 선택합니다.

![2525](https://user-images.githubusercontent.com/34812887/188364553-2489de64-a4e6-42d1-98ea-77bb13d7c005.png)

할당이 가능한 탄력적 IP가 생성되었습니다. 작업 -> 탄력적 IP 주소 연결을 선택합니다.

![010101010](https://user-images.githubusercontent.com/34812887/188364781-7e4a1bff-fc33-445e-b9f0-db3df5623ed0.png)

생성한 EC2 인스턴스 및 EC2 인스턴스의 프라이빗 IP 주소를 선택하고 `연결` 을 선택합니다.

![22422](https://user-images.githubusercontent.com/34812887/188365136-729ec4b9-a55a-4098-b3e4-80ab276bac8e.png)

생성한 EC2 인스턴스와 탄력적 IP 할당을 완료하였습니다.

![IMG_998C1E18E37E-1](https://user-images.githubusercontent.com/34812887/188366305-d874b56f-3411-468b-8653-e54cc1e4c029.jpeg)

## ELB 타겟 그룹 만들기

이제 ELB 타겟 그룹을 만들어 보겠습니다. 저는 이미 만들어 둔 게 여러 개 있네요.

EC2 -> 로드 밸런싱 -> 대상 그룹 -> `Create Target Group`을 선택합니다.

![3333535](https://user-images.githubusercontent.com/34812887/188366025-2c4baeca-c05b-4479-afc6-1e96069960dd.png)

슬슬 어질어질하기 시작하죠? Target group name만 설정하고 나머지는 기본값으로 한 후 다음을 선택합니다.

![44453](https://user-images.githubusercontent.com/34812887/188366570-82feeefc-01de-4529-9fb4-0a7daf146efd.png)

EC2 인스턴스를 체크한 후 `Include as pending below` 를 선택합니다.

![11100099](https://user-images.githubusercontent.com/34812887/188367048-87bf948c-2401-4ad9-96e5-dab8a4bdc2f7.png)

pending 목록에 해당 인스턴스가 pending 상태로 추가된 것을 확인할 수 있습니다. `Create Target Group` 를 선택하여 타겟 그룹 생성을 완료합니다.

![949494949](https://user-images.githubusercontent.com/34812887/188367221-2afba096-16f7-4249-a397-c817c0ebf70f.png)

ELB 타겟 그룹을 정상적으로 생성하였습니다. 위의 단계를 통해 생성한 ELB 타겟 그룹이 요청을 받았을 때 EC2 인스턴스의 80번 포트로 포워딩하도록 설정하였습니다.

![IMG_9C745D8F40B0-1](https://user-images.githubusercontent.com/34812887/188367998-2db1734a-f90b-40e7-90e8-4ad1f09c3ea1.jpeg)

## ELB 생성

위에서 생성한 ELB Target Group을 통해 ELB를 생성해 보겠습니다.

![395304](https://user-images.githubusercontent.com/34812887/188371084-0bfd55b5-e9e4-456a-9e51-a4e5e961e212.png)

`Application Load Balancer 생성`을 선택합니다.

![939024](https://user-images.githubusercontent.com/34812887/188371265-7f55d89a-c5ca-4751-9d0f-04959ff5c87b.png)

Load balancer name 와 Mapping 4개 모두 체크, 보안 그룹 선택합니다. Listeners and routing 에서 80 포트에 대한 ELB 타겟 그룹을 위에서 생성한 타겟 그룹으로 지정합니다. 이후 하단의 Create Load Balancer를 클릭합니다.

![9308](https://user-images.githubusercontent.com/34812887/188397985-43720609-a083-4c8b-b82a-d89f49c0b846.png)

## Route53 도메인과 ELB 연결

Route53 -> 호스팅 영역 -> `생성한 도메인`을 선택합니다.

![9595959](https://user-images.githubusercontent.com/34812887/188369441-b9fd439e-d227-4217-805d-22a4ab2b665d.png)

<br />

`레코드 생성`을 선택합니다.

![2202020](https://user-images.githubusercontent.com/34812887/188369982-41a5caf1-5279-4039-aa15-56c3a57d8bbb.png)

`단순 라우팅`을 선택합니다.

빠른 레코드 생성일 경우 **마법사로 전환**을 클릭해주세요.
{: .notice--info}

![309876](https://user-images.githubusercontent.com/34812887/188399754-9d8a9443-3ebd-4cfc-89b7-8ddade0472e3.png)

레코드 이름에 아무것도 입력하지 않고 레코드 유형은 `A - IPv4..` 사진과 같이 위에서 생성한 로드밸런서를 선택합니다. 세팅이 완료되면 단순 레코드 정의를 선택해주세요.

![37649403](https://user-images.githubusercontent.com/34812887/188400325-047e683a-b521-474f-8a81-db0ba5e74be2.png)

레코드 정의가 완료되면 `레코드 생성`을 선택합니다.

![8629634](https://user-images.githubusercontent.com/34812887/188401737-067ca96d-c6ec-429b-b216-664c1a81c2ae.png)

# ACM으로 도메인에 대한 SSL 인증서 생성

ACM에서 `인증서 요청`을 선택합니다.

![847473930](https://user-images.githubusercontent.com/34812887/188447982-42853c6b-3f04-408e-bc78-16962353d9ff.png)

퍼블릭 인증서 요청을 선택하고 `다음`을 선택합니다.

![2927020230](https://user-images.githubusercontent.com/34812887/188448286-f4abe932-dddc-4037-b1b0-0cf00073d9ac.png)

완전히 정규화된 도메인 이름에 도메인을 입력한 후 `요청`을 선택합니다.

![57575748](https://user-images.githubusercontent.com/34812887/188448809-dab6e778-a97b-4b93-b39d-3ae5eba0ab21.png)

요청한 도메인에 대한 인증서가 검증 대기 중인 것을 확인할 수 있습니다. `인증서 ID` 링크를 선택합니다.

![75756489](https://user-images.githubusercontent.com/34812887/188449590-0c774961-ffca-4ed8-b51c-b60928972acb.png)

`Route53에서 레코드 생성`을 선택합니다.

![8568577](https://user-images.githubusercontent.com/34812887/188450702-2440ab98-6910-4177-9c25-11e934869e64.png)

`레코드 생성`을 선택합니다.

<b>레코드 생성에 오류가 발생하는 경우 Route53 콘솔로 들어가서 수동으로 CNAME을 생성하세요.</b><br />
레코드 생성 -> 단순 라우팅 생성 -> 레코드 이름(CNAME 이름), 레코드 유형(CNAME), 값/트래픽 라우팅 대상(이 호스팅 영역에 다른 레코드에 대한 별칭), 레코드 선택(CNAME 값) -> 단순 레코드 정의
{: .notice--warning}

![333324](https://user-images.githubusercontent.com/34812887/188450477-3fded54a-7a75-47d7-b38a-9b48eded43fa.png)

도메인 인증을 위한 CNAME 추가까지 완료했습니다. 발급됨 상태가 될 때까지 기다리도록 하겠습니다.

# 로드 밸런서 리스닝 추가

로드밸런서 -> 생성한 로드밸런서 선택 -> 리스너 -> `리스너 추가`를 선택합니다.

![069069](https://user-images.githubusercontent.com/34812887/188403428-71ad95a1-f280-427b-b8dc-88448aa4f377.png)

Protocol : HTTPS (443) 설정 후 default action을 foward to 로드밸런싱 타겟으로 지정해주세요. Secure listener settings에선 아무거나 선택해도 괜찮습니다. Default SSL/TLS certificate에 위에서 발급받은 인증서를 선택해 주세요.

![11020203](https://user-images.githubusercontent.com/34812887/188463482-a9ac033f-071a-4b0b-ae86-951850919fdd.png)

이제 80포트에 접속을 시도하면 443 포트로 리다이렉트하도록 설정해주겠습니다. HTTP : 80 규칙 -> 규칙 보기/편집을 선택합니다.

아래와 같이 편집 아이콘을 선택해주세요.

![0004932](https://user-images.githubusercontent.com/34812887/188465439-4ed6f046-e538-4b87-a558-56188ce96649.png)

아래와 같이 443포트로 리다이렉트 되도록 규칙을 편집 후 업데이트를 선택합니다.

![01029333](https://user-images.githubusercontent.com/34812887/188465842-2bdafbb1-6b0c-4117-83ee-5a716c740dd7.png)

이로써 모든 세팅이 완료되었습니다. Route53, ACM, ELB, 탄력적 IP를 통해 EC2 인스턴스에서 80 포트를 열었습니다.

80포트 어플리케이션을 구동하는 것을 추천하지 않습니다.<br />
EC2 인스턴스에서 ngix 등의 프록시 서버를 구축하는 것을 추천합니다.
{: .notice--info}

# 참고

## 우분투 서버 포트 포워딩

Node.js 서버 어플리케이션의 경우 80 포트 어플리케이션 구동을 할 수 없습니다. 따라서 어플리케이션을 다른 포트로 구동한 다음 우분투 서버에서 80포트 요청 시 서버 어플레케이션 포트로 포워딩 하도록 설정해 보겠습니다.

포트 포워딩 목록 조회

```bash
sudo iptables -t nat -L --line-numbers
```

80 포트 포워딩 추가

```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 포워딩받는포트
```

포트 포워딩 삭제

```bash
sudo iptables -t nat -D PREROUTING 포워딩테이블넘버
```

- [Ubuntu 포트포워딩(Portforwarding)으로 포트번호 없이 접근하기
  ](https://velog.io/@shawnhansh/Ubuntu-%ED%8F%AC%ED%8A%B8%ED%8F%AC%EC%9B%8C%EB%94%A9Portforwarding)
