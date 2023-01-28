---
layout: single
category: algorithm
title: leetcode 205 Isomorphic Strings
tags: leetcode python3
toc: true
toc_sticky: true
---

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

- [https://leetcode.com/problems/isomorphic-strings/](https://leetcode.com/problems/isomorphic-strings/)

# Problem

## Intuitution

- compare with loop
- to compare style of two strings, change them to 3rd style
  - e.g., "egg" -> 011, "bar" -> 012

## Wrong Aproach

- compare only counter variable
- misunderstanding of problem
- wasted 20mins
- problems like this, do not waste time more than 20 mins

## Aproach

use list and counter variable and determine T/F whether `s_list` equals with `t_list`

## Solution

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_count, t_count = 0,0
        s_list, t_list = [], []

        for i in range(len(s)):
            # search s
            for s_i, s_v in enumerate(s[:i+1]):
                if s_v == s[i]:
                    s_list.append(s_count)
                    break
                s_count += 1
            # search t
            for t_i, t_v in enumerate(t[:i+1]):
                if t_v == t[i]:
                    t_list.append(t_count)
                    break
                t_count += 1
        if s_list == t_list:
            return True
        else :
            return False


```
