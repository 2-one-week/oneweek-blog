---
title: Ubuntu 18.04에 도커 설치하기
thumbnail: 
date: 2021-06-17 12:00:00
category: Ubuntu
tags: [Docker, Ubuntu]
draft: false
---


# 도커란?
도커(Docker)는 응용 프로그램들을 소프트웨어 컨테이너 안에 배치시키는 일을 자동화하는 오픈 소스 프로젝트입니다.

가상머신(Virtual machine)과 비슷하지만 도커의 컨테이너는 더 이식성이 뛰어나고 리소스 친화적이며 호스트(Host) 운영 체제에 더 많이 의존합니다.

가상머신 환경에서는 게스트(Guest) 운영 체제가 존재하지만 도커의 컨테이너에는 게스트 운영 체제가 없으며 호스트 운영 체제 위에 도커 엔진이 동작됩니다.

따라서 일반적인 가상머신보다는 도커의 컨테이너가 더 빠르게 동작합니다.

# 도커 설치 방법

우분투(Ubuntu) 18.04 버전에서 도커(Docker) 설치 방법을 핵심만 정리했습니다.

```bash
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt update

apt-cache policy docker-ce

```

마지막 줄의 명령어를 입력하고 실행하게 되면 다음과 같은 메시지가 표시됩니다.

```bash
docker-ce:
  Installed: (none)
  Candidate: 18.06.1~ce~3-0~ubuntu
  Version table:
     18.06.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
     18.06.0~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages

```

마지막으로 다음 명령어를 실행해 도커를 설치할 수 있습니다.

```bash
sudo apt install docker-ce

```

아래 명령어로 도커가 정상적으로 실행 중인지 확인할 수 있습니다.

```bash
sudo systemctl status docker
```

```bash
# 결과

● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2018-08-24 07:20:49 UTC; 51s ago
     Docs: https://docs.docker.com
 Main PID: 4527 (dockerd)
    Tasks: 18
   CGroup: /system.slice/docker.service
           ├─4527 /usr/bin/dockerd -H fd://
           └─4549 docker-containerd --config /var/run/docker/containerd/containerd.toml

```