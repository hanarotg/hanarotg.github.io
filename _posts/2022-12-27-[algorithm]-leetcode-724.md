---
layout: single
category: algorithm
title: leetcode 724 Find Pivot Index
tags: leetcode python pivot
toc: true
toc_sticky: true
---

find the leftmost pivot index given nums

- [https://leetcode.com/problems/find-pivot-index](https://leetcode.com/problems/find-pivot-index)

# Problem

## Intuitution

- pivot, used as sorting algorithim
- meaning of leftmost pivot index
- use python function like `sum` and slicing list

## Aproach

compare sum of left side and right side of nums from left to right

## Solution

```python
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:

        for index, value in enumerate(nums):
            if sum(nums[:index+1]) == sum(nums[index:]):
                return index

        return -1
```
