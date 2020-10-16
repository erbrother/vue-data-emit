<template>
  <div>
    <Father
      :name="name"
      :age="age"
      :hobby="hobby"
      :home-town="homeTown"
      @notice="notice"
    />
  </div>
</template>

<script>
import Father from './Father'
export default {
  name: 'GrandPa',
  components: {
    Father
  },
  data() {
    return {
      name: '小野',
      age: 18,
      hobby: '瓜子, 饮料, 冰箱, 矿泉水',
      homeTown: '陕西'
    }
  },
  methods: {
    notice() {
      console.log('回家吃饭了')
    }
  }
}
</script>

<style>
</style>
