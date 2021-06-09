---
title: Big O 표기법
thumbnail:
date: 2020-08-10 18:00:00
category: Algorithm
tags: [BigO]
draft: false
---

## Big O 표기법 이란

1. big O 표기법이란 알고리즘의 효율성을 표기해주는 표기법

2. 시간 및 공간 복잡도를 나타내는데 주로 사용된다

3. 점근 표기법 - big O, big 오메가, big 세타 표기법 세가지가 있다. 이 중 big O를 사용하는 이유?

- big O

    1. 알고리즘 효율성을 상한선 기준으로 표기 (그래프가 위로 향할수록 비효율적임)

    2. 주어진 알고림의 증가율보다 크거나 같은 **최소의 증가율**을 찾는것이 목적

    3. 데이터 입력값이 충분히 크다고 가정 → **상수항을 무시한다.**

    4. 데이터 입력값의 영향을 많이 받기 때문에 가장 영향력을 주는 항을 제외하고 무시

    5. O(1) 

        - 배열에 index로 접근할 때

        - stack이나 queue에서 삽입 또는 삭제할 때

    6. O(log n) : Logarithmic → log scale이기 때문에 데이터가 많아져도 시간이 조금씩 증가

        - tree와 같은 자료구조에서 binary search시 사용된다.

    7. O(n) : **선형시간** → 예를 들면, for문 0~n까지의 연산

    8. O(n^2) : for문을 2개 중첩한 경우

- big 오메가
    1. 알고리즘의 효율성을 하한선 기준으로 표기

    2. 주어진 알고리즘의 증가율보다 작거나 같은 **최대의 증가율**을 찾는 것이 목적
    
- big 세타
    1. 알고리즘의 효율성을 상한~하한선의 사이를 기준으로 표기