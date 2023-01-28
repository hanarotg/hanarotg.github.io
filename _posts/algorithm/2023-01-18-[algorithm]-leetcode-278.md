---
layout: single
category: algorithm
title: leetcode 278 First Bad Version
tags: leetcode python3
toc: true
toc_sticky: true
---

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

- [https://leetcode.com/problems/first-bad-version/](https://leetcode.com/problems/first-bad-version/)

# Problem

## Intuitution

- use pivot to be satisfied with time limit

## Wrong Aproach

- use loop at first
- not clearly understanding problem at first

## Aproach

- use pivot

## Solution

```python
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        pivot = n//2
        pivot_smallest = 1
        pivot_largest = n

        while pivot_smallest != pivot_largest:
            if isBadVersion(pivot) == False:
                pivot_smallest = pivot + 1
                pivot = (pivot_largest + pivot_smallest)//2
            else:
                pivot_largest = pivot
                pivot = (pivot_largest + pivot_smallest)//2

        return pivot_smallest

```
