---
layout: post
title: EC2 인스턴스에서 XV6 개발 환경 세팅하는 방법, 에러 해결
category: os
---

학부 운영체제 수강을 위해 XV6를 사용하게 되었습니다. 맥 M1에서 원할히 돌아가지 않아 AWS EC2 Ubuntu 인스턴스를 생성하여 관리하는 것을 추천드립니다.

##### qemu 터미널에서 구동

GUI 환경이 아닌 터미널에서 xv6 운용 시 `-nographic` 옵션이 설정된 에뮬레이터를 실행해야 합니다. `qemu-nox`에 관한 설정 정보는 `Makefile`에서 확인하실 수 있습니다.

```bash
sudo make qemu-nox
```

##### qemu 에뮬레이터 종료

<kbd>Control + a</kbd> 입력 후 <kbd>x</kbd>를 눌러줍니다.

- [Close qemu from a process in xv6](https://stackoverflow.com/questions/47210264/close-qemu-from-a-process-in-xv6)
- [xv6 general information](https://www.cs.virginia.edu/~cr4bd/4414/S2021/xv6.html)
