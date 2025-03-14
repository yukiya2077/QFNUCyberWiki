---
title: 审核标准
icon: check
---

### 语法对照标准

[Markdown 介绍 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/cookbook/markdown/)

[Markdown | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/markdown/)

### 审核要点

#### 语法

看 Markdown 语法是否正确，是否有残缺，是否规范，因为框架是基于 vuepress 搭建的，vuepress 框架提供了更高级的扩展语法

#### 标点符号

Markdown 语法没有中文标点，所有语法都是基于英文标点渲染的，检查他们的内容里有没有语法中使用中文标点的，最常见的错误是插入图片的时候 `![]()` 写成了 `！【】（）` 此类等内容

#### 关于内容

内容不用检查，内容写什么样就是什么样，主要检查语法就行，如果你觉得内容确实有问题，就去问发给你的那个人核实一下，有问题让他改完再发给你

#### 正确与错误示范

```
//错误的加粗
被加粗的文本*
*被加粗的文本

//正确的加粗
**被加粗的文本**

//错误的图片
！[]（）
！【】（）

//正确的图片
![]()
```
