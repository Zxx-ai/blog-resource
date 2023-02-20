---
title: vue中关于mixin的使用
description: "vue小技巧"
index_img: "/vue.png"
date: 2021-05-07
categories: Vue
tags: [Vue] 
author: sunny
location: 上海
summary: 扒一扒 vue 的 mixin
---
:::info 
代码就是最好的语言，废话不多说，我们直接看示例
:::
mixin.vue
```vue
<template>
  <div></div>
</template>
<script>
import mixin from "../mixin/mixin";
export default {
  mixins: [mixin],
  data(){
      return {
          hello : "mixin.vue",
          count : 1
      }
  },
  created() {
    console.log("hello from mixin.vue");
    console.log(this.hello);
    this.text = "has changed"
    this.add();
    this.hi();
  },
  methods: {
    hi() {
      console.log("hi method from mixin.vue");
      console.log(this.count);
    },
    say() {
      console.log('say something from mix.vue');
    }
  },
};
</script>
```

../mixin/mixin.js

```javascript
export default {
  data() {
    return {
      hello: "mixin.js",
      text: "change me"
    }
  },
  created() {
    console.log('hello from mixin.js');
    this.say();
  },
  mounted() {
    console.log(this.text);
    this.hi();
  },
  methods: {
    hi() {
      console.log("我到底会不会执行！")
    },
    add() {
      this.count++
    },
  }
}
```

运行结果

```bash
# mixin.js:9 触发混入中created生命周期
hello from mixin.js
# mixin.js:10 执行当前组件中的say方法
say something from mix.vue
# mixin.vue:15 触发当前组件中的created生命周期
hello from mixin.vue
# mixin.vue:16 打印当前组件中的hello属性
mixin.vue
# mixin.vue:23 触发当前组件的hi方法
hi method from mixin.vue
# mixin.vue:18 执行混入中的add方法，使得count++，后经过
# mixin.vue:19 中的hi方法打印出count
2
# mixin.vue:17 当前组件修改了混入中text属性的值，经触发混入中mounted生命周期时，
# mixin.js:13 打印出混入中text的值
has changed
# mixin.js:14 在混入中执行hi方法，发现其仍执行的是mixin.vue中的hi方法，证明了mixin.vue覆盖了混入中的方法
hi method from mixin.vue
2
```

再解析一下：
- 当引入的 mixin 中与当前组件同时存在同样的方法和属性时，将不会报错，当前组件的属性方法将覆盖混入中的
- 混入与当前组件的生命周期分别执行，同周期先行执行混入中的，不同周期按先后顺序执行
- 混入与当前组件能相互读取操作的对方的属性与方法