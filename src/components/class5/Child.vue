<template>
  <div class="child">
    <div>爷爷的名字: {{ grandpa.name }}</div>
    <div>
      <button @click="handleChangeName">爷爷改名字啦</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Child',
  inject: ['grandpa'],
  mounted() {
    console.log(this.grandpa.name)
  },
  methods: {
    handleChangeName() {
      console.log('爷爷改名字啦')
      this.grandpa.name = '二师兄'
      console.log(this.grandpa)
    }
  }
}
</script>

<style>

</style>
