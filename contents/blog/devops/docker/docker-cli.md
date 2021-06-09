---
title: Docker CLI
thumbnail: ./images/docker시작하기/thumbnail.png
date: 2020-09-22 18:00:00
category: Docker
tags: [Docker]
draft: false
---

## docker run

### → Run a command in a new container

![Run a command in a new container](./images/docker-cli/1.png)

```jsx
docker run hello world
```

→ **docker** : reference the docker client

→ **run** : try to create and run a container

→ **<image name>** : Name of image to use for this container

## docker ps

### → **List all running containers**

     (**실행중인 컨테이너 리스트 보기**)

```jsx
docker ps
docker ps --all
```

## docker create & start

### → **docker run** = `docker create` + `docker start`

### → **-a** 태그는 terminal에 결과를 print해주는 역할

     **(Attach STDOUT/STDERR and rward signals)**

![docker create & start](./images/docker-cli/2.png)

```docker
// Create a new container
docker create hello-world
```

```docker
// Start one or more stopped containers
docker start hello-world
```

## docker logs

### → Fetch the logs of a container

![Fetch the logs of a container](./images/docker-cli/3.png)

```docker
// Follow log output
docker logs --follow
```

```docker
// delete log
docker system prune
```

## docker stop & kill

### docker stop

     **SIGTERM signal**을 보낸 후, **10초 뒤**에 **SIGKILL signal**을 보내어 컨테이너를 죽임

### docker kill

     **SIGKILL signal**을 보내 컨테이너를 죽임

![docker stop & kill](./images/docker-cli/4.png)

```docker
docker stop hello world

docker kill hello world
```

## docker exec

### → Run a command in a running container

![docker exec](./images/docker-cli/5.png)

```docker
docker exec -it hello-world sh
```

**→ i : STDIN (input)**

**→ t : STDOUT (pretty formatting)**

**→ sh (shell로 연결가능)**

(**Ctrl + D or Exit 로 탈출**)