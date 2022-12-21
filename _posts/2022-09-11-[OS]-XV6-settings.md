---
layout: single
title: EC2 인스턴스에서 XV6 개발 환경 도움말
category: CS
tags: OS xv6 EC2 ubuntu
toc: true
toc_sticky: true
---

실습용 운영체제 XV6를 AWS EC2 인스턴스에서 설치하고 윤용하는 방법을 안내합니다. 가상화 프로그램이 온전히 작동하지 않는 맥OS Silicon 기기에서 XV6를 실습하기 위한 대안입니다.

# 설치

EC2 Ubuntu 20.04 LTS 인스턴스를 사용하는 것을 전제합니다.

업데이트를 한번 해주세요.

```bash
sudo apt-get install
```

xv6 레포지토리를 클론해주세요.

```bash
sudo git clone https://github.com/mit-pdos/xv6-public.git
```

qemu 에뮬레이터를 설치해 주세요.

```bash
sudo apt install qemu-kvm
```

xv6 이미지를 생성합니다.

```bash
make
```

## qemu 터미널에서 구동

GUI 환경이 아닌 터미널에서 xv6 운용 시 `-nographic` 옵션이 있는 에뮬레이터를 실행해야 합니다. `qemu-nox`에 관한 설정 정보는 `Makefile`에서 확인하실 수 있습니다.

```bash
sudo make qemu-nox
```

## qemu 에뮬레이터 종료

<kbd>Control + a</kbd> 입력 후 <kbd>x</kbd>를 눌러줍니다.

- [Close qemu from a process in xv6](https://stackoverflow.com/questions/47210264/close-qemu-from-a-process-in-xv6)
- [xv6 general information](https://www.cs.virginia.edu/~cr4bd/4414/S2021/xv6.html)
