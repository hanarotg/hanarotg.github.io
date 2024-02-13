---
title: Tensorflow windows 11 설치
description: Tensorflow windows 11 wsl2 활용 설치 가이드
keywords: [tensorflow, windows]
tags: [tensorflow, windows]
---

## 사전 설치

### WSL2

tensorflow를 설치하는 곳은 단순한 windows가 아닌 windows 내부에 만들어질 가상머신입니다. 따라서, wsl2를 먼저 설정해 주어야 합니다.

파워셀을 켜서 아래 명령을 실행시켜 주세요. 기본적으로 wsl2가 설치됩니다.

```bash
wsl --install
```

설치 완료 후 재부팅해주세요.

wsl 프로그램을 통해 바로 터미널로 가상 환경 개발이 가능합니다.

:::tip

cmd 에서 아래 명령을 통해 wsl 실행 가능

```bash
wsl.exe
```

:::

![wsl](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/6e8bcd32-0c57-488f-bfbf-3703f608ec0b)

### 파이썬

#### 파이썬 설치 확인

:::info

tensorflow 호환 가능한 [파이썬 3.9-3.11 버전](https://www.tensorflow.org/install/pip?hl=ko#software_requirements) 설치

:::

```bash
python3 --version
# Python 3.10.12
```

#### pip3 설치

없으면 설치해 주세요.

```bash
sudo apt update && upgrade
sudo apt install python3-pip
```

```bash
pip3 --version
# pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)
```

### NVIDIA 드라이버

꽤 오래 걸립니다.

#### NVIDIA 드라이버 설치

https://www.nvidia.com/download/index.aspx?lang=en-us

#### NVIDIA CUDA toolkit 설치

https://developer.nvidia.com/cuda-toolkit-archive

![cuda](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/1581ee76-db06-4184-b07e-61b3cb9ece15)

#### NVIDIA cuDNN 설치

https://developer.nvidia.com/cudnn

## tensorflow 설치

### pip로 설치

:::info python setup.py egg_info did not run successfully. 에러 대응

pip 업데이트

```bash
python3 -m pip install --upgrade pip
```

setuptools 업데이트

```bash
pip3 install --upgrade setuptools
```

:::

```bash
python3 -m pip install tensorflow[and-cuda]
```

### CUDA for WSL-ubuntu 설치

#### 설치

wsl2에 필요한 CUDA를 추가로 설치. 아래 링크를 따라 설치 진행

https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=deb_local

#### CUDA 설치 여부 확인

아래 명령을 통해 그래픽카드가 정상적으로 목록에 출력되는 지 확인

```bash
nvidia-smi
```

```bash
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 545.23.07              Driver Version: 546.12       CUDA Version: 12.3     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA GeForce RTX 3070 ...    On  | 00000000:01:00.0  On |                  N/A |
| N/A   46C    P8              14W /  95W |    594MiB /  8192MiB |      2%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+

+---------------------------------------------------------------------------------------+
| Processes:                                                                            |
|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |
|        ID   ID                                                             Usage      |
|=======================================================================================|
|  No running processes found                                                           |
+---------------------------------------------------------------------------------------+
```

### 설치 여부 확인

#### CPU

```bash
python3 -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
```

아래와 같이 텐서 객체를 반환, 출력하면 정상

```bash
tf.Tensor(-2911.9321, shape=(), dtype=float32)
```

#### GPU

:::info

아래 명령의 결과로 빈 객체를 반환하는 경우 CUDA 및 cuDNN 설치 여부를 확인

CUDA

```bash
nvcc -V
```

```bash
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2023 NVIDIA Corporation
Built on Wed_Nov_22_10:30:42_Pacific_Standard_Time_2023
# highlight-start
Cuda compilation tools, release 12.3, V12.3.107
# highlight-end
Build cuda_12.3.r12.3/compiler.33567101_0
```

cuDNN

https://beelinekim.tistory.com/65 참고, cudnn_version.h 파일이 없는 경우 cuDNN이 설치되지 않은 것으로 cuDNN 설치

::::

```bash
python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

아래와 같이 텐서 객체를 반환, 출력하면 정상

```bash
[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

## 참고 자료

- https://www.tensorflow.org/install/gpu?hl=ko
- https://www.python.org/downloads/release/python-3913/
- https://developer.nvidia.com/cudnn
- https://www.tensorflow.org/install/pip?hl=ko#windows-wsl2
- https://www.jbmpa.com/python_tip/1?page=1
