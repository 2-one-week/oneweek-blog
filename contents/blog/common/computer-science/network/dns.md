---
title: DNS
thumbnail: ./images/dns/thumbnail.png
date: 2020-08-22 12:00:00
category: CS
tags: [Network]
draft: false
---

# Domain

##### IP와 Domain

컴퓨터가 네트워크에 연결되면 host라고 칭하게 된다.<br>
host는 네트워크 상 어디에 존재하는지 논리적인 주소인 IP를 갖게된다. <br>
Domain은 IP와 맵핑된다. Domain이 없으면, 매번 사이트를 들어갈 때마다, ip를 외우고 있어야 하는 번거로움이 생긴다. 편의를 위해 Domain이 등장했다. <br>
우리가 URL 안에 Domain을 입력하면, 브라우저는 Domain을 IP로 변환하려고 하는데, 변환하는 서비스를 해주는 것이 **_DNS_**다.

- 하나의 Domain에 여러개의 IP를 MAPPING 할 수 있다. 이런 경우는 보통 **Load balancing**을 위해서 사용된다. 혹은 하나의 host가 사용 불가능 할 때, 다른 host로 대체하기 위해서 사용한다.

##### URL과 Domain

URL은 Domain을 포함하고 있다.<br>
URL은 http://도메인/aaa/bbb/로 원하는 리소스의 경로를 담고 있는 것이다. <br>

<br>
<br>

# DNS (Domain Name Service)

- Domain을 변환해서, 실제 요청이 도착해야 하는 Host의 네트워크 상 주소(IP)를 반환해주는 서비스다.
- DNS를 제공하는 Server는 **분산 데이터베이스**형태로 구성되어 있다. 그렇지 않으면, 전세계의 요청이 한 곳으로 모이게 되고, 물리적인 거리에 의해 IP 주소를 알아오는데 오랜 시간이 걸리게 된다.
- DNS는 **계층적 구조**를 보인다. 최상위에 위치한 Root DNS Server는 TLD(Top level Domain)이라 불린다.


# IP주소 대신에 DNS를 사용하는 이유가 무엇일까 

- 인터넷 서버들을 유일하게 구분할 수 있는 것은 IP 주소이다.

- 하지만 이런 IP주소를 기억하기 편한 언어체계로 변환하는 작업이 필요!

- 이를 해결하기 위해 나온 개념이 DNS


<br>
<br>

### DNS의 계층적 구조

트리 형태를 보인다.<br>
보통 DNS 서버들은 요청마다 발생하는 DNS간 문의를 줄이기 위해, 캐싱한다<br>
캐싱이 내용이 DNS의 변경을 반영하지 못하는 것을 막기 위해, 주기적으로 상위, 하위 DNS에 접근하여 최신 내용으로 업데이트함<br>

1. Root Domain 서버

   - 전 세계에 13개(아마도)로 분산되어 존재한다.
   - 다음 레벨인 최상위 도메인 서버를 관리하는 역할을 한다.

2. TLD(Top Level Domain)최상위 도메인 서버

   - .com, .edu, .net, .kr, .jp 와 같이 우리가 url 제일 마지막에 붙이는 것과 국가의 약어처럼 DNS 서버가 구성되어 있다.
   - naver.com, daum.net과 같이 실제 서비스되는 IP를 들고 있는 서버다.

3. SLD(Second Level Domain)

   - google.co.kr 처럼 .co가 SLD다.
   - gabia.com 처럼, SLD가 존재하지 않을수도 있다.
   - SLD는 도메인의 아이덴티티를 구체화하는 역할을 하는데, 도메인 이름이 짧을 수록 외우기 좋으므로 SLD를 없애는 구조도 존재한다.
     - SLD가 없는 형태의 도메인(도메인 이름.TLD)을 **2단계 도메인**이라 한다.
     - SLD가 있는 형태의 도메인(도메인 이름.SLD.TLD)를 **3단계 도메인**이라 한다.

4. 책임 DNS 서버

   - 하나의 Domain 영역에는 여러개의 host가 존재한다.
   - Domain 안에 www라는 웹 서버(호스트)나, 메일 서버(호스트)가 존재하기 때문에, 요청에 맞는 서버에 보내주기 위해 사용한다.

<br>
<br>

### 로컬 DNS 서버

- 도메인 영역, 예를 들어 hufs.ac.kr 자체에 마련한 DNS 서버다.
- 도메인 영역의 책임 DNS는 host와 요청에 담긴 도착지를 mapping 하는 것이라면, 로컬 DNS는 **IP주소를 캐싱**하는 서버라고 생각하면 된다.
- 한 도메인 영역에서, 외부로 나가는 요청이 발생할 때, 요청 대상의 IP를 캐싱해둬서, 외부로 나가는 통신을 줄일 수 있다.

<br>
<br>

### 브라우저에 naver.com 을 입력하면 벌어지는 일

1. 유저가 naver.com을 브라우저에 입력한다.
2. 브라우저는 HTTP 요청을 만들기 위해, naver를 ip로 변환하려 한다.
3. Local DNS에게 질의한다.
4. Local DNS에 캐싱되어 있으면 바로 변환해서 HTTP 메세지를 만들고 요청을 보낸다.
5. 캐싱되어 있지 않으면 Root DNS로 찾아가서 .com DNS의 주소를 알아온다.
6. .com DNS로 가서 naver.com의 DNS 주소를 알아온다.
7. naver.com DNS(**Naver의 책임 DNS**)로 가서, www.naver.com의 **IP**를 알아온다.
   - host를 명시 안하면, 내부적으로 www의 host를 알아온다.
8. HTTP 메세지를 만들고 브라우저는 트랜스포트 계층으로 넘긴다.
   - 트랜스포트 계층에선 내부적으로 TCP or UDP 프로토콜에 맞는 데이터를 부가
   - OSI 7계층을 쭉 타고 내려가서 요청이 실제로 전송되는 것
