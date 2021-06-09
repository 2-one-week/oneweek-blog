---
title: JavaScript에서 객체 비교
thumbnail:
date: 2020-08-14 18:00:00
category: JavaScript
tags: [ES6, Object]
draft: false
---

## JavaScript에서의 객체 인스턴스 비교

- Reference equility

    ```jsx
    const hero1 = {
      name: 'Batman'
    };
    const hero2 = {
      name: 'Batman'
    };

    hero1 === hero1; // => true
    hero1 === hero2; // => false

    hero1 == hero1; // => true
    hero1 == hero2; // => false

    Object.is(hero1, hero1); // => true
    Object.is(hero1, hero2); // => false
    ```

- Manual comparison

    ```jsx
    function isHeroEqual(object1, object2) {
      return object1.name === object2.name;
    }

    const hero1 = {
      name: 'Batman'
    };
    const hero2 = {
      name: 'Batman'
    };
    const hero3 = {
      name: 'Joker'
    };

    isHeroEqual(hero1, hero2); // => true
    isHeroEqual(hero1, hero3); // => false
    ```

- Shallow equality

    ```jsx
    function shallowEqual(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }

      return true;
    }
    ```

- Deep equality

    ```jsx
    function deepEqual(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
          areObjects && !deepEqual(val1, val2) ||
          !areObjects && val1 !== val2
        ) {
          return false;
        }
      }

      return true;
    }

    function isObject(object) {
      return object != null && typeof object === 'object';
    }
    ```

    ```jsx
    const hero1 = {
      name: 'Batman',
      address: {
        city: 'Gotham'
      }
    };
    const hero2 = {
      name: 'Batman',
      address: {
        city: 'Gotham'
      }
    };

    deepEqual(hero1, hero2); // => true
    ```

    참고 문헌 : [https://dmitripavlutin.com/how-to-compare-objects-in-javascript/](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/)