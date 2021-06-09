---
title: Class, Prototype
thumbnail:
date: 2020-08-14 18:00:00
category: JavaScript
tags: [ES6, Prototype]
draft: false
---

## Class / Prototype

### Class 와 Prototype 에 대한 공통점과 차이점
- ES6에 들어서면서 class라는 키워드가 도입.
    - class, super, extends, static 등의 class 기반 키워드가 많이 추가되었다.

    - 그래도 여전히 프로토타입기반 언어라고 함

- prototype기반의 프로그래밍

    - 프로토타입 기반 프로그래밍은 객체지향 프로그래밍의 한 형태로 클래스가 없고, 클래스 기반 언어에서 상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다.

    - 프로토타입기반 프로그래밍은 클래스리스(class-less), 프로토타입 지향(prototype-oriented) 혹은 인스턴스 기반(instance-based) 프로그래밍.

    - 오늘 공부한 바로는 객체들 사이에서 공유되는 것들을 한번의 프로토타입 선언을 통해 메모리를 효율적으로 사용하기 위해서

- 자바스크립트는 프로토타입 기반의 언어이다.(C++, JAVA 클래스 기반)

    프로토타입 기반의 언어로써, 클래스가 존재하지 않다.

    OOP의 상속의 경우에는 prototype을 사용하여 기존 클래스 상속을 흉내낸다.

    이러한 방법으로 지금까지 OOP의 개념을 가지게 하였다.

- class가 추가 되었지만 결론적으로는 겉은 class 내부적으로는 프로토타입 기반으로 구성되어 있다.

### this(또는 self)와 super 키워드

- this는 자기 자신 것. super는 상위 것

- this의 경우 2계층 구조 이상으로 들어갈 때, 불가능함 → this를 변수에 할당하여 재사용하는 방향으로 가야함

```jsx
const a = 20;
const obj ={
    a: 20
    b : function (){
        let self = this;
        console.log(this.a)
        function c(){
            console.log(this.a) // 아무것도 안찍힌다
            console.log(self.a) // self에 this를 할당하였고 그를 이용한 것이므로 값이 찍힌다
        }
        c()
    }
}
obj.b();
```

- this나 super하나만 와야하고 가장 첫 줄에 와야함.

- 상위에 있는 걸 온전히 쓰려면 super를 써야하고 가장 첫 줄에 적어야함

- super
    - super 키워드는 생성자 함수에서 단독으로 쓰이거나 this 키워드가 사용되기 전에 호출되어 사용된다

    - 또한, super 키워드는 부모 객체의 함수를 호출하는데 사용될 수 있다.

    - 하위 클래스와 프로토타입 클래스에 같은 이름의 메소드가 있을 경우에 기본적으로 프로토타입 클래스의 메소드는 호출이 되지않고 하위클래스의 메소드가 호출된다. 이 때 super 키워드를 사용해서 프로토타입 클래스의 메소드를 호출할 수 있다.

- static : 정적메소드로 프로토타입에 연결되지 않는다. 클래스의 인스턴스에서는 호출할 수 없다.