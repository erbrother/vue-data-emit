<template>
  <div class="father">
    <Child />
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Father',
  components: {
    Child
  },
  data() {
    return {
      name: '大爷',
      age: 34,
      hobby: 'coding'
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
