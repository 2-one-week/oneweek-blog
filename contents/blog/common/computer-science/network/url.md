---
title: DNS
thumbnail: 
date: 2020-08-23 12:00:00
category: CS
tags: [Network]
draft: true
---

### URI (Uniform Resource Identifier)

웹 서버가 리소스를 고유하게 식별할 수 있도록 하는 것

### URL

URL이 무엇이고 어떻게 구성되어 있을까?

[Hypertext](https://developer.mozilla.org/en-US/docs/Glossary/Hypertext)와 [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) 함께, `URL` 은 웹에서 중요한 개념 중 하나이다. `URL`은 웹에 게시된 어떤 자원을 찾기 위해서 [browsers](https://developer.mozilla.org/en-US/docs/Glossary/Browser)에 의해 사용되는 메카니즘이다.

`URL`은 Uniform Resourece Locator(인터넷에서 리소스 위치)를 말한다. URL은 웹에서 정해진 유일한 자원의 주소일 뿐이다.

`URL`의 구조는 프로토콜 식별자와 자원이름으로 구성되있다.

- 정규 표현식 다양한 문법을 종류를 학습하고 구현에 필요했던 내용을 중심으로 정리한다.
- 권장하는 모듈 의존성 관리 방법을 학습하고 미션을 진행하면서 사용한 방법과 사용하지 않은 방법을 구분해서 정리한다.
- 특정 서버의 한 리소스에 대해 구체적인 위치를 서술합니다.

`URL 구조`

- 스킴에 따라 문법이 다르지만, 아래의 구조를 기반으로 선택적으로 사용
- `<스킴>://<사용자이름>:<비밀번호>@<호스트>:<포트>/<경로>?<질의>#<프레그먼트>`

### 스킴 (scheme)

사용할 프로토콜 : 리소스에 어떻게 요청, 접근할 것인지 명시

웹에서 주로 HTTP 프로토콜을 사용

ftp(파일), mailto(이메일), rtsp(스트리밍)과 같은 프로토콜 사용가능

### HTTP

- http는 프로토콜(규약)이다.
- URL의 첫 파트는 브라우저가 어떤 규약을 사용해야 하는 지를 나타낸다.
- 프로토콜은 컴퓨터 네트워크에서 데이터를 교환하거나 전송하기 위한 방법들의 세트이다.

### File URI

[file URI scheme](https://en.wikipedia.org/wiki/File_URI_scheme)

### 사용자 이름과 비밀번호

일부 서버는 자신이 가지고 있는 데이터에 접근하기 위해서 사용자의 이름과 비밀번호 요구

ex) [ftp://victolee:12345@호스트/asd.xls](ftp://victolee:12345@호스트/asd.xls)

if (웹 서버에서 사용자 이름과 비밀번호를 요구하는 URL스킴을 사용 

& 클라이언트가 이를 명시하지 않고 URL에 접근) 

기본값 == "사용자 이름 : anonumous, 비밀번호 : 브라우저에서 제공하는 기본 값"

### Host & Port

하나의 Host(컴퓨터)에는 여러 개의 Process(프로그램)이 각각의 Socket을 사용해 통신

이 때 소켓을 구분하는 역할이 Port(포트)

서버에는 포트에 따라 소켓이 연결되어 있음

포트 번호에 따라 다른 프로토콜 사용 가능

HTTP에서 포트 번호를 명시하지 않으면, 80번 포트를 기본 값으로 사용(Well-known port)

ex) [http://www.google.com:80](http://www.google.com:80) 

### Port

- 포트는 기술적으로 웹 서버에서 자원에 접근하기 위해 사용하는 gate를 말한다.
- 만약 웹 서버가 자원의 접근하기위해 표준 HTTP 포트를 사용한다면, 포트번호는 보통 생략한다. 그렇지 않다면 포트 번호는 필수이다.

    ### 경로

    호스트에서 제공하는 자원의 경로

    ex) [https://movie.naver.com/movie/runnung/current.nhn](https://movie.naver.com/movie/runnung/current.nhn)

### Path

- 초기 웹에서는 웹 서버상에서 물리적 파일 위치를 나타냈다.
- 요즘에는 실제 물리적 경로를 나타내지않고 웹 서버에서 추상화하여 보여준다.

### Query String

클라이언트가 자원을 GET방식으로 요청할 때, 필요한 데이터를 함께 넘겨 줄 목적으로 사용

개발할 때 함수를 호출 시, 파라미터를 던져주는 것과 같은 원리

ex) [http://localhost:3000/index?id=3&page=1](http://localhost:3000/index?id=3&page=1)


### URL Encoding

### URL Encoding 은 무엇이고, 왜 필요할까?

URL 인코딩은, URL 스트링에 있는 텍스트를 모든 브라우저에 동일하게 전송하기 위해 존재한다.

인터넷에서의 URL 은 ASCII 문자열을 이용해서만 전송될 수 있는데, 그렇지 않게 전송한 경우, 브라우저의 특성에 따라, question mark(?), ampersand(&), 슬래쉬(/), 공백문자 같은 특수문자의 경우, 잘리거나 (의도치 않게) 변형이 될 수 있다. 그래서, 이런 특수문자는, 인코딩이 되는 것이 좋다. ASCII 에 포함되지 않는 문자들(한글, 일본어 등등)은 더더욱 encoding 이 필요하다.

인코딩은 `%octet` 형태로 만들어 주는 것이다.(예 : # 는 %23) - 영어로 escapted octet 이라 부른다.

그러면 `?`는 모두 다 `%3F`로 바꿔도 될까?정답은 아니다!