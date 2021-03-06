---
title: HTML Basic
thumbnail: 
date: 2020-08-25 12:00:00
category: HTML
tags: [HTML]
draft: false
---

# HTML

웹 페이지의 내용과 구조를 결정하는 마크업 언어다.

<br>

## Element

- HTML 요소는 HTML 태그다.
- HTML 요소는 시작태그와 종료태그 그리고 사이에 위치한 컨텐츠로 구성된다.
  - 컨텐츠와 종료태그 없이, 하나로 이뤄진 태그 또한 존재한다. Empty Element라고 한다.
  - Empty Element는 Attribute만을 가질 수 있다.

<br>
<hr>
<br>

## Attribute

- 속성이란 요소의 성질을 정의한다.
- 모든 HTML 요소는 Attribute를 가질 수 있으며, Attribute는 이미지 파일의 경로, 요소의 크기 등, HTML 요소의 추가 정보를 제공한다.

### Global Attribute

- 글로벌 어트리뷰트는 모든 HTML 요소가 가지고 있는 속성을 말한다.
- 어떤 요소에는 글로벌 어트리뷰트의 효과가 적용되지 않을 수 있지만 사용은 가능하다.
- 자주 사용되는 글로벌 어트리뷰트
  1. id: 요소에 식별자를 지정한다.(중복 불가능)
  2. class : 스타일시트에 정의된 class를 요소에 지정한다. (중복 가능)
  3. hidden: css의 hidden과는 다르다. 브라우저에 노출할 것인지의 여부를 나타낸다.
  4. lang: 요소의 언어를 지정한다. **검색엔진 봇의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다.**
  5. style: 요소에 인라인 스타일을 지정한다.
  6. tabindex: 키보드 페이지 네비게이션 시 이동 순서를 지정한다.
  7. title : 요소의 제목을 지정한다.

<br>
<hr>
<br>

## Semantic Element

- 시맨틱 태그란, 웹페이지의 구조를 쉽게 이해할 수 있도록하는 태그다. 사람이 이해하는데도 도움을 주며, 검색엔진의 봇이 이해하는데도 도움을 준다.
- 검색 엔진은 봇을 사용해서 크롤링을 한다. 크롤링 한 웹 사이트들을 사용자가 검색할 수 있게 만드는 것인데, 검색엔진의 봇은 **HTML 코드를 크롤링한다. 그때 봇이 파악하는 HTML은, HTML의 Semantic Element다.**
- 주요 시맨틱 태그
  1. `<header>`
  2. `<nav>`
  3. `<section>`
  4. `<article>`
  5. `<aside>`
  6. `<footer>`

### Semantic Web

모든 웹 페이지가 시맨틱 태그에 의해 메타데이터가 부여된다면, 웹 세상은 잡다한 HTML의 집합이 아니라, 모든 페이지가 "의미"와 "관련"을 가지는 거대한 데이터베이스가 될 수 있다. 이것이 시맨틱 웹이다.

<br>
<hr>
<br>

# Tags

## DTD(Document Type Definition) tag

- 브라우저에게, 현재 웹페이지의 형식을 알리기 위한 태그다.
- 모든 태그들은 DTD에 정의가 되어있고, HTML 문서 작성자는 DTD에 정의되어있는 태그들을 사용한다는 것을 의미한다.

<br>

#### HTML5

`<!DOCTYPE html>`

<br>

#### HTML4.01

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

<br>
<br>

## html tag

- html 태그는 글로벌 어트리뷰트 자주 사용한다.
- 특히 `lang` 어트리뷰트를 사용한다 `<html lang="ko">`

<br>
<br>

## head tag

- head 요소는 메타데이터를 포함하기 위한 element다.
- 해당 HTML 문서의 title, style, link, script에 대한 데이터를 담는다.

<br>

### `title` tag

- 문서의 제목을 정의한다.

```html
<head>
  <title>문서 제목</title>
</head>
```

<br>

### `style` tag

- style element는 html 문서를 위한 스타일이 작성된다.

```html
<head>
  <style>
    body {
      background-color: yellow;
      color: blue;
    }
  </style>
</head>
```

<br>

### `link` tag

- link element는 외부 리소스와의 연계 정보를 정의한다.
- 주로 html 문서와 외부 css 파일 연계에 사용한다.

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

<br>

### `script` tag

- script element에는 클라이언트 사이드의 js를 정의한다.
- src 어트리뷰트를 사용하면 외부 js 파일을 로드할 수 있다.

```html
<head>
  <script>
    document.addEventListener("click", function () {
      alert("Clicked!");
    });
  </script>
  <script src="main.js"></script>
</head>
```

<br>

### `meta` tag

> 출처 : http://www.animeclub.net/anime_document/43734

- META태그는 웹 서버와 웹 브라우저간에 상호 교환되는 정보를 정의하는데 사용합니다. 웹 서버는 웹 클라이언트로부터의 요청을 받아들여 HTTP응답 헤더를 전달합니다.

  - HTTP응답 헤더란 웹 브라우저의 요청에 의해 웹 서버가 적절한 응답을 웹 브라우저에게 전달하게 되는데 이 때 전달되는 문자 또는 명령어 등의 메시지를 말합니다.응답 헤더에는 웹 서버의 정보, HTML문서의 저자, 만기일, 키워드 목록과 같은 문서의 속성이나, REFRESH(미리 지정된 시간 후에 다른 HTML문서를 자동으로 로드 - Client Pull)등의 명령어가 포함되어 있습니다. 이러한 응답 헤더의 정보를 META태그로 지정할 수 있습니다.

- meta 태그를 사용하는 중요한 가장 큰 이유는 자신의 홈페이지나 사이트등을 검색엔진의 상위에 링크시키거나 정확한 페이지정보를 제공하기
  하는 것이다.

  - 검색엔진의 검색알고리즘에는 여러가지가 있습니다. 그 중 한가지는
    바로 이 META 태그를 검색하는 것 입니다. META 태그의 키워드 및 내
    용 사용자 등의 정보로 검색엔진의 상위에 랭크가 될 수 있고 그로 인해 히트율을 높일 수 있습니다. 될 수 있으면 웹페이지마다 META 태그를 달아주면 홈페이지를 알리는데 도움이 된다.

- 메타태그 속성에는 http-equiv, name, content 3가지 속성이 있다.
