---
layout: single
category: algorithm
title: leetcode 167 Two Sum II - Input Array Is Sorted
tags: leetcode python3
toc: true
toc_sticky: true
---

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

- [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

# Problem

## Intuitution

- use 2 pointers
- keywords : sorted in non-decreasing order

## Wrong Aproach

- TIME LIMIT : just use index and a pivot like loop for convenience
- leck of programming skill with python3
- use of additional `if` to be satisfied with each cases
- use 1 hour to solve

## Aproach

- use pivots( pivot_min, pivot, pivot_max) and `index`

## Solution

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        index = 0
        pivot_min = 1
        pivot_max = len(numbers)-1
        pivot = len(numbers)//2

        while True:
            if target < numbers[index] + numbers[pivot]:
                pivot_max = pivot -1
            elif target == numbers[index] + numbers[pivot]:
                return [index +1, pivot +1]
            elif target > numbers[index] + numbers[pivot]:
                pivot_min = pivot +1

            # when target is even larger than
            # numbers[index] + numbers[last_index]
            if pivot_max < pivot_min:
                index += 1
                pivot_min = index +1

            # update pivot
            pivot = (pivot_min + pivot_max)//2
```
