---
title: Tensorflow windows 11 설치 가이드
description: Tensorflow windows 11 설치 가이드
keywords: [tensorflow, windows]
tags: [tensorflow, windows]
---

## 사전 설치

### WSL2 설치

tensorflow를 설치하는 곳은 단순한 windows가 아닌 windows 내부에 만들어질 가상머신입니다. 따라서, wsl2를 먼저 설정해 주어야 합니다.

### 파이썬

#### 파이썬 설치

:::info

tensorflow 호환 가능한 [파이썬 3.9-3.11 버전](https://www.tensorflow.org/install/pip?hl=ko#software_requirements) 설치

:::

[링크](https://www.python.org/downloads/release/python-3913/)를 통해 파이썬 3.9.13 버전 windows installer 설치

#### 파이썬 설치 확인

```bash
python --version
Python 3.9.13
```

#### pip 설치 여부 확인

:::note

pip는 운영체제 파이썬 기본 설치 패키지. 만약, python 3.9.13만 설치되어 있다면 pip 및 pip3 명령 모두 동일한 python 3.9.13에 대한 패키지를 관리

:::

```bash
pip --version
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
python -m pip install --upgrade pip
```

setuptools 업데이트

```bash
pip install --upgrade setuptools
```

:::

```bash
python -m pip install tensorflow[and-cuda]
```

### 설치 여부 확인

#### CPU 설정

```bash
python -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
```

아래와 같이 텐서 객체를 반환, 출력하면 정상

```bash
tf.Tensor(-2911.9321, shape=(), dtype=float32)
```

#### GPU 설정

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
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

아래와 같이 텐서 객체를 반환, 출력하면 정상

## 참고 자료

- https://www.tensorflow.org/install/gpu?hl=ko
- https://www.python.org/downloads/release/python-3913/
- https://developer.nvidia.com/cudnn
- https://www.tensorflow.org/install/pip?hl=ko#windows-wsl2
- https://www.jbmpa.com/python_tip/1?page=1
