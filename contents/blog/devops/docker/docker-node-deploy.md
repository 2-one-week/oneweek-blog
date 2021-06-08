---
title: Docker로 Node.js 배포하기
thumbnail: 
date: 2020-09-23 18:00:00
category: Deploy
tags: [Docker, Deploy]
draft: false
---

### .dockerignore로 node_modules 무시하기

```python
node_modules/

```

### Dockerfile 작성

- vi Dockerfile
    - 확장자명 없음

```docker
FROM node:14

# 얘를 써야 server.js 가능함
# 카피 하는 거임
COPY ./ ./

# npm install 하는 과정
COPY package.json /package.json
RUN npm install

COPY package.json /client/package.json
RUN cd /client; npm install

EXPOSE 5000

# build 후에 돌리기
WORKDIR /client
CMD npm run build

WORKDIR /
CMD npm run start
```

### Docker build

- 위 파일을 기준으로 docker를 빌드하는 과정
- 도커를 빌드한 후, tag를 달아서 docker hub에 푸시한다.

```docker
docker tag account_book:0.0.0 2oneweek/account_book:oneweek
```

```docker
docker push 2oneweek/account_book:oneweek
```

- 참고 자료

    - [Docker 로 Node.js 배포하기](https://seokjun.kim/docker-nginx-node/)

    - [Docker 이미지 만들기 & 배포하기](https://jgtonys.github.io/blog/2019/08/13/docker-image-upload/)