<template>
  <div>
    <Child v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Father',
  components: {
    Child
  },
  mounted() {
  }
}
</script>

<style>

</style>
