---
title: NCP 초기설정하기
thumbnail: 
date: 2020-09-21 18:00:00
category: NCP
tags: [NCP]
draft: false
---

## NCP 설정

1. root로 들어감
    - ssh root@"서버 공인 ip" -p "포트포워딩한 포트"
    - ssh root@"public ip"  로 그냥 접근 가능 (포트포워딩을 삭제해야됨)
2. adduser "유저 이름"
    - root password는 건드리지 않는게 좋음
3. userdel "유저이름"
    - 유저 지우고 싶을 떄 사용
4. root에서 추가된 user에 권한주기
    - 명령어
        - sudo vi /etc/sudoers

```shell
# User privilege specifications

root    ALL=(ALL:ALL) ALL
ONEWEEK ALL=(ALL) NOPASSWD: ALL

```

5. password치기 귀찮을때, 서버로 키 옮기기 (직접 비번 치는것보다 안전)
    - local에서 ssh-keygen → 엔터치면 자동 생성 → 비번 설정하지 말기 → id_rsa.pub가 공개키
    - 복사하기
        - cd ~/.ssh 로 이동
        - scp id_rsa.pub oneweek@'서버 아이피':/home/oneweek
    - oneweek로 서버접속
        - mkdir .ssh
        - cat id_rsa.pub >> .ssh/authorized_keys 을 통하여 추가해주기
        - 끝