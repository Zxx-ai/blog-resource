---
title: 程序员查询连接过WIFI密码及ip
description: "程序猿必备小技巧"
date: 2022-04-24
index_img: "/debug.png"
tags: [笔记本,本机IP地址]
categories: WiFi
author: sunny
location: 上海
summary: 笔记本查询以往连接过的密码及ip
---

最近发现WiFi拒绝接入访问，又忘了WiFi的密码，这时发现笔记本之前连接过此WiFi，至此我们以程序猿的方式用一种命令能够循环出之前已连接过的详细信息

#### 1.首先 win+R 唤醒命令窗口

![image-202242520438](https://s2.loli.net/2022/04/25/bUCmoz1SOY9KDGL.jpg)

___

#### 2.其次命令提示符输入后   《--回车

```笔记本

for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear

```


___

至此我们能看到本电脑的所有连接过的WiFi详细信息了

![image-202242520186](https://s2.loli.net/2022/04/25/dLbv45lzQoGZp8I.jpg)



笔记本的关键内容便是WiFi密码了 8-)




