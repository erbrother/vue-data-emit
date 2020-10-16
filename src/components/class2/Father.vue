<template>
  <div>
    <h1>爸爸继承爷爷的资产: {{ money }}</h1>
    <Child :money="money" @notice="notice" />
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Father',
  components: {
    Child
  },
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  methods: {
    notice(value, name) {
      console.log(name, '我用钱了哦')
    }
  }
}
</script>

<style>

</style>
