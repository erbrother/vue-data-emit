<template>
  <div class="father">
    <Child />
    <Child2 />
  </div>
</template>

<script>
import Child from './Child'
import Child2 from './Child2'
export default {
  name: 'Father',
  components: {
    Child,
    Child2
  },
  mounted() {
    this.$eventBus.$on('fath-touch', (param) => {
      console.log(param)
    })
  }
}
</script>

<style>
</style>
