---
title: Tensorflow windows 11 설치
description: Tensorflow windows 11 wsl2 활용 설치 가이드
keywords: [tensorflow, windows]
tags: [tensorflow, windows]
---

# Tensorflow windows 11 설치

## 사전 설치

### WSL2

tensorflow를 설치하는 곳은 단순한 windows가 아닌 windows 내부에 만들어질 가상머신입니다. 따라서, wsl2를 먼저 설정해 주어야 합니다.

파워셀을 켜서 아래 명령을 실행시켜 주세요. 기본적으로 wsl2가 설치됩니다.

```bash
wsl --install
```

설치 완료 후 컴퓨터를 재부팅해주세요.

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

tensorflow 호환 가능한 [파이썬 3.9-3.11 버전](https://www.tensorflow.org/install/pip?hl=ko#software_requirements) 확인

```bash
python3 --version
# Python 3.10.12
```

#### pip3 설치

```bash
sudo apt update && upgrade
sudo apt install python3-pip
```

```bash
pip3 --version
# pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)
```

### NVIDIA 드라이버

#### NVIDIA 드라이버 설치

https://www.nvidia.com/download/index.aspx?lang=en-us

#### NVIDIA CUDA toolkit 설치

https://developer.nvidia.com/cuda-toolkit-archive

#### NVIDIA cuDNN 설치

https://developer.nvidia.com/cudnn

## tensorflow 설치

### pip로 설치

<details>
  <summary>python setup.py egg_info did not run successfully 에러 해결</summary>
  <div>
    pip 업데이트

```bash
python3 -m pip install --upgrade pip
```

setuptools 업데이트

```bash
pip3 install --upgrade setuptools
```

    </div>

</details>

```bash
python3 -m pip install tensorflow[and-cuda]
```

### CUDA for WSL-ubuntu 설치

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
# highlight-start
|   0  NVIDIA GeForce RTX 3070 ...    On  | 00000000:01:00.0  On |                  N/A |
| N/A   46C    P8              14W /  95W |    594MiB /  8192MiB |      2%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+
# highlight-end

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

아래와 같이 텐서 객체를 반환, 출력하면 정상

```bash
python3 -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"

# tf.Tensor(-2911.9321, shape=(), dtype=float32)
```

#### GPU

<details>
  <summary>빈 객체 `[]`를 반환하는 경우</summary>
  <div>
    CUDA 및 cuDNN 설치 여부를 확인

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

  </div>
</details>

아래와 같이 텐서 객체를 반환, 출력하면 정상

```bash
python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"

# [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

### 학습 테스트

#### vscode로 wsl 접속

vscode extension인 REMOTE DEVELOPMENT 설치. vscode 상단 중앙에서 `> wsl` 입력하여 wsl 접속 시도

#### 파이썬 인터프리터 확인 및 선택

:::warning

매우 주의, wsl이 아니라 windows에 설치된 python 인터프리터가 아니라, wsl에 tensorflow 라이브러리를 설치한 파이썬 인터프리터를 선택해야 함.

:::

파이썬 인터프리터를 올바르게 선택했는 지 간접적으로 확인 가능한 파이썬 프로그램 실행

```python
import tensorflow as tf
from tensorflow.python.client import device_lib

print(device_lib.list_local_devices() )
```

정상적으로 선택했을 경우, GPU 관련 정보가 출력되어야 함

```bash
[name: "/device:CPU:0"
device_type: "CPU"
memory_limit: 268435456
locality {
}
incarnation: 364653326627053698
xla_global_id: -1
,
# highlight-start
name: "/device:GPU:0"
device_type: "GPU"
memory_limit: 5848956928
locality {
  bus_id: 1
  links {
  }
}
physical_device_desc: "device: 0, name: NVIDIA GeForce RTX 3070 Ti Laptop GPU, pci bus id: 0000:01:00.0, compute capability: 8.6"
...
# highlight-end
]
```

#### 예제 학습 코드

아래 예제 코드 실행

```python
import tensorflow as tf

cifar = tf.keras.datasets.cifar100
(x_train, y_train), (x_test, y_test) = cifar.load_data()
model = tf.keras.applications.ResNet50(
    include_top=True,
    weights=None,
    input_shape=(32, 32, 3),
    classes=100,)

loss_fn = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False)
model.compile(optimizer="adam", loss=loss_fn, metrics=["accuracy"])
model.fit(x_train, y_train, epochs=5, batch_size=64)

```

학습 하는 동안 작업 관리자에서 GPU 사용량 확인

![gpu](https://github.com/hanarotg/hanarotg.github.io/assets/34812887/f3031242-d5f1-46e8-ace7-4058f5037b4a)

## 참고 자료

- https://www.tensorflow.org/install/gpu?hl=ko
- https://www.python.org/downloads/release/python-3913/
- https://developer.nvidia.com/cudnn
- https://www.tensorflow.org/install/pip?hl=ko#windows-wsl2
- https://www.jbmpa.com/python_tip/1?page=1
