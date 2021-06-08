---
title: Jenkins 설치하기 (feat. ubuntu 16.04)
thumbnail: ./images/jenkins-start/thumbnail.png
date: 2020-09-21 18:00:00
category: Jenkins
tags: [Jenkins]
draft: false
---

## Jenkins 설치

## 꼭 서버 update이후에 설치하기

## 꼭 잰킨스도 수도 권한 주기

### 자바 8 버전 설치

```bash
sudo apt install openjdk-8-jre
```

### Jenkins 설치를 위한 repository key, repository 추가 후 설치

```bash
sudo wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

- 위와 같이 apt-get으로 설치하면 기본 포트인 8080으로 접속이 안됨
- 해결책
    - 아예 안떴는데 NCP에서 ACG port를 안열어줘서 생긴 일이였다..

### Jenkins port 확인하기

```bash
sudo apt-get install nmap
nmap localhost
```

### Jenkins port 바꿔 주기

```bash
sudo vi /etc/default/jenkins

HTTP_PORT=8082 <- 이부분 바꿔주기
```

### Jenkins 시작, 정지, 재시작

```bash
sudo service jenkins start
sudo service jenkins stop
sudo service jenkins restart
```

### Jenkins 상태보기

```bash
sudo systemctl status jenkins
```

### Jenkins 비밀번호 확인

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### Ubuntu 'sudo:unable to resolve host' 에러

```bash
sudo vi /etc/hostname 의 name복사

sudo vi /etc/hosts 의 127.0.1.1에 대입

/etc/init.d/networking restart 재시작
```

- host error 참고 자료

    [우분투 sudo : unable to resolve host 에러 메시지 해결 - 일러스튜디오 블로그](https://blog.illustudio.co.kr/2017/03/02/%EC%9A%B0%EB%B6%84%ED%88%AC-sudo-unable-resolve-host-%EC%97%90%EB%9F%AC-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%95%B4%EA%B2%B0/)