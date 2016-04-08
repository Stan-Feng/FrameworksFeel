<template>
  <ul class='blog-brief'>
    <li>Author: <a v-link="{ path: '/about' }">Junwen Feng</a></li>
    <li class="timestamp">{{time}}</li>
    <li>Categories: <a v-link="{ path: '/blog/categories/{category.id}' }">{{category.name}}</a></li>
    <li>Comments: <a href="#">{{comments.num}} comments</a></li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        time: new Date(),
        category: {
          id: 'example',
          name: 'Example Category'
        },
        comments: {
          num: 100
        }
      }
    }
  };
</script>

<style lang="sass" scoped>
.blog-brief
  font-size: 12px
  display: inline-block
  margin-left: 10px
  ul
    text-align: center
  li
    display: inline-block
    margin-left: 12px
</style>
