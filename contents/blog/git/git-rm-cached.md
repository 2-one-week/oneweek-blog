---
title: git ignore가 되지 않을때
thumbnail: 
date: 2021-06-08 12:00:00
category: Git
tags: [Git]
draft: false
---

### Git ignore가 되지 않을때는 git cache가 문제가 됨.

- git ignore이 잘 되지 않을때
    - git의 캐시가 문제가 되는거라 아래 명령어로 캐시 내용을 전부 삭제후 다시 add All해서 커밋

```jsx
git rm -r --cached .
```