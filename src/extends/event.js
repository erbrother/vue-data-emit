export default function(Vue) {
  Vue.prototype.$eventDispatch = function(name, value) {
    let parent = this.$parent

    while (parent) {
      parent.$emit(name, value)
      parent = parent.$parent
    }
  }

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
}
