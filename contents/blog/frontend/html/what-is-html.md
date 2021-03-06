---
title: HTML이란?
thumbnail: 
date: 2020-08-25 12:00:00
category: HTML
tags: [HTML]
draft: false
---


# HTML

- 웹 페이지의 기초적인 빌딩 블록으로, 웹 컨텐츠의 구조와 의미를 부여한다. CSS와 JS는 웹 컨텐츠의 부가적인 기능을 부여하는 것으로 HTML이 없으면 웹페이지를 구성할 수 없다.
- Hyper Text Markup Language
  - 웹 브라우저 상에서 보여지도록 구성된 문서를 말한다.
  - 표준화된 마크업 언어를 사용한다.
    - 마크업 언어란, 일반적인 텍스트와 문법적으로 구분하기 위해서, 일반적인 텍스트를 annotating한 것이다.

# HTML 구조

아래는 가장 기본적인 HTML의 구성요소다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body></body>
</html>
```

- `<!DOCTYPE html>`
  
  Document type이 html이라고 명시하는 것이다.

- `<html>`
  
  html 파일 제일 상위에 있는 파일. html 태그 아래에는 head와 body 태그가 존재한다.

- `<head>`
  
  사용자에게 보여지는 UI적 요소가 아니라, 구글에서 검색할 때 나오는 타이틀이나 부가설명 그리고 북마크 추가할 때 나오는 제목이나 아이콘들이 정의되어 있다. 또 CSS 파일을 연결하는 것을 HEAD에서 한다.
  즉, 사용자에게 보여지는 것이 아닌 메타 데이터들이 담기는 곳이다.

- `<body>`
  
  사용자에게 보여지는 최상위 컨테이너

# W3C (World Wide Wep Consortium)

- 웹의 표준화를 추진하는 단체
- 다양한 브라우저들은 W3C에서 정한 표준을 따르고 있다.

# 웹표준에 없는 태그를 사용할때

```html
<body>
  <something>awk tag</something>
</body>
```

브라우저는 에러가 발생하면, 에러를 스스로 회복하게 된다. awk tag라는 컨텐츠가 브라우저에서 볼 수 있다.

# metadata Tags

- `<base>`
- `<head>`
- `<link>`
- `<meta>`
- `<style>`
- `<title>`

# HTML tags 구분

태그는 크게 두 종류로 구분된다.

1. 박스가 되는 태그(컨테이너, 섹셔닝을 도와주는 태그)
`<head>`,`<section>`,`<footer>`,`<article>`,`<nav>`,`<div>`,`<aside>`,`<span>`,`<main>`,`<form>`

- 웹사이트를 div태그를 이용하여 배치하지 말고 섹셔닝태그(header, nav, aside, main, footer)들을 이용하여 로지컬하게 분리하자.
- main 섹션도 디자인에 따라 section과 article 태그로 분리가 가능하다.(article은 작은 컴포넌트를 그룹화 한 것으로 재사용 가능한 그룹을 article로 지정한다.)

2. 아이템이 되는 태그(사용자가 직접 보여지는 태그)
`<a>`,`<video>`,`<button>`,`<audio>`,`<input>`,`<map>`,`<label>`,`<canvas>`,`<img>`,`<table>`
- `<h1>`과 같은 태그는 자동적으로 컨텐츠를 스타일링 해주기 때문에 박스보다는 아이템에 가깝다.
- `<button>`태그와 같이 보편적인 아이템 태그들은 컨텐츠가 없어도 자동적으로 브라우저에 렌더링하여 보여준다.

# HTML Elment 구분

HTML 태그는 쓰임에 따라 구분하기도 하지만, inline이냐 block이냐에 따라서도 분류가 가능하다

### Block
- 뷰포인트 너비를 한 엘리먼트가 다 차지한다. 따라서 다음에 오는 엘리먼트는 아래에 배치된다. Block 요소는 뷰포인트의 한 줄을 모두 차지하는 요소다.

### Inline
- 뷰포인트 너비 중, 엘리먼트가 실제로 사용하는 만큼한 차지한다.즉, 뷰포인트에 들어갈 공간이 남아 있다면, 그 공간에 배치된다.

# tag의 속성

- 태그 안에는 Attribute라는 속성이 존재한다.
- CSS는 html태그의 class 속성과 연결되어 태그에 스타일을 추가해준다.
- 태그마다 공통으로 가지고 있는 속성도 있고 고유한 속성도 있다.
- boolean 형식의 속성들이 있는데, 값을 따로 명시하지 않아도 속성명을 태그 안에 써주기만 해도 동작하는 것들이다.
  - `<ol type="i" reversed>`에서 **reversed**가 boolean 형식의 속성이다. 써주기만 해도 order가 뒤집힌다.

# input 태그

- 사용자에게 입력을 받기 위해 자주 사용되는 태그다
- 보통 `<label>` 태그와 함께 사용된다. 사용자에게 어떤 정보를 요구하는지 명확하게 하기 위해서다.
- input 태그는 한 페이지 안에 여러개가 있을 수 있기 때문에 **id**속성을 이용하여 구분한다.
- label은 for 속성을 이용하여 input_id를 위한 label임을 나타낸다.
- input은 id 속성을 이용하여 다른 input 태그와 구분한다.

```html
<body>
  <label for="input_id">Nmae: </label>
  <input id="input_id" type="text" />
</body>
```
