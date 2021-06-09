---
title: Shallow and Deep Copy in JS
thumbnail:
date: 2020-08-15 18:00:00
category: JavaScript
tags: [JavaScript]
draft: false
---

primitive 값이 아닌 객체는 reference 방식으로 복사될 수 있다. (서로 다른 변수가 같은 객체를 바라보게 되어 한 객체의 값을 수정하면, 다른 객체의 값 또한 동일하게 변화하는 현상 발생)

## **얕은 복사(Shallow copy)** 

### 완벽한 복제가 아닌 참조만 복사된 것

복사하고자 하는 객체가 객체를 담고 있으면 참조 값을 복사하기 때문에 ‘복사 대상 객체’의 값이 바뀌면 ‘복사한 객체’의 값이 바뀐다.

- 1. 함수를 만들어서 사용

    ```javascript
    function shallowCopy(value) {
        const result = {};
        
        for(const key in value) {
        result[key] = value[key];
        }
        
        return result;
    }
        
    const testData = {a: 1, b: 2};
    const copyData = shallowCopy(testData);
        
    console.log(copyData);  // {a: 1, b: 2}

    //---------------------------------------------//

    function shallowCopy(value) {
        const result = {};
        
        for(const key in value) {
        result[key] = value[key];
        }
        
        return result;
    }
        
    const testData = {a: {aa: 1}, b: 2};
    const copyData = shallowCopy(testData);
    testData.a.aa = 2;
        
    console.log(copyData);  // {a: {aa: 2}, b: 2}
    ```

- 2. ES6에 추가된 Object.assign() 메서드 사용

    Object.assign() 메서드는 객체를 병합하거나 복사할 때 사용

    ```javascript
    const testData = {a: 1, b: 2};
    const copyData = Object.assign({}, testData);
        
    console.log(copyData);  // {a: 1, b: 2}

    //---------------------------------------------//

    const testData = {a: {aa: 1}, b: 2};
    const copyData2 = Object.assign({}, testData);
    testData.a.aa = 2;
        
    console.log(copyData2);  // {a: {aa: 2}, b: 2}
    ```

- 3. 전개 연산자(펼침 연산자) 사용 (ES6 스펙)

    ```javascript
    const testData = {a: 1, b: 2};
    const copyData = { ...testData };
        
    console.log(copyData);  // {a: 1, b: 2}

    //---------------------------------------------//

    const testData = {a: {aa: 1}, b: 2};
    const copyData = { ...testData };
    testData.a.aa = 2;
        
    console.log(copyData);  // {a: {aa: 2}, b: 2}
    ```

## **깊은 복사(Deep copy)** 

### 객체를 복사할 때 얕은 복사를 피하려면 깊은 복사를 해야한다

깊은 복사는 객체 안의 객체의 참조 값도 완전히 원시 데이터 값으로 복사하는 방법

- 1. JSON 객체 사용 ( + `eval()` 메서드 사용)
    JSON.stringify() 메서드로 객체의 데이터를 JSON 형태의 문자열로(원시 데이터)로 만들어서 복사한 후, JSON.parse() 또는 eval() 메서드를 사용해서 다시 객체로 만드는 방법

    데이터나 브라우저에 따라서 조금씩 차이는 있겠지만 eval() 보단 JSON.parse() 쓰는게 좋을거 같다고 함

    ```javascript
    const testData = {a: {aa: 1}, b: 2};
    const copyData = JSON.parse(JSON.stringify(testData));
    testData.a.aa = 2;
    
    console.log(copyData);  // {a: {aa: 1}, b: 2}
    ```

    ```javascript
    const testData = {a: {aa: 1}, b: 2};
    const copyData = eval('('+JSON.stringify(testData)+')');
    testData.a.aa = 2;
    
    console.log(copyData);  // {a: {aa: 1}, b: 2}
    ```

    - JSON 객체를 사용하는 법은 간편하지만 우선 성능적으로 좋지 못하고, 복사하는 객체의 속성 중 값이 함수이거나 undefined 인 경우 완전한 복사가 되지 않는다는 문제가 있음

    ```javascript
    const testData = {a: (a, b) => a + b, c: undefined};
    const copyData = JSON.parse(JSON.stringify(testData));
    console.log(copyData);  // {}
    ```

- 2. 함수를 만들어서 사용
    얕은 복사에서 사용한 함수와 거의 비슷하지만, 객체의 속성의 값이 객체일때는 재귀를 사용

    객체 속성의 값이 함수이거나 undefined여도 복사 가능

    ```jsx
    function deepCopy(value) {
    const result = {};
    
    for(const key in value) {
        if(typeof value[key] === 'object') {
            result[key] = deepCopy(value[key]);
        } else {
            result[key] = value[key];
        }
    }
    return result;
    }
    
    const testData = {a: {aa: 1}, b: 2};
    const copyData = deepCopy(testData);
    testData.a.aa = 2;
    console.log(copyData);  // {a: 1, b: 2}

    const testData2 = {a: (a, b) => a+b, b: undefined};
    const copyData2 = deepCopy(testData2);
    console.log(copyData2);  // {a: (a, b) => a+b, b: undefined}
    ```