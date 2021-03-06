---
title: 좋은 OOP란?
thumbnail: 
date: 2020-08-27 12:00:00
category: JavaScript
tags: [JavaScript]
draft: false
---

## 훌륭한 OOP의 조건

### **높은 응집도 / 낮은 결합도** 

#### **높은 응집도**

높은 응집도라는 것은 불필요한것이 들어왔느냐, 뭉쳐져 있어야 하는 객체들이 잘 뭉쳐져있느냐에 대한 것.

클래스에 대한 정의를 한줄로 했는데 그 정의에 맞는 내용들이 제대로 들어왔느냐/ 다른 클래스에 있는 정의가 들어가버렸느냐 등을 따져야함.

ex) 뷰를 랜더링 했을때 뷰에 데이터를 필터링하는게 있는가? (이게 맞다는게 아님. 생각을 하고 짜자)

뷰에 데이터를 필터링하는 기능이 만약 내 코드에 들어와 있다면 왜 들어와있는지 설명할 수 있어야 함. 즉, 나름 생각을 하고 짜라는 것!

#### **낮은 결합도**

의존성있는 친구들은 기왕이면 낮은 결합도를 갖게하기?

내역 등록 / 내역 목록

이 두개들이 통신을 해야함. 이 둘은 의존성이 있지만 밀접하진 않아.

이런 커다란 객체들간에 이왕이면 낮은 결합도를 갖게 해야함.

ex)
```javascript
class a {
    writeHandler() {
        const inputData = getInputData();
        new b().render2({ inputData })
    }
}

class b {
    render2({ inputData }){
        $div.innerHTML = inputData
    }
}

```

a와 b는 강한 의존성(결합도)을 가짐. (객체 참조)

b가 바뀌면 a를 수정해야할것.

때문에 위의 코드를 받은 인자가 뭔지 모르게 바꿔야함. (의존성 낮게)

받은게 b인지 c인지 모르는 거죠. 

자꾸 변경되는 부분의 의존도를 낮추는게 좋음.

****결국, 객체지향은 의존성을 어떻게 컨트롤하느냐와 밀접한 관계가 있다!****