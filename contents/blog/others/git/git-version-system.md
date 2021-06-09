---
title: Git 이란 & Git 정리
thumbnail: 
date: 2020-08-17 12:00:00
category: Git
tags: [Git]
draft: false
---

## Git 이란?

### VCS 버전관리 시스템

- **로컬 VCS**

    - 서버 없이 로컬 컴퓨터 내에서 버전을 관리

- **중앙집중식 VCS**

    - 서버에 최종본 한 벌이 존재하고 사용자들은 '수정을 원하는 파일만' 로컬에 받아 수정한 후 서버에 업로드

- **DVCS**(Distributed Version Control System) : 분산 버전 관리

    - 중앙 서버에 있는 코드를 개발자의 각 로컬 컴퓨터에 복사한 후, 복사된 프로젝트를 가지고 작업한 후 서버에 업로드


1. VCS 로컬 방식 : RCS, SCCS

2. CVCS 중앙 서버 방식 : Subversion(SVN), CVS, Perforce, ClearCase, TFS

3. DVCS 분산 저장소 방식 : Git, Mercurial, Bitkeeper, SVK, Darcs

<br />

## Git 명령어

- `init` : git의 시작. 지정한 폴더의 변경 내용을 추적하기 위한 준비로 git 저장소를 만듬.
    - init 명령으로 저장소 생성 시 `master`라는 이름의 브랜치가 기본 생성되어야 한다.

- `status` : commit 되지 않은 변경 사항들을 조회

    - 디렉토리 내부의 untracked/tracked 파일들, staged 파일들, commit 할 내용 등 git 상태 정보를 출력한다

- `checkout` : 다른 작업 공간으로 이동
    - 간단하게 저장소를 선택하고 이동한 것에 비해, 원래 git에서는 브랜치(`branch`) 단위로 체크아웃 할 수 있음.
        - `branch` : 상태(파일, 파일내용, 커밋정보 등 git의 관리 대상 전부)를 저장하는 공간. 완전히 독립된 작업 공간을 만들 수 있다. 원격 저장소(Github)에 여러 브랜치를 만들면 팀원들이 각각 독립적인 원격 저장소를 가질 수 있게 됨.
        - `merge` : 브랜치 간의 내용 병합

- `add` : 변경된 파일이 `working directory`에서 `staging area`(index)로 추가

    1. untracked files의 파일들을 git가 추적하도록 add 하거나, 

    2. 수정했지만 아직 staging 영역에 올라가지 않은(Changed but not updated) 파일들을 스테이징 영역에 올림

    3. staging area에 untracked/modified 파일을 올려 commit 전에 대기하는 상태로 만든다
    
- `commit` : 변경 내용을 확정. staging area에 올라가 있는 파일들을 local repository로 확정한다.
    - git에선 변경된 파일이 HEAD에 반영됨(커밋은 브랜치 공간에 기록된다)
    - `HEAD` : 작업 중인 위치를 기억하는 가상의 커서. 최종 확정본(commit 된 상태). 현재 체크아웃 된 커밋, 즉 현재 작업 중인 커밋. HEAD는 작업 트리의 가장 최근 커밋을 가리킨다. (현재 브랜치의 가장 최신커밋)

- `push` : 로컬 저장소의 commit된 사항(변경 내용)들을 remote 저장소로 전송한다. 함께 작업하는 동료와 변경사항을 전송 및 공유하기 위해선 리모트 저장소를 경유해야 함.

- `pull` : 리모트 저장소의 변경 내용 업데이트. 내 로컬 PC 저장소에 새로운 내용을 적용하는데, 이 때 브랜치 병합과 같은 merge가 발생된다.
    - **`pull` :** remote repository에 저장된 파일을 가져와 local repository의 내용을 갱신한다

    - 해당 remote repository에 권한이 있어야 pull 명령어를 실행할 수 있다

    - git **pull** = git **fetch** + git **merge** (병합 과정이 발생함)

    - git `fetch` : local에 연결된 remote repository의 브랜치 목록과 그 파일 내용을 최신으로 업데이트

        - local과 remote의 싱크를 맞추는 새로고침 역할

    - git `merge` : 두 개의 branch를 병합하는 명령어

- **zip 파일**
    - .git 폴더가 없는 채로 소스만 받을 수 있으므로, local에서 Git을 새롭게 꾸려나가야 함

- `status remote` : 추가한 원격 저장소의 목록을 확인
    - **git remote :** local repository에 연결된 remote repository를 확인하는 명령어

- `working directory` : 실제 파일들이 존재하는 작업 영역. 워킹 트리는 Git 디렉터리에서 특정 버전을 Checkout 해온 것. 이곳에서 프로젝트 작업(개발 및 수정)을 진행하게 된다. add 하면 staging area(index)로 이동한다.

- `staging area`(준비 영역, index) : commit 할 준비가 되어있는 것들. 워킹트리에서 작업한 내용이 Git 디렉터리에 Commit 되기 전에 거쳐가는 공간. (실제로는 Git 디렉터리에 파일로 존재함) 

    - 워킹 트리에서 파일을 수정한 후, Staging Area에 파일을 Stage 하여 커밋할 스냅샷(버전)을 만든다. Staging Area에 있는 파일들을 Commit 하여 Git 저장소에 영구적으로 스냅샷을 저장

- `git repository` : Git 디렉터리는 최초에 git init 명령으로 프로젝트가 Git 프로젝트로 만들어질 때 `.git`이라는 이름으로 생성되며, Git 프로젝트의 모든 메타 데이터와 객체 데이터베이스가 이곳에 저장됨. 따라서 가장 중요한 공간이며, Git의 핵심이다. (또한 Clone으로 원격 저장소를 복사해서 가져올 때 이 .git 디렉터리를 만들고 원격 저장소의 모든 데이터를 복사하여 가져옴)

    - 워킹 디렉토리의 모든 파일은 크게 **Tracked(관리대상임)**와 **Untracked(관리대상이 아님)**로 나눈다. Tracked 파일은 이미 스냅샷에 포함돼 있던 파일이다. Tracked 파일은 또 **Unmodified(수정하지 않음)**와 **Modified(수정함)** 그리고 **Staged(커밋으로 저장소에 기록할)** 상태 중 하나이다. 간단히 말하자면 Git이 알고 있는 파일이라는 것이다.

- `Untracked` : git에서 아직 쳐다보지 않는 것들..(파일 생성 여부, 수정 여부 등의 변동사항). 관리 대상이 아닌 내용.

- `Unmodified` : 수정하지 않은 tracked 파일

- `Modified` : 수정한 tracked 파일 (마지막 커밋 이후 아직 아무것도 수정하지 않은 상태에서 어떤 파일을 수정하면 Git은 그 파일을 Modified 상태로 인식한다)

- `Staged` : 커밋으로 저장소에 기록할 파일들. Git이 알고 있는 파일 (커밋을 하기 위해서는 modified 파일들을 Staged 상태로 만들고, Staged 상태의 파일을 커밋한다)

- git `fetch` : local repository에서 remote repository의 내용들을 업데이트

- git `rm` `--cached` : Staging area에서만 제거하고 working directory는 유지하는 명령어

- branch : 상태(파일, 파일내용, 커밋정보 등 git의 관리 대상 전부)를 저장하는 공간. 완전히 독립된 작업 공간을 만들 수 있다.
    새로운 브랜치를 생성하면, 기반이 되는 브랜치(부모 브랜치)의 버전을 그대로 복사한다. (커밋 내역(log)도 부모 브랜치와 같게 됨)

    - 각 local 저장소마다 여러개의 branch를 가질 수 있어야 한다
    - local directory 의 .git 내부에 branch로 다시 분기할 수 있는 구조로 구현해야 한다....
    - `init` 시 기본 **master 브랜치**를 자동으로 생성해주고 그것을 뼈대로 다른 branch로 분기할 수 있도록 한다
    - 통합을 위한 merge 기능을 만들어야 한다
    - checkout 명령어는 브랜치 간 이동을 위한 명령어로 변경