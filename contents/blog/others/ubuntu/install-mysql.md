---
title: Ubuntu 18.04에 MySQL 설치하기 (feat. docker)
thumbnail: 
date: 2021-06-17 12:00:00
category: Ubuntu
tags: [MySQL, Ubuntu]
draft: false
---

# 그냥 우분투에 설치하기

## 1. 우분투 서버 업데이트 및 Mysql -server 설치

```bash
$sudo apt-get update
$sudo apt-get install mysql-server

```

설치 중간 중간 Password를 물어보는데 빈칸으로 두고 OK를 누르면 Ubuntu 서버 비번과 동기화 됨


## 2. Mysql 기본 세팅
```bash
$sudo ufw allow mysql
$sudo systemctl start mysql
$sudo systemctl enable mysql

```

1) 외부 접속 기능 설정 (포트 3306 오픈)

2) Mysql 실행

3) Ubuntu 서버 재시작시 Mysql 자동 재시작

​

## 3. Mysql 접속
```bash
$sudo /usr/bin/mysql -u root -p

```
비번은 우분투 비번과 동일함

​

## 4. Mysql 버전 확인

mysql> show variables like "%version%";

​

## 5. Mysql 비번 변경 방법

mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('바꿀비번');
​

## 6. 사용자 등록 및 권한 설정

1) 사용자 정보 확인

mysql> SELECT User, Host, authentication_string FROM mysql.user;

2) aaa 라는 데이터 베이스 만들고 확인

mysql> CREATE DATABASE aaa;
mysql> SHOW DATABASES;

3) aaa 데이터베이스를 사용할 계정 bbb 만들고 확인

mysql> CREATE USER 'bbb'@'localhost' IDENTIFIED BY 'mysql비번';
mysql> FLUSH PRIVILEGES;
mysql> SELECT User, Host, authentication_string FROM mysql.user;

4) aaa 데이터베이스를 사용할 계정 bbb에 권한 부여

mysql> GRANT ALL PRIVILEGES ON 데이터베이스이름.* FOR'bbb'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql> SHOW GRANTS FOR'bbb'@'localhost';
mysql> SELECT User, Host, authentication_string FROM mysql.user;
​
# Docker를 이용한 MySQL 설치

## 0. Docker 설치
[Docker 설치 링크 참조](https://2oneweek.dev/others/ubuntu/install-docker)

설치 후 Docker 버전 확인
```bash
$ docker -v
Docker version 20.10.7, build f0df350

```


## 1. MySQL Docker image 다운로드

```bash
$ docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
bb79b6b2107f: Pull complete
49e22f6fb9f7: Pull complete
842b1255668c: Pull complete
9f48d1f43000: Pull complete
c693f0615bce: Pull complete
8a621b9dbed2: Pull complete
0807d32aef13: Pull complete
a56aca0feb17: Pull complete
de9d45fd0f07: Pull complete
1d68a49161cc: Pull complete
d16d318b774e: Pull complete
49e112c55976: Pull complete
Digest: sha256:8c17271df53ee3b843d6e16d46cff13f22c9c04d6982eb15a9a47bd5c9ac7e2d
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest

```

MySQL 버전을 지정하려면 태그에 버전을 지정한다. 다운로드할 수 있는 MySQL 버전은 docker hub에서 확인할 수 있다. 예를 들어, MySQL 8.0.22 버전을 다운로드하려면 다음과 같이 태그에 버전을 지정한다.

```bash
$ docker pull mysql:8.0.22
8.0.22: Pulling from library/mysql
Digest: sha256:8c17271df53ee3b843d6e16d46cff13f22c9c04d6982eb15a9a47bd5c9ac7e2d
Status: Downloaded newer image for mysql:8.0.22
docker.io/library/mysql:8.0.22

```

Docker 명령어를 통해 Docker image를 확인

```bash
$sudo docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
mysql        latest    c0cdc95609f1   5 weeks ago   556MB

```

## 2. MySQL Docker 컨테이너 생성 및 실행

```bash
$ docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest

```

Container 생성 및 실행 확인
```bash 
$ docker ps -a

```

## 3. MySQL Docker 컨테이너 시작/중지/재시작
```bash
# MySQL Docker 컨테이너 중지
$ docker stop mysql-container

# MySQL Docker 컨테이너 시작
$ docker start mysql-container

# MySQL Docker 컨테이너 재시작
$ docker restart mysql-container

```

## 4. MySQL Docker Container 접속

```bash
$sudo docker exec -it mysql-container bash

# 아래의 명령어를 통해 접속
root@14568416692d:/ mysql -u root -p

```