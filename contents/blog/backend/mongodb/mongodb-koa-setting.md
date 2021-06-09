---
title: koa, mongoDB를 적용한 개발 환경 설정하기
thumbnail:
date: 2021-03-04 18:00:00
category: Backend
tags: [MongoDB, Koa]
draft: false
---


## 목표

백엔드로 koa프레임워크를, 데이터베이스를 mongoDB를 적용한 개발 환경 설정하기

### 1. 프로젝트 생성하기

### (1) 패키지 정보 생성

```bash
npm init --y

```

### (2) ESLint & Prettier 설정

```bash
npm i -D eslint eslint-config-prettier

```

```javascript
// .eslintrc.js
module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "semi": [
            2
        ],
        "no-trailing-spaces": 0,
        "keyword-spacing": 0,
        "no-unused-vars": 1,
        "no-multiple-empty-lines": 0,
        "space-before-function-paren": 0,
        "eol-last": 0
    }
};

```

```json
//.prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}

```

### (3) Koa 프레임워크 적용하기.

> express 프레임워크와 대체적으로 비슷한 구조를 보임
>> req,res 대신에 `ctx` 사용한다

```bash
npm i koa koa-router koa-bodyparser

```

```javascript
src/index.js
require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const port = process.env.PORT || 4000;

app.use(bodyParser());

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log('koa server is listening to port ' + port);
});

```

```javascript
// api/index.js
const Router = require('koa-router');

const api = new Router();

api.get('/books', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

module.exports = api;

```

### (4) MongoDB 서버 설치

- > [brew](https://brew.sh/index_ko)가 이미 설치 되어있어야함.

```bash
brew tap mongodb/brew
brew install mongodb-community@4.2
sudo mkdir -p /Users/[username]/data/db

```

### (5) Mongoose 설치 및 적용

- > Mongoose 는 MongoDB 기반 ODM (Object Data Modelling) 라이브러리이며, 스키마형태로 데이터를 관리할 수 있게 도와주는 역할

```bash
npm i dotenv mongoose

```

```bash
//.env.sample
PORT =
SOCKET_PORT =
DB_ID =
DB_PW =
DB_HOST =
DB_DATABASE =

```

```javascript
// init/dbconnect.ts
import mongoose from 'mongoose';
const { DB_ID, DB_PW, DB_HOST, DB_DATABASE } = process.env;
const MONGO_URI = `mongodb://${DB_ID}:${DB_PW}@${DB_HOST}/${DB_DATABASE}`;

const connectDB = () => {
  // mongodb 연결
  return mongoose
    .connect(MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('Successfully connected to mongodb');
    })
    .catch((e) => {
      console.error(e);
    });
};

export default connectDB;

```