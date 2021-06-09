---
title: MySQL 명명법
thumbnail: 
date: 2020-08-27 12:00:00
category: MySQL
tags: [MySQL]
draft: false
---

## Mysql

- Entity : Table
- Attribute : Column
- Relation : PK, FK
- Tuple : Row
    

### ERD 짜기 (예시)

1. user는 여러개의 project를 가질 수 있다.
2. project는 여러명의 user를 가질 수 있다.
3. project는 여러개의 status을 가질 수 있다.
4. project는 여러개의 log를 가질 수 있다.
5. column은 여러개의 post를 가질 수 있다.
6. user는 여러개의 post를 작성할수 있다.

### 데이터베이스 명명법

#### **공통**

- 소문자를 사용한다.
- 단어를 임의로 축약하지 않는다.
- 가능하면 약어의 사용을 피한다.
- 동사는 능동태를 사용한다.

#### **Table**

- 단수형을 사용한다.
- 이름을 구성하는 각각의 단어를 underscore로 연결하는 snake case를 사용한다.
- 교차 테이블(many-to-many)의 이름에 사용할 수 있는 직관적인 단어가 있다면 해당 단어를 사용한다.
- 적절한 단어가 없다면 relationship을 맺고 있는 각 테이블의 이름을 "*and*" 또는 "*has*"로 연결한다.
- 예
    - article, movie : 단수형
    - VIP_member : 약어는 대문자 * 단어의 연결에 underbar를 사용
    - article_and_movie : 교차 테이블을 "*and*"로 연결

#### **Columnauto increment** 

- 속성의 PK를 대리키로 사용하는 경우, "테이블 이름" _id의 규칙으로 명명한다.
- 이름을 구성하는 각각의 단어를 underscore로 연결하는 snake case를 사용한다.
- foreign key 컬럼은 부모 테이블의 primary key 컬럼 이름을 그대로 사용한다.
- self 참조인 경우, primary key 컬럼 이름 앞에 적절한 접두어를 사용한다.
- 같은 primary key 컬럼을 자식 테이블에서 2번이상 참조하는 경우, primary key 컬럼 이름 앞에 적절한 접두어를 사용한다.
- Boolean 유형의 컬럼이면 "_flag"접미어를 사용한다.
- date, datetime 유형의 컬럼이면 "_date" 접미어를 사용한다.
- 예
    - article_id, movie_id : "테이블 이름" + "_id"
    - complete_flag : boolean 유형의 컬럼
    - issue_date : 날짜 유형의 컬럼

#### **Index**

- 이름을 구성하는 각각의 단어를 hyphen 으로 연결하는 snake case 를 사용한다
- 접두어
- unique index : uix
- spatial index : six
- index : nix
- "접두어"-"테이블 이름"-"컬럼 이름"-"컬럼 이름"
- 예
    - uix-account-login_email

Foreign Key

- 이름을 구성하는 각각의 단어를 hyphen 으로 연결하는 snake case를 사용한다.
- "fk"-"부모 테이블 이름"-"자식 테이블 이름"같은 부모 - 자식 테이블에 2개 이상의 foreign key 가 있는 경우, numbering 합니다.
- 예
    - fk-movie-article : article 테이블이 movie 테이블을 참조
    - fk-admin-notice-1 / fk-admin-notice-2 : notice 테이블이 admin 테이블을 2회 이상 참조

#### **View**

- 접두어 "v"를 사용한다.
- 기타 규칙은 TABLE과 동일
- 예
    - v_privilege

FUNCTION

```
1.	접두어 "usf"를 사용한다.
2.	이름을 구성하는 각각의 단어를 underscore 로 연결하는 snake case 를 사용한다.
3.	예
1.	usf_random_key

```

#### **TRIGGER**

- 이름을 구성하는 각각의 단어를 underscore 로 연결하는 snake case 를 사용한다.
- 접두어tra : AFTER 트리거trb : BEFORE 트리거"접두어"*"테이블 이름"*"트리거 이벤트"
- 예
    - tga_movie_ins : AFTER INSERT 트리거
    - tga_movie_upd : AFTER UPDATE 트리거
    - tgb_movie_del : BEFORE DELETE 트리거