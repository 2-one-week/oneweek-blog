---
title: CSS Basic
thumbnail: 
date: 2020-08-25 12:00:00
category: CSS
tags: [CSS]
draft: false
---


# CSS(Cascading Style Sheet)

- Cascading의 의미는 폭포, 연속, 직렬을 의미한다. 브라우저가 버튼을 그릴 때, Style Sheet에 정의된 스타일을 찾고 없으면 기본으로 지정된 스타일을 사용하게 된다.

<br>
<br>

### Style 분류와 Cascading

- 웹페이지 스타일링은 크게 세가지 방식으로 분류할 수 있다.

1. Author Style
   개발자가 직접 작성하는 css 파일을 의미한다.
2. User Style
   브라우저 상에서 다크모드나, 글자 크기를 사용자가 지정하는 것을 의미한다.
3. Browser
   브라우저 상에서 기본적으로 지정된 스타일을 의미한다.

- Cascading에 의해 Author -> User -> Browser 순의 우선순위에 따라 스타일이 적용된다.

<br>
<br>

### !important

- Cascading의 연결 고리를 끊어내는 것이다.
- CSS 스타일 정의할 때, `!important`를 사용하게 되면 연결고리를 무시하고 !important로 정의한 것을 스타일로 사용하게 된다.
- HTML, CSS 구조가 잘못된 경우에 사용하게 된다. 즉 좋지 못한 코드라는 증거가 된다.

<br>
<br>

### CSS와 HTML

- 우리는 HTML을 섹셔닝해서 작성하게 된다.
- 섹셔닝을 하는 이유들 중 가장 큰 이유는 섹셔닝된 구획에 맞게 CSS 스타일을 적용하기 쉽기 때문이다.

<br>
<br>

# Selectors

```css
selector {
  property: value;
}
```

- HTML의 어떤 태그를 고를 것인지 규정하는 문법이다.
- Selector를 작성하여 어떤 태그를 고를 것인지 규정하면 된다.
- 중괄호 안에, 꾸미고 싶은 프로퍼티와 값을 넣어주면 된다.

1. `*` - Universal
   - 모든 태그를 선택한다.
   ```css
   * {
     color: green;
   }
   ```
   <br>
2. `태그 이름` - type
   - 해당 태그 타입들을 모두 선택한다.
   ```css
   div {
     backgroud-color: green;
   }
   ```
   <br>
3. `#id이름` - ID
   - 해당 id를 가진 요소를 선택한다.
   ```css
   #special {
     color: green;
   }
   ```
   <br>
4. `.class이름` - Class
   - 해당 class이름을 가진 요소들을 선택한다.
   ```css
   .something {
     color: red;
   }
   ```
   <br>
5. `:` - State
   - 1~4번 셀렉터 옆에 State를 추가적으로 선언하여, 좀 더 세부적인 요소를 선택할 수 있다.
   - 마우스가 올라와 있는 상태(hover)일 때 적용할 스타일을 선언할 수 있다.
   ```css
   button:hover {
     color: blue;
   }
   ```
   <br>
6. `[]` - Attribute

   - 해당하는 속성값을 가진 태그로 한정 할 수 있다.
   - 혹은 해당하는 속성값의 값이 명시한 것과 같은 태그로 한정할 수 있다.

   ```css
   a[href] {
     color: purple;
   }

   a[href="naver.com"] {
     color: black;
   }

   a[href^="naver"] {
   }
   a[href$="naver"] {
   }
   ```

   > `^`를 이용하면, href 속성값이 naver로 **시작하는**태그를 모두 선택할 수 있다.
   > `$`를 이용하면, href 속성값이 naver로 **끝나는** 태그를 모두 선택할 수 있다.

# Padding, border, margin

- block 요소의 아이템들은 `view width - (content width + border width)`를 margin으로 갖게 된다.

- padding은 content 안에 먹히는 공간을 의미한다.
- margin은 content 밖에 먹히는 공간을 의미한다.

- margin과 padding은 `margin-top`과 `padding-bottom`과 같이 side 별로 space의 크기를 지정할 수 있다.

  - 시계방향으로 top->right->bottom->left로 margin을 먹일 수도 있다. `margin : 20px 0px 20px 0px`라면, margin-top : 20px, margin-bottom : 20px이며 right와 left margin은 0px가 된다.
  - 위와 같이 top과 bottom만 margin을 먹이고 싶다면, 다음과 같이 써도 된다. `padding : 20px 0px`

- border의 경우, border-width, border-style, border-color를 일일히 먹여야 될 때가 있다. 이것도 간단하게 쓸 수 있다.
  - `border : 2px solid red;`

# Display

## block-level & inline-level

- `<div>`는 block-level이며, `<span>`은 inline-level이다.

```html
<body>
  <div></div>
  <span></span>
  <span></span>
</body>
```

```css
div,
span {
  width: 80px;
  height: 80px;
  margin: 20px;
}

div {
  background: red;
}

span {
  background: blue;
}
```

- 이 상황에서 `<div>`는 width와 height, margin을 가진 빨간색 박스가 나타난다.
- 반면, `<span>`은 박스가 생성되지 않는다. **span은 안에 컨텐츠가 없으면 박스가 생성되지 않기 때문이다.**

<br>
<Br>

### display

- `span`은 인라인요소, `div`는 블록요소다. 블록과 인라인 요소를 결정짓는 것은 CSS의 **display 속성**이다.

```CSS
span {
    background: blue;
    display: block;
}

div {
    background : red;
    display : inline-block;
}
```

- span의 display속성을 `block`으로 변경하면 div와 같이 블록요소가 된다.
- div의 display 속성을 `inline-block`으로 변경하면 원래 span과 **비슷한** 인라인 요소가 된다.
  - 완전히 기존 span과 같아지려면 inline-block이 아니라 `inline` 값을 넣어야 한다.

### inline과 inline-block

- inline의 의미는, **컨텐츠 자체만 꾸며주는 것**이다.
- 따라서 inline-level의 요소는 우리가 width나 height를 설정해줘도 의미가 없다. inline은 컨텐츠만 꾸며주므로 컨텐츠 이외의 스타일은 무시된다.
- inline-block은 inline처럼 한 줄에 같이 표시되나, 블록형태로 바뀌게 된다. 즉 컨텐츠 자체만 꾸며주는 것이 아니라, **블록과 컨텐츠를 같이 꾸미게 된다.** 따라서 width나 height의 스타일이 먹힌다.

# Position

- `top`,`left`,`right`,`bottom`,`top-left`, `top-right`, `bottom-left`, `bottom-right`를 이용하여 상자의 Position을 바꿀 수 있다.

```css
.container {
    left: 20px;
    top: 20px;
}
```

- 이렇게만 해서는 Postion을 변경할 수 없다.

### Static

- `position: static` position 속성은 기본값으로 `static`이란 값을 가지고 있다.
  - static은 html에 정의된 순서대로 브라우저 상에서 보여준다는 의미다.

### relative

```css
.container {
    left: 20px;
    top: 20px;
    position: relative;
}
```

- position 을 relative로 변경하면, top과 left에서 20px씩 이동한 것을 확인할 수 있다.
- relative는 원래(static일 때) 있어야 되는 자리에서 **상대적으로 20px씩 이동한다는 의미다.**

### absolute

```css
.container {
    left: 20px;
    top: 20px;
    position: absolute;
}
```

- `absolute`는 내 아이템이 **담겨있는 박스 안**을 기준으로 한다.
  - 즉, **부모 엘리먼트의 컨텐츠**를 기점으로 이동한다는 의미다.

### fixed

```css
.container {
    left: 20px;
    top: 20px;
    position: fixed;
}
```

- `fixed`는 부모 엘리먼트를 신경쓰지 않고 **window를 기점으로 한다는 의미다.**

# sticky

```css
.container {
    left: 20px;
    top: 20px;
    position: sticky;
}
```

- 원래(static일 때)있던 자리에 위치하지만, 스크롤링이 되어도 원래 있던 자리에 붙어있는 것을 의미한다.

> 최신의 css를 쓸 때 브라우저 호환성을 걱정해야 된다.
> 특히 IE나 Edge에서 안먹히는 기능이 있을 수 있는데, **postCSS**와 같은 프레임웍을 쓰면 Babel처럼 최신 문법에 prefix를 넣어, 호환이 안되는 브라우저에서도 동작하게 만들어준다.

# float

- float의 원래 목적은 이미지와 텍스트를 어떻게 배치할지에 대한 용도였다.
- `float: left`
  - 이미지가 왼쪽에 배치되고, 텍스트들이 왼쪽에 배치된 이미지를 감싸는 형태
- `float: center`
  - 이미지가 중앙에 배치되고, 남는 좌우 공간에 텍스트들이 배치
- `float: right`
  - 이미지가 오른쪽에 배치되고 남는 왼쪽 공간에 텍스트가 배치

# Flexbox

- Felxbox를 이용하면 박스와 아이템들을 행, 열로 자유자재로 배치할 수 있다.
- 예전에는 모든 브라우저에서 호환 가능하도록 레이아웃을 만들기 위해, Position이나 float 또는 Table을 이용했다. 그러나 너무 복잡했고 item들을 컨텐츠에 상관없이 동일한 크기의 박스로 배치하는 것, 부모 컨텐츠 내부에서 수직 수평 정렬하는 것들이 매우 복잡했다. flexbox로는 매우 편해졌다.

### flexbox 주요 개념

- **flexbox에는 Container(박스)에 적용되는 속성값이 존재하며, 각각의 item들에 적용되는 속성값이 존재한다.**
- **flex box에는 중심축과 반대축이 있다.** 중심축을 수평으로 두냐, 수직으로 두냐에 따라서 반대축이 바뀐다.

### Container에 적용되는 속성

- `display : flex`
  - 컨테이너 display 속성에 flex값을 주면, 컨테이너는 flexbox가 된다.
- `flex-direction: row`
  - flex-direction의 기본값은 row다. row는 왼쪽->오른쪽 방향이 된다.
  - 값 `row-reverse`는 오른쪽->왼쪽 방향으로 아이템을 채운다.
  - 값 `column`은 중심축을 위에서 아래로 바꾼다.
  - 값 `column-reverse`은 아래->위 방향으로 아이템을 채운다.
- `flex-wrap: nowrap`
  - 기본값은 nowrap이다. nowrap은 아이템이 아무리 많아도 아이템들이 작아지면서 한 줄에 붙이는 것이다.
  - 값 `wrap`을 하면, 우리가 지정한 아이템의 크기로만 한 줄을 채우며, 한 줄을 넘길 경우 다음줄로 넘긴다. 따라서 뷰포트의 크기가 바뀌면 자동으로 줄넘김을 해준다.
  - 값 `wrap-reverse`로 하면 래핑을 아래에서 위로 해준다.
- `flex-flow`
  - flex-flow는 flex-direction과 flex-wrap을 합해서 쓰는 것이다.
  - `flex-flow: column nowrap`형식으로 쓸 수 있다.
- `justify-content: flex-start` (정렬)
  - **중심축에서** 아이템을 어떻게 배치할 것인지 정의한다. **아이템들의 순서를 결정하는 것이 아니라, 아이템들의 배열을 컨테이너의 어디쪽에 붙이냐를 결정하는 것**
  - 기본값은 `flex-start`다. 수평축이 중심축이면 "왼쪽"에 아이템을 붙이고, 수직축이 중심축이면 "위쪽"부터 아이템을 붙인다.
  - 값 `flex-end` 수평축이 중심축이면 "오른쪽"에 아이템들을 붙이고, 수직축이 중심축이면 "아래쪽"에 아이템들이 붙는다.
  - 값 `space-around` 아이템들에게 공간을 부여한다. 수평축이 중심축인 경우 좌우로 공간을 먹이는데, 맨 끝에 있는 요소들은 사이에 위치한 요소들보다 공간을 적게 먹게 된다.(사이에 있는 것들은 주변 요소들이 가지는 공간과 자신의 공간을 합한 너비만큼 떨어져 있다.)
  - 값 `space-evenly` 모두 균일한 공간을 준다.
  - 값 `space-between` 끝에 있는 요소는 컨테이너에 딱 붙이고, 중간에 있는 요소들의 간격을 균일하게 만든다.
- `align-items:`
  - **반대축**에서 아이템들을 배치 정의
  - 값 `center`는 flexbox의 반대축의 중앙에 위치하게 만든다.
  - 값 `baseline`은 flexbox의 반대축의 크기를 차지하고 있는 가장 큰 아이템의 중심과 다른 요소들의 중심이 동일 선상에 위치하도록 배치하는 것이다.
- `align-content:`
  - justify-content와 동일한 값들을 가지고, 반대축에서 어떻게 아이템들을 배치할지 정의하는 것이다.
  - **align-content는 flexbox가 여러줄이 되었을 때를 위한 것이기 때문에, 항목이 한 줄에 있는 경우에는 효과가 없다.**
  - **align-content는 줄 사이의 간격을 결정하는 반면, align-items는 전체 항목이 컨테이너 내에서 정렬되는 방식을 결정하는 것이다.**

### item에 적용되는 속성

- `order:0`
  - 기본값은 0이다. 0이면, html에 정의된 순서대로 flexbox에 넘겨지게 된다. **순서대로 넘기되, 배치는 flexbox가 위에서부터 할 건지 아래에서부터 할 건지, 오른쪽에서부터 할 건지 왼쪽에서부터 배치할 건지 결정하게 된다.**
  - 값을 숫자로 변경해주면, flexbox에 넘겨주는 순서가 바뀐다.
  - 거의 쓸 일 없다.
- `flex-grow: 0`
  - flex-grow를 쓰지 않으면 기본값 "0"이 들어간다. 요소들에게 주어진 너비와 높이를 유지하게 된다. 컨테이너가 아무리 커져도 그대로 유지하다가, 컨테이너가 작아지면 어쩔 수 없이 균일하게 작아진다.
  - 한 아이템에 `flex-grow:1`을 주면, 해당 아이템은 flexbox의 **남는** 공간을 채우기 위해 늘어나게 된다.
  - 여러 아이템에 `flex-grow:1`을 주면, flexbox의 남는 공간을 해당 아이템들이 균일하게 늘어나면서 채우게 된다.
  - 한 아이템에 `flex-grow:2`를 주고, 다른 아이템에 `flex-grow:1`을 주면, 모든 아이템이 flexbox의 남는 공간을 채우려고 하되, "2"를 준 아이템은 "1"을 준 아이템보다 2배의 크기로 공간을 먹게된다.
- `flex-shrink:0`
  - 컨테이너가 작으졌을 때, 어떻게 행동하냐를 지정한다. 기본값은 0이다.
  - 모든 아이템에 `flex-shrink:1`을 주면, 균일한 크기로 작아진다.
  - 한 아이템에 `flex-shrink:2`를 주고, 다른 요소에 `flex-shrink:1`을 주면 2를 준 아이템은 1을 준 것보다 1/2만큼 작아진다.
- `flex-basis: auto`
  - 아이템들이 공간을 얼마나 차지할 것인지 정의해준다. 기본값은 auto로 `flex-grow`와 `flex-shrink`에 정의한대로 움직이게 된다.
  - `flex-basis: 60%`처럼 %로 지정하면, 컨테이너 크기의 60%만큼의 크기를 유지하게 된다.
- `align-self`
  - 컨테이너 레벨이 아니라 아이템 레벨에서의 정렬이다. 아이템 하나만 플렉스박스의 수직 정렬을 하고 싶을 때 쓸 수 있다.
  - `align-self:center`를 하면, 이 속성을 준 아이템만 컨테이너의 반대축 중앙에 위치하게 된다.

> **height: 100%** vs **height: 100vh**
> "**%**"는 컨테이너가 들어있는 부모의 높이를 100%로 채우겠다라는 의미다.
> 위에서 컨테이너를 100%라고 해도 나타나지 않는다. body의 heigth가 지정되어 있지 않기 때문이다. body를 지정해도 나타나지 않는다. body의 부모인 html의 height가 지정되어 있지 않기 때문이다. body와 html을 모두 100%로 주면, 뷰포트의 높이 모두가 베이지색으로 변경된다.
> "**100vh**"는 부모와 상관없이, 뷰포트에 보이는 높이의 100%라고 쓰겠다는 것이다.

# Responsive Web Design

- 과거에는 기기가 데스크탑만 있었지만, 지금은 태블릿 모바일 등이 있다. 따라서 기기 화면 크기에 맞게 보여주는 반응형 웹 디자인이 필요해졌다.
- 반응형 웹 디자인을 위해 고정된 크기의 레이아웃 보다는 유동적인 크기를 갖는 레이아웃을 짜야한다.

### 유동적인 레이아웃

- 과거에는 유동적인 레이아웃을 짜기 위해 `float`과 `%`를 사용했다.

```css
.left_box {
  float: left;
  width: 50%;
}
```

- 새로운 기술이 등장함에 따라, `Flex grid`,`Flex box`, `%`, `vw`, `vh`를 함께 사용한다.

### Media Queries

- **화면이 계속 작아지다가 레이아웃 배치가 바뀌는 것은 CSS의 `Media Queries`를 사용한다.**
- 따라서 스크린 width로 어디까진 ~1024까지는 데스크탑 화면으로, ~800까지는 태블릿 화면, 그 밑으로는 모바일 화면을 보여주는 식으로 정해놔야 한다.
  - 과거에는 기기 종류마다 화면 크기가 나눠졌지만 요즘은 그렇지 않다. 그래도 기기별 대충의 사이즈는 다음과 같다.
  - Mobile : 320~480 px
  - Tablet : 768~1024 px
  - Desktop : 1024~ px

```css
@media screen and (min-width: 800px) {
  .left_box {
    width: 20%;
  }
}
```

- 적어도 800 px 이상일 때, left_box 클래스에는 이 스타일을 먹여달라는 미디어 쿼리
- 타입은 `screen`, `speech`, `print`, `all`이 있다.
- 문법은 `and`, `not`, `only`, `,(comma)`가 있다.
- `min-width`, `max-width`만으로도 충분히 좋은 반응형 웹사이트를 만들 수 있다.
