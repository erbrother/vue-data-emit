<template>
  <div>
    <h1>二娃继承孩子的资产: {{ money }}</h1>
    <button @click="useMoney">用钱</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  methods: {
    useMoney() {
      this.$eventDispatch('use-money', 100)
    }
  }
}
</script>

<style>

</style>
