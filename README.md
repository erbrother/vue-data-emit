# vue数据传递

### 事件触发器

关键词: 自底向上 迭代 `$parent` `$emit`

通过给Vue原型上绑定`$eventDispatch`方法, 姑且叫做`事件触发器`.

内部实现原理就是通过就是不断调用父组件的`$emit`方法触发事件, 一层一层向上传递, 直到没有父组件.

具体代码:

```js
Vue.prototype.$eventDispatch = function(name, value) {
  let parent = this.$parent

  while (parent) {
    parent.$emit(name, value)
    parent = parent.$parent
  }
}
```

### 事件广播器

关键词: 自顶向下 递归 `$children`

通过给Vue原型上绑定`$eventBroadcast`方法, 姑且叫做`事件广播器`.

原理就是不断的调用`this.$children.$emit`触发事件. 然后在当前元素中监听要触发的事件.

具体代码:

```js
Vue.prototype.$eventBroadcast = function(name, value) {
  const bc = (children) => {
    children.map((c) => {
      c.$emit(name, value, c.$options.name)
      if (c.$children) {
        bc(c.$children)
      }
    })
  }

  bc(this.$children)
}
```

### provide和inject

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

在祖先组件中
```js
provide()
...
{
  return {
    grandpa: this
  }
},
data() {
  return {
    name: '小野',
    age: 18,
    hobby: '瓜子, 饮料, 冰箱, 矿泉水',
    homeTown: '陕西'
  }
}
...
```

在子孙组件中
```js
...
inject: ['grandpa'],
mounted() {
  console.log(this.grandpa.name)
},
methods: {
  handleChangeName() {
    console.log('爷爷改名字啦')
    // 修改祖先中的name
    this.grandpa.name = '二师兄'
    console.log(this.grandpa)
  }
}
...
```

### refs

当定义在dom元素上时, 可以获取dom元素

当定义在组件上的时候, 可以获取组件实例,继而可以调用组件的属性和方法

### 兄弟组件传值

`eventBus`, 在原型上拓展eventBus.

```js
Vue.prototype.$eventBus = new Vue()
```

js代码:
```js
// child
mounted() {
  this.$eventBus.$on('child-touch', (param) => {
    console.log(param)
  })

  this.$nextTick(() => {
    this.$eventBus.$emit('fath-touch', '儿子来找你了')
  })
}
```
```js
// child2
  mounted() {
    this.$eventBus.$emit('child-touch', 'child2来找你了')
  }
```
```js
// father
<template>
  <div class="father">
    <Child />
    <Child2 />
  </div>
</template>

<script>
import Child from './Child'
import Child2 from './Child2'
export default {
  name: 'Father',
  components: {
    Child,
    Child2
  },
  mounted() {
    this.$eventBus.$on('fath-touch', (param) => {
      console.log(param)
    })
  }
}
</script>
```

[github🐤](https://github.com/erbrother/vue-data-emit)