<template>
  <div>
    <h2>子女资产: {{ childM }}</h2>
    <button @click="getMoney">获得资产</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    childM: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getMoney() {
      this.$emit('get-money', 10)
    }
  }
}
</script>

<style>

</style>
