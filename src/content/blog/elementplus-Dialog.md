---
title: Dialog 对话框
description: "使用Dialog浏览器警告⚠"
date: 2023-04-05
index_img: "/elementplus.png"
tags: [Element Plus,Dialog 对话框]
categories: Element+
author: sunny
location: 上海
summary: Element+Dialog 对话框 控制台警告
---

最近在写vue3+TS的项目，编写Element Dialog 对话框弹框组件时发现控制台警告。排查后觉得自己并未写错

#### 1.代码如下

![1.png](https://i.postimg.cc/mZ6DQdKj/1.png) 

___

#### 2.浏览器警告

![2.png](https://i.postimg.cc/V67zY6j1/2.png) 

说该类型为只读，但我并未写错，不得其姐啊！！！
___

直到看看ui文档，发现绑定时还有另一种，究其原因可能是为了兼容版本。于是我就换一种绑定试试

![3.png](https://i.postimg.cc/1zrqrGZH/3.png)

```笔记本
 v-model ===> :model-value

```
![202345211531.png](https://i.postimg.cc/hjKYtRn0/202345211531.png)

至此我们控制台就干净了！！！！！！！！
踩坑日记到此结束，下次再来 8-)




