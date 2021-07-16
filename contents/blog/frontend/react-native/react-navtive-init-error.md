---
title: React Native init시 cocoapod 에러
thumbnail: 
date: 2021-06-26 12:00:00
category: React Native
tags: [React Native]
draft: false
---

# React Native init시 cocoapod 에러 해결하기

Xcode 버전업이 되다 보면 다음과 같은 에러가 발생 할 수 있다.

```bash
✖ Installing CocoaPods dependencies (this may take a few minutes)
✖ Installing CocoaPods dependencies (this may take a few minutes)
error Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template.
Please try again manually: "cd ./rnSample/ios && pod install".
CocoaPods documentation: https://cocoapods.org/

```
하라는 대로 `"cd ./rnSample/ios && pod install".`를 해도 오류가 발생해 알고보니,

일반적으로는 `Xcode`의 `Command line Tools` 가 제대로 설정되지 않아서 그렇다.

XCode > Preferences > Location에서 다음과 같이 설정을 변경하도록 하자.

[Command line Tools 설정](./images/error/command-line-setting.png)