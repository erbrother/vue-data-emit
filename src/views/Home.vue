<template>
  <div class="home">
    <Mother />
    <div class="divider" />
    <GrandPa />
  </div>
</template>

<script>
// @ is an alias to /src
import Mother from '@/components/class1/Mother'
import GrandPa from '@/components/class2/GrandPa'
export default {
  name: 'Home',
  components: {
    Mother,
    GrandPa
  }
}
</script>

<style lang="scss" scoped>
.divider {
  height: 1px;
  background: grey;
  margin: 5px 0px
}
</style>
