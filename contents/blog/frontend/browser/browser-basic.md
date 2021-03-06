---
title: Browser란?
thumbnail: 
date: 2020-08-26 12:00:00
category: Browser
tags: [Browser]
draft: false
---


# Browser

### 브라우저의 기능

- 사용자가 지정한 자원을 서버에 요청하고 브라우저에 표시한다.
  - 자원의 위치는 *URI(Uniformed Resource Identifier)*에 의해 결정된다.
  - 보통 자원의 종류는 HTML 문서지만, PDF나 이미지 등 다른 형태인 경우도 있다.
- 브라우저는 HTML과 CSS를 해석하여 화면에 보여준다.

<br>
<br>
<br>

## 브라우저의 구성 요소

![](https://i.imgur.com/GQNaN7V.png)

- 사용자 인터페이스
  - 주소 표시줄, 이전/다음 버튼 등, 페이지를 보여주는 창을 제외한 브라우저의 모든 부분
- **브라우저 엔진**
  - 사용자 인터페이스와 렌더링 엔진 사이의 동작을 제어
- **렌더링 엔진**
  - 요청한 콘텐츠를 표시하는 엔진이다. HTML과 CSS를 파싱하여 화면에 표시한다.
- 통신 부분
  - HTTP 요청과 같은 네트워크 호출에 사용된다.
- UI 백엔드
- 자바스크립트 해석기
  - 자바스크립트 코드 해석하고 실행
- 자료 저장소
  - 브라우저가 지원하는 웹 데이터 베이스. 쿠키와 같은 것이 저장된다.

> 크롬은 대부분 브라우저와 달리 각 탭마다 별도의 렌더링 엔진 인스턴스를 갖고 있다. 각 탭은 독립된 프로세스로 처리된다.

<br>
<br>
<br>

## 브라우저가 화면을 표시하는 순서

1. HTML을 로드한다.
2. HTML을 파싱해서 **DOM Tree**를 생성하기 시작한다.
3. HTML 파싱 중, Image, Video, CSS 등 HTML과 연결된 리소스들을 가져온 후, **CSSOM Tree**를 생성하기 시작한다.
4. DOM 트리와 CSSOM 트리를 합쳐서 **Render Tree**를 생성한다.
   - `<html>`과 같은 비시각적 요소는 렌더트리에 포함되지 않는다.
   - `display : none`의 경우 렌더트리에서 빠진다.
   - `position : fixed`와 같은 독립적인 노드들은 다른 루트의 트리를 가진다.(?다시 확인해야 함)
5. Render Tree **Layout** 단계(**플로우 단계**)를 시작한다.
   - Layout의 단어 뜻대로 실제로 "배치"를 하는 단계가 **아니다.** 요소가 어떤 스타일을 가져야 되는지에 대한 계산은 끝난 상태지만, **뷰포트 내에서 실제로 어디에 위치해야 하는지 확인하는 단계**다.
   - 즉, 노드가 어떤 모양과 크기를 가져야 하는지를 **계산**하는 단계다. 이때 `%`와 상대적인 값들은 모두 `px`단위로 변환된다.
6. 계산된 걸 토대로 실제 화면에 그리는 단계를 거친다.(**페인팅 단계**)
   - 처리해야 하는 스타일이 복잡할수록 Paint 단계에 소요되는 시간이 늘어난다.

<br>
<br>
<br>

## Reflow

- 최초의 flow 단계에선, render tree의 각 노드가 뷰포트 어디에 위치해야 되는지, 어떤 크기를 가져야하는지 계산하는 단계를 거친다고 위에 설명되어 있다.
- 최초의 flow 단계 이후 발생하는 flow를 **Reflow**라고 한다.

<br>

### Reflow 발생 원인

- Viewport 크기 변경(윈도우 리사이징)
- 요소의 위치가 수정되거나 크기가 변경되는 이벤트가 발생한 경우
- 요소가 추가/삭제 되는 경우

위와 같은 상황이 발생하면 브라우저는 Render Tree의 노드들의 뷰포트에서의 위치와 크기를 다시 계산하게 된다.

<br>

### Reflow가 일어나는 대표적인 속성

```
| position | left     | right    | top      | bottom   |
| display  | width    | height   | padding  | margin   |
| border   |   등등 size와 관련된 속성
```

<br>
<br>
<br>

## Repaint

- paint 단계는, flow 단계에서 계산된 위치와 크기를 가지고 배치를 하며 노드에 딸린 스타일을 화면에 그리는 작업이다.
- Reflow가 발생하면, 다시 계산된 수치대로 화면에 그리는 작업이 발생하게 된다. 다시 화면에 그리는 것을 **Repaint**라고 한다.
  - **그러나 Reflow 없이도 Repaint가 발생하는 경우가 있다.** 레이아웃에 영향을 주지 않는 스타일 속성(background-color, vsibility ...)이 변경된 경우에는 Repaint만 발생한다.

<br>

### Repaint가 일어나는 대표적인 속성

```
| background    | visibility      | box-shadow   | color  |
| border-radius | border-style    |  등등...
```

<br>
<br>
<br>

## Reflow와 Repaint 최소화하기

### Reflow나 Repaint를 발생시키는 속성 사용 최소화하기

- `transform`이나 `opacity`와 같은 속성은 repaint나 reflow를 발생시키지 않는다.
- 따라서 visibility나 display 대신 opacity를 이용하거나, left,right 대신 transform을 이용하는 것이 성능 개선에 도움 된다.

<br>
<br>

### `Position : absolute | fixed`

- 레이아웃 변화가 많은 요소의 경우 Position 속성의 값을 `absolute` 또는 `fixed`로 주면, render tree의 다른 요소들로부터 독립되어 영향 받는 주변 요소들을 없애 연산과 렌더링 과정을 줄일 수 있다.
- 애니메이션의 경우, 애니메이션 시작시 요소의 position을 absoulte나 fixed로 바꾼 후, 애니메이션이 끝났을 때 다시 원래대로 돌려놓는 방법은 reflow와 repaint 횟수를 줄일 수 있다.

<br>
<br>

> #### React의 Virtual DOM
>
> 리액트는 가상돔을 이용하여, 변경사항을 파악한 후 (몇 ms 동안 일어난 모든 변화를 종합해서) 딱 한 번 실제 DOM을 변경하게 된다. **가상돔 덕분에 Reflow, Repaint 횟수를 줄일 수 있게 된다.**


참고 자료

- https://d2.naver.com/helloworld/59361
- https://velog.io/@danbii/CSS%ED%8C%8C%EC%84%9C
- https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=ko
- https://tuhbm.github.io/2018/02/22/reflowAndRepaint/
- https://boxfoxs.tistory.com/408
