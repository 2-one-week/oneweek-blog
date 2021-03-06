---
title: HTML Meta Tag
thumbnail: 
date: 2020-08-25 12:00:00
category: HTML
tags: [HTML]
draft: false
---


# `meta` tag

> 출처 : http://www.animeclub.net/anime_document/43734

- META태그는 웹 서버와 웹 브라우저간에 상호 교환되는 정보를 정의하는데 사용합니다. 웹 서버는 웹 클라이언트로부터의 요청을 받아들여 HTTP응답 헤더를 전달합니다.

  - HTTP응답 헤더란 웹 브라우저의 요청에 의해 웹 서버가 적절한 응답을 웹 브라우저에게 전달하게 되는데 이 때 전달되는 문자 또는 명령어 등의 메시지를 말합니다.응답 헤더에는 웹 서버의 정보, HTML문서의 저자, 만기일, 키워드 목록과 같은 문서의 속성이나, REFRESH(미리 지정된 시간 후에 다른 HTML문서를 자동으로 로드 - Client Pull)등의 명령어가 포함되어 있습니다. 이러한 응답 헤더의 정보를 META태그로 지정할 수 있습니다.

- meta 태그를 사용하는 중요한 가장 큰 이유는 자신의 홈페이지나 사이트등을 검색엔진의 상위에 링크시키거나 정확한 페이지정보를 제공하기
  하는 것이다.

  - 검색엔진의 검색알고리즘에는 여러가지가 있습니다. 그 중 한가지는
    바로 이 META 태그를 검색하는 것 입니다. META 태그의 키워드 및 내
    용 사용자 등의 정보로 검색엔진의 상위에 랭크가 될 수 있고 그로 인해 히트율을 높일 수 있습니다. 될 수 있으면 웹페이지마다 META 태그를 달아주면 홈페이지를 알리는데 도움이 된다.

- 메타태그 속성에는 http-equiv, name, content 3가지 속성이 있다.
  검색 엔진에 의해 검색되는 단어를 지정합니다.

### 검색엔진 관련 속성

- `<meta name="Keywords" content="Web, html, 웹 표준" />`

  - 검색 결과에 표시되는 문자를 지정합니다.

- `<meta name="Description" content="Web, html, 웹 표준" />`

  - 검색 로봇 제어

- `<meta name="Robots" content="noindex, nofollow" />`

  - 검색로봇에 대한 명령은 `<meta name="robots">`라는 형식으로 지정합니다.
  - content 속성에는 다음과 같이 지정할 수 있고 복수지정할 때에는 콤마(,)로 구분합니다.

  - All(기본값) : 'index, follow' 를 지정한 것과 같습니다.
  - None : 'noindex, nofollow' 를 지정한 것과 같습니다.
  - Index : 그 페이지를 수집 대상으로 합니다.
  - Follow : 그 페이지를 포함해 링크가 걸린 곳을 수집 대상으로 합니다.
  - Noindex : 그 페이지를 수집대상에서 제외합니다.
  - Nofollow : 그페이지를 포함해 링크가 걸린 곳을 수집 대상으로 하지 않습니다.
