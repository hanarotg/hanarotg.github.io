---
title: python dictionary 사용 방법
description: python dictionary 사용 방법
keywords: ["python", "dictionary"]
tags: ["python", "dictionary"]
---

# python dictionary 사용 방법

## 개요

hashmap 을 구현할 수 있는 python dictionary 사용 방법을 서술합니다.

dictionary 는 key 와 value 한 쌍의 집합체입니다. 집합 원소 간 순서가 **보장되지 않습니다.** (순서가 없음)

## 선언

```python
hashMap = {}
# 또는 아래와 같이
hashMap = dict(apple = 10, banana = 6, grape = 7)
```

## 추가 및 변경

keyName의 value 를 업데이트합니다.

```python
hashMap['keyName'] = value
```

## 삭제

list 삭제와 동일한 방식입니다.

```python
del hashMap['keyName']
```

## 존재 여부

in, not in 구분을 통해 확인 여부를 체크할 수 있습니다.

```python
if 'keyName' in hashMap:
	# 존재하는 경우
if 'keyName' not in hashMap:
	# 존재하지 않는 경우
```

## 복사

```python
new_hashMap = hashMap.copy()
```
