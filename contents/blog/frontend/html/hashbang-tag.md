---
title: HashBang Tag
thumbnail: 
date: 2020-08-24 12:00:00
category: HTML
tags: [HTML]
draft: false
---

### 프래그먼트

HTML에는 각각의 요소에 id 속성을 부여할 수 있음

URL에 프래그먼트를 전달하면 페이지가 해당 id가 있는 곳으로 스크롤이 이동

- 가장 마지막으로 이동

    ex) http://victorydntmd.tistory.com/287#bottom

### Anchor

- An anchor는 일종의 자원 안에서 "bookmark"이다. 즉, "bookmarked" 지점에 위치된 내용을 보여주기 위해 브라우저에게 방향을 알려준다.
- #뒤에 오는 부분(#SomewhereInTheDocument)은 가치가 없다.
- 또한, fragment identifier(부분 식별자) 라고 알려져, 요청이 서버에 절대 보내지지 않는다.

### Hash Bang (현재 블로그에도 적용되어있다 (pc 버전))

- 해시뱅이 필요한 이유는 단일 페이지 웹애플리케이션을 만들기 위해서
- 페이지가 갱신되지 않는 것이 중요한데 현재 기술로는 페이지 갱신없이 URL을 변경할 수 있는 방법이 없습니다.
- 그렇기 때문에 페이지 갱신없이 URL이 변경되는 것처럼 보이도록 하기 위해서 해시뱅을 사용하는 것입니다. 해시뱅에서 #뒤에 이는 부분을 fragment identifier라고 부릅니다.

- 참고자료
    - [https://blog.outsider.ne.kr/698](https://blog.outsider.ne.kr/698)