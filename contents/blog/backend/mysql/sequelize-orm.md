---
title: Sequelize ORM
thumbnail: 
date: 2021-06-08 12:00:00
category: Sequelize
tags: [MySQL, Sequelize]
draft: false
---


## **Sequelize ORM**

ORM : Object Relational Mapping

- 객체와 데이터를 매핑
- 대부분의 ORM은 SQL Injection 대응도 지원

간단한 쿼리에 사용하기는 좋지만, 복잡한 쿼리를 사용하려면 어차피 SQL로 처리해야 함

### **패키지 설치**

```
$ npm i sequelize sequelize-cli mysql2

```

### **sequelize 초기화**

```
$ npx sequelize init

```

- 자동으로 `models/index.js`, `config/config.json` 생성됨
- 상황에 맞게 두 파일 수정
- 여러 개의 DB 연결 가능

### **`App.js` 작성**

- DB 연결할 JS 코드 작성
- `models/index.js` 에 있는 sequelize 가져와서
- `sequelize.sync()`로 연결

```
const { sequelize } = require("./models");
sequelize
    .sync({ force: false })
    .then(() => console.log("DB 연결 성공!"))
    .catch((err) => {
        console.error(err);
    });

```

`App.js` 실행시 아래와 같이 뜨면 연결 성공

```
# sequelize에서 test query 날림
Executing (default): SELECT 1+1 AS result
DB 연결 성공!

```

### **Model 생성**

DB에 Table 생성하는 방법

- SQL Query 직접 입력
- SQL Workbench 활용
- ***Sequeilze Model 생성***

주의할 점

- `sequelize`는 id 자동생성해줌
- datatype 명칭이 SQL과 조금 다름
    - int -> integer
    - varchar -> string
    - (bool type X) -> boolean (true/false로 입력)
    - datetime -> date
    - date -> dateonly

```
module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        // super.init( '컬럼 정보', '테이블/모델 정보' )
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                age: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false,
                },
                married: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                comment: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                // timestamp : true(default) -> createdAt,updatedAt 자동생성
                timestamps: false,
                // underscored : true -> snake_case 로 컬럼명 생성
                underscored: false,

                // paranoid: true -> deletedAt 자동생성, soft delete
                paranoid: false,

                // sequeilize는 기본적으로 modelName은 대문자, tableName은 `소문자+s`로 이름 생성
                // modelName: JS에서 사용하는 모델 명
                modelName: "User",
                // tableName: SQL에서 사용하는 table 명
                tableName: "users",

                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            },
        );
    }
};

```

### **관계 정의하기**

### **`users` 모델 - `comments` 모델 관계**

- 1:N 관계
- sequelize는 `hasMany`로 표현, `db.User.hasMany(db.Comment)`
- 반대 입장에서는 `db.Comment.belongsTo(db.User)`
- `belongsTo`가 있는 테이블에 컬럼이 생김

```
// user.js

static associate(db) {
    db.User.hasMany(db.Comment, {
        foreignKey: "commenter",
        sourceKey: "id",
    });
}

```

```
// comment.js

static associate(db) {
    db.Comment.belongsTo(db.User, {
        foreignKey: "commenter",
        targetKey: "id",
    });
}

```

### **1:1 관계인 경우**

ex. User - UserInfo

- UserInfo 내용이 많은 경우 빠른 검색을 위해 일부러 나누는 경우 있음
- 빈번, 중요도, 보안 등 목적으로 하나의 table을 두 개 이상 table로 나눌 수 있음

```
db.User.hasOne(db.UserInfo, { foreignKey: "UserId", sourceKey: "id" });
db.UserInfo.belongsTo(db.User, { foreignKey: "UserId", targetKey: "id" });

```

### **N:M 관계인 경우**

ex. 게시글 - 해시태그

- DB 특성상 N:M 관계는 중간 table 필요
- sequelize에서 중간 table 자동 생성; `through` 옵션

```
db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });

```

### **SQL - Sequelize Query 비교**

다른 db 관련 method들처럼, sequelize query들도 ***Promise 객체***

### **INSERT, SELECT**

```
INSERT INTO test.users (name, age, married, comment) VALUES ('gitgitwi', 30, 1, '아싸 1빠');

SELECT * FROM test.users;

SELECT name, married FROM test.users;

```

```
User.create({
    name: "gitgitwi",
    age: 30,
    married: true,
    comment: "아싸 1빠",
});

User.findAll({});

User.findAll({
    attributes: ["name", "married"],
});

```

### **Conditional Statement**

```
SELECT name, age FROM test.users WHERE married=1 AND age>30;

SELECT name, age FROM users WHERE married=0 OR age>30;

```

```
const { Op } = require("sequelize");

User.findAll({
    attributes: ["name", "age"],
    where: {
        married: true,
        age: { [Op.gt]: 30 },
    },
});

User.findAll({
    attributes: ["name", "age"],
    where: {
        [Op.or]: [{ married: false }, { age: { [Op.gt]: 30 } }],
    },
});

```

`Sequelize.Op` : operators

- `gt`: greater than
- `gte`
- `lt`: less than
- `lte`
- `in`
- `ne`: not equal

### **Order by**

```
SELECT id, name FROM users ORDER BY age DESC;
SELECT id, name FROM users ORDER BY age DESC LIMIT 1;
SELECT id, name FROM users ORDER BY age DESC LIMIT 1 OFFSET 1;

```

`attributes`가 2차원 배열인 이유

- 정렬 조건을 여러개 사용 가능
- ex.

```
order: [
    ["age", "DESC"],
    ["createdAt", "asc"],
];

```

```
User.findAll({
    attributes: ["id", "name"],
    order: [["age", "DESC"]],
});

User.findAll({
    attributes: ["id", "name"],
    order: [["age", "DESC"]],
    limit: 1,
});

User.findAll({
    attributes: ["id", "name"],
    order: [["age", "DESC"]],
    limit: 1,
    offset: 1,
});

```

### **Update, Delete**

```
UPDATE test.users SET comment='내용이 바뀐다' WHERE id=2;
DELETE FROM test.users WHERE id=2;

```

```
User.update(
    {
        comment: "내용이 바뀐다",
    },
    {
        where: { id: 2 },
    },
);

User.destroy({
    where: { id: 2 },
});

User.destroy({
    where: { id: { [Op.in]: [1, 3, 5] } },
});

User.destroy({
    where: { id: { [Op.ne]: 5 } },
});

```

### **관계 Query; `JOIN`**

- sequelize query의 결과값은 JS Object
- `include`로 `JOIN`과 비슷한 기능 수행 가능
    - `include`는 한번에 요청하는 대신 성능 문제 발생 가능

```
// const user = await User.findOne({});
// console.log(user.nickname);

// User + Comment -> 사용자가 작성한 댓글 목록
const user = await User.findOne({
    include: [
        {
            model: Comment,
        },
    ],
});

console.log(user.Comments);

// 또는 `get모델명` 활용
const user = await User.findOne({});
const comments = await user.getComments();
console.log(comments);

```

N:M 모델인 경우

```
db.sequelize.models.PostHashTag;

```

`as`로 모델 별칭 등록

```
// 관계 설정시 `as 별칭`으로 등록
db.User.hasMany(db.Comment, {
    foreignKey: "comment",
    sourceKey: "id",
    as: "Answers",
});

const user = await User.findOne({});
const comments = await user.getAnswers();
console.log(comments);

```

`include` + `where` + `attributes`

```
const user = await User.findOne({
    include: [
        {
            model: Comment,
            where: {
                id: 1,
            },
            attributes: ["id"],
        },
    ],
});

// 또는
const comments = await user.getComments({
    where: {
        id: 1,
    },
    attributes: ["id"],
});

```

생성 query

```
const user = await User.findOne({
    where: { id: req.body.id },
});

const comment = await Comment.create({
    comment: req.body.comment,
});

await user.addComment(comment);
// 또는
await user.addComment(comment.id);

```

여러개 추가할 경우 배열 사용

```
const comment1 = await Comment.create();
const comment2 = await Comment.create();

await user.addComment([comment1, comment2]);

```

수정/삭제하는 경우에는 `set모델명`, `remove모델명`

### **직접 SQL 사용해야 하는 경우**

```
const [result, metadata] = await sequelize.query("SELECT * FROM comments");
```