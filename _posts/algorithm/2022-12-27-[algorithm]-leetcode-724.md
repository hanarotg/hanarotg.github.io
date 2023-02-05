---
layout: single
category: algorithm
title: leetcode 724 Find Pivot Index
tags: leetcode python3 algorithm
toc: true
toc_sticky: true
---

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

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
