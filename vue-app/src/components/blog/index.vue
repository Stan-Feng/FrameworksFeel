<template>
  <div>
    <h2 class='title'>Post of {{title}}</h2>
    <router-view class='main-content'></router-view>
  </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        title: undefined
      };
    },

    route: {
      data ({ to, next }) {
        return {
          title: to.params.blogId
        };
      }
    }
  }
</script>

<style lang='sass' scoped>
.title
  text-align: center

.main-content
  color: black
  font-size: 13px
  font-family: Monaco
</style>
