# vue事件传递

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