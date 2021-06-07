---
title: Express-TypeScript 설정
thumbnail: 
date: 2021-06-08 12:00:00
category: Sequelize
tags: [Express, TypeScript]
draft: false
---


### npm install

```bash
npm install dotenv express jsonwebtoken morgan mysql2 sequelize http-errors debug multer multer-s3 aws-sdk core-js cors
```

### 패키지

- Express 기본설정
    - http-errors
    - debug
    - core-js
    - cors
    - express
    - morgan

- Sequelize(Mysql)
    - mysql2
    - sequelize

- 환경변수 관리
    - dotenv

- NCP object storage
    - multer
    - multer-s3
    - aws-sdk

- 암호화
    - jsonwebtoken

### npm install -D

```bash
npm install -D @types/aws-sdk @types/core-js @types/cors @types/debug @types/dotenv @types/express @types/http-errors @types/jsonwebtoken @types/morgan @types/multer @types/multer-s3 @types/sequelize @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier nodemon prettier typescript ts-node
```

- TypeScript
    - typescript
    - ts-node
    - @types (type 정의를 위해 devDependency로 깔음)
- EsLint

    ```bash
    npx eslint --init
    ```

    - eslint
    - eslint-config-airbnb-base
    - eslint-config-prettier
    - eslint-plugin-import
    - eslint-plugin-prettier
    - @typescript-eslint/eslint-plugin
    - @typescript-eslint/parser
- Dev 서버 실행
    - nodemon
- Prettier
    - prettier

 

### Gitignore 설정

[http://gitignore.io](http://gitignore.io) 에 접속하여 원하는 환경설정을 넣고 생성 

- ex) node react dotenv macOs windows

### Babelrc.json 생성

```json
파일이름 : .babelrc.json
{
    "presets": ["@babel/preset-env"]
}
```

### Eslintrc.json 생성

```json
npx eslint --init
```

```json
파일이름 : .eslintrc.json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": { "prettier/prettier": "error" }
}
```

### Prettierrc.json 생성

```json
파일이름 : .prettierrc.json
{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSpacing": true
}
```

### Tsconfig.json 생성

```json
// 이 명령어를 통해 init 가능
npx tsc --init
```

```json
파일이름 : tsconfig.json

{
  "compilerOptions": {
     "lib": ["es5", "es6"],
      "module": "commonjs",
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "target": "es5",
      "noImplicitAny": true,
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "./build",
      "baseUrl": ".",
      "paths": {
          "*": [
              "node_modules/*",
              "src/types/*"
          ]
      }
  },
  "include": [
      "src/**/*"
  ]
}
```

### npm script

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"tsc && node build/app.js",
    "dev": "nodemon --exec ts-node src/app.ts"
  },
```

### app.js (간단.)

```tsx
import express, { Request, Response } from 'express'

class App {
  public application: express.Application

  constructor() {
    this.application = express()
  }
}

const app = new App().application

app.get('/', (req: Request, res: Response) => {
  res.send('start')
})

app.listen(3000, () => console.log('server listening 3000 port'))
```

- cf) package.json

    ```json
    {
      "name": "server",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start":"tsc && node build/app.js",
        "dev": "nodemon --exec ts-node src/app.ts"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "aws-sdk": "2.793.0",
        "core-js": "3.7.0",
        "cors": "2.8.5",
        "debug": "4.2.0",
        "dotenv": "8.2.0",
        "express": "4.17.1",
        "http-errors": "1.8.0",
        "jsonwebtoken": "8.5.1",
        "morgan": "1.10.0",
        "multer": "1.4.2",
        "multer-s3": "2.9.0",
        "mysql2": "2.2.5",
        "sequelize": "6.3.5"
      },
      "devDependencies": {
        "@types/aws-sdk": "2.7.0",
        "@types/core-js": "2.5.4",
        "@types/cors": "2.8.8",
        "@types/debug": "4.1.5",
        "@types/dotenv": "8.2.0",
        "@types/express": "4.17.9",
        "@types/http-errors": "1.8.0",
        "@types/jsonwebtoken": "8.5.0",
        "@types/morgan": "1.9.2",
        "@types/multer": "1.4.4",
        "@types/multer-s3": "2.7.8",
        "@types/sequelize": "4.28.9",
        "@typescript-eslint/eslint-plugin": "4.8.1",
        "@typescript-eslint/parser": "4.8.1",
        "eslint": "7.13.0",
        "eslint-config-airbnb-base": "14.2.1",
        "eslint-config-prettier": "6.15.0",
        "eslint-plugin-import": "2.22.1",
        "eslint-plugin-prettier": "3.1.4",
        "nodemon": "2.0.6",
        "prettier": "2.1.2",
        "ts-node": "9.0.0",
        "typescript": "4.0.5"
      }
    }
    ```

    참고자료

    - [TIL no.91 - TypeScript로 Express 시작하기](https://velog.io/@devzunky/TIL-no.91-TypeScript%EB%A1%9C-Express-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-zdk3x0xq0v)

    - [TypeScript로 Express 시작하기 - 1](https://gongzza.github.io/javascript/nodejs/typescript-express-starter-1/)

    - [TypeScript로 express 설정하기](https://velog.io/@ash/TypeScript%EB%A1%9C-express-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

    - [Typescript 환경 구성을 통한 Express 사용(Node.js express Typescript)](https://lts0606.tistory.com/330)

    - [[2019.05.28] TypeScript 사용법 (TypeScript+Express 구현)](https://helloinyong.tistory.com/124)

    - sequel 설정

    [node.js express + typescript + sequelize (ORM)](https://charlie-choi.tistory.com/227)