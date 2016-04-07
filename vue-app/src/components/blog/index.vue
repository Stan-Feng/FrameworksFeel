<template>
  <div>
    <h2>Post of {{title}}</h2>
    <router-view></router-view>
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
