<template>
  <div class="child" />
</template>

<script>

export default {
  name: 'Child2',
  mounted() {
    this.$eventBus.$emit('child-touch', 'child2来找你了')
  }
}
</script>

<style>

</style>
