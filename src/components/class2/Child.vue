<template>
  <div>
    <h1>孩子继承爸爸的资产: {{ money }}</h1>
    <Son :money="money" @notice="notice" />
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'Child',
  components: {
    Son
  },
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  methods: {
    notice(value, name) {
      console.log(name, '我也用钱了哦')
    }
  }
}
</script>

<style>

</style>
