<template>
  <div>
    <h2>父亲资产: {{ fatherM }}</h2>
    <button @click="earnMoney">父亲赚钱</button>
    <button @click="invest">父亲投资</button>
  </div>
</template>

<script>
export default {
  props: {
    fatherM: {
      type: Number,
      default: 0
    }
  },
  methods: {
    earnMoney() {
      this.$emit('earn-money', 100)
    },
    invest() {
      // this.$emit('invest', 1000)
      this.$emit('update:money', 1000)
    }
  }
}
</script>

<style>

</style>
