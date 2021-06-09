---
title: Express에서 환경변수 설정하기
thumbnail: 
date: 2020-08-01 12:00:00
category: Dotenv
tags: [Express, Dotenv]
draft: false
---

## Dotenv를 이용한 환경변수 설정하기

### 설치

- npm install dotenv

### 사용법

- 루트 폴더에 .env폴더를 만듬

```jsx
SERVER_PORT = DB server port
DB_HOST = DB host
DB_USER_NAME = DB 아이디
DB_PASSWORD = DB 비밀번호
DB_PORT = DB port
DB_DATABASE = DB database
PASSWORD_SALT = woeirbnLKTN@(5roJ@#J#@QdfwERQdf
SECRET_KEY = dfkluahweEIUTGNelEkrjs
```

- 위와 같이 설정
- 필요한 곳에서

```jsx
require("dotenv").config();
```

- process.env.변수명으로 접근한다.