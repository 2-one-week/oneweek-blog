---
title: Map VS Object
thumbnail:
date: 2020-08-12 18:00:00
category: DataStructure
tags: [DataStructure, Map, Object]
draft: false
---


## Map 이란

- Map : `key` 와 `value` 가  `[key, value]` 의 형식으로 이루어진 리스트

- Map 객체의 생성

    →  `new Map()`으로 생성

    → ex) `const mapPractice = new Map()`

- Map 객체에 요소 추가

    → set으로 요소를 추가

    → ex) mapPractice.set('a', 1);과 같은 식으로 a를 Key로 1을 value로 요소 추가

- Map에서 요소 삭제

    → delete method 사용

    → key를 전달 받아, 삭제에 성공하면 true, 없으면 false를 반환한다.

- Map에서 사용 가능한 type
    - Map은 String, Symbol 이외의 타입을 키로 사용 가능.

        → 키를 원시 타입이나, 함수나 객체도 키로 사용할 수 있음

- Iterable 프로토콜 지원
    - object는 원래 for문을 순회할 수 없음
    - for of 문을 통해서 직접 순회가능

- Map이 가지는 methods

    → clear: 모든 요소를 제거하고 빈 Map으로 만듬

    → entries: `[key, value]` 요소를 가진 배열의 `iterator` 객체를 반환

    → forEach: 배열의 `forEach`랑 비슷합니다. `value`, `key`를 파라미터로 사용 가능

    → get : 키를 전달 인자로 받아서 해당 `key`의 요오가 존재하면 `value`를, 
    없으면 `undifined`를 반홥. 마찬가지로 참조타입을 `key`로 사용할 때는 주의해야 함

    →  has: 키를 전달인자로 받아서 존재하면 `true`, 없으면 `false`를 반환합니다. 마찬가지로 참조타입을 `key`로 사용하면 주의해야 함

    →  keys: `key`로만 이루어진 `iterator` 객체를 반환.

    →  values: `value`로만 이루어진 `iterator` 객체를 반환

    →  size: `size`는 메소드는 아닙니다. `Map`의 총 길이를 반환하는 속성

- Object와 차이점
    - Map은 Object와 달리 삽입순으로 순서가 보장됨.

    - Map은 기본 size 속성으로 쉽게 길이를 얻을 수 있는데 Object는 기본으로는 못하고 따로 함수를 만들어야 함.

    - Map의 key는 Object와 달리 key로 어떤 타입이든 사용 가능한 반면, Object는 Symbol과 String만 가능.
    
    - Map은 iterable 프로토콜을 지원해서 바로 순회가 가능.

- Object에서 사용 가능한 type
    - Object는 string, symbol type 만 키로 사용 가능