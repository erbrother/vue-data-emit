<template>
  <div>
    <h1>爷爷的资产: {{ money }}</h1>
    <Father :money="money" @use-money="useMoney" @notice="notice" />
  </div>
</template>

<script>
import Father from './Father'
export default {
  name: 'GrandPa',
  components: {
    Father
  },
  data() {
    return {
      money: 10000
    }
  },
  methods: {
    useMoney(money) {
      this.money -= money
      this.$eventBroadcast('notice')
    },
    notice(value, name) {
      console.log(name, '我用钱了哦')
    }
  }
}
</script>

<style>
</style>
