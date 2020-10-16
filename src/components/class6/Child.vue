<template>
  <div class="child" />
</template>

<script>

export default {
  name: 'Child',
  mounted() {
    this.$eventBus.$on('child-touch', (param) => {
      console.log(param)
    })

    this.$nextTick(() => {
      this.$eventBus.$emit('fath-touch', '儿子来找你了')
    })
  }
}
</script>

<style>

</style>
