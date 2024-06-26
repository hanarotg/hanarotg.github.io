---
title: 대각선에 위치한 좌표 체크하기
description: 대각선에 위치한 좌표 체크하기
keywords: ["대각선", "좌표"]
tags: ["대각선"]
---

# 대각선에 위치한 좌표 체크하기

## 개요

:::info

참고자료 문제의 풀이를 기반으로 대각선 좌표를 확인하는 방법을 설명합니다.

:::

nqueens와 같은 문제 풀이 시 대각선을 체크할 필요가 있습니다.

## 체크 방법

### 전제

`COL` 정수형 일차원 벡터는 i 번째 row에 놓인 퀀의 col 번호입니다. (없으면 0)

```cpp
vector <int> COL(15, 0);
```

### 솔루션

row 및 col 값이 각각 2, 1 이라고 합시다.

- i == 0 일때 `abs(1 - COL[0]) == 2 - 0` 이므로 COL[0]이 3일때 대각선에 위치한 좌표(`0,3`)가 있음을 확인할 수 있습니다.
- i == 1 일때 `abs(1 - COL[1]) == 2 - 1` 이므로 COL[1]이 0 또는 2일때 대각선에 위치한 좌표가 있음(`1,0` 또는 `1,2`)을 확인할 수 있습니다.

즉, 대각선에 위치한 좌표 존재 여부를 확인하기 위해서는

**기준 좌표의 행과 열 값에 동일한 i 값을 뺐을 때, 동일한 오차**면 기준 좌표에 대각선에 위치한 좌표가 존재함을 확인할 수 있습니다.

```cpp
// 처음 행부터 탐색중인 행(row) 전까지 순차적으로 탐색합니다.
// 탐색 과정에서 대각선에 위치한 좌표를 확인합니다.
for(int i=0; i<row; i++){
    /*
    0.0 0.1 0.2 0.3
    1.0 1.1 1.2 1.3
    2.0 2.1 2.2 2.3
    */
    if(abs(col - COL[i]) == row - i){
        return false;
    }
}
```

## 참고 자료

- https://www.acmicpc.net/problem/9663
