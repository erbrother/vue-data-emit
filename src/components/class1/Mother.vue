<template>
  <div class="mother">
    <h1>家庭资产👪: {{ fatherM }}</h1>
    <Father
      :father-m="fatherM"
      :money.sync="fatherM"
      @earn-money="earnMoney"
    />
    <Child
      :child-m="childM"
      @get-money="getMoney"
    />
  </div>
</template>

<script>
import Father from './Father'
import Child from './Child'
export default {
  name: 'Mother',
  components: {
    Father,
    Child
  },
  data() {
    return {
      fatherM: 3000,
      childM: 0
    }
  },
  methods: {
    earnMoney(money) {
      this.fatherM += money
    },
    invest(money) {
      this.fatherM = money
    },
    getMoney(money) {
      this.fatherM -= money
      this.childM += money
    }
  }
}
</script>

<style>
</style>
