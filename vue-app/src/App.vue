<template>
    <div>
      <img class="logo" src="./assets/logo.png">
    </div>
    <ul class="head-bar">
      <li><a v-link="{ path: '/about' }">About</a></li>
      <li><a v-link="{ path: '/blogs' }">Blogs</a></li>
      <li><a v-link="{ path: '/blog/VueJs-Intro/post' }">Intro to VueJs</a></li>
      <li><a v-link="{ path: '/blog/categories/FrontEnd' }">Front-end Category</a></li>
    </ul>
     <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>

<script>
  import Blogs from './components/blogs.vue';
  import About from './components/about.vue';

  export default {
    components: {
      Blogs,
      About
    }
  };
</script>

<style lang="sass" scoped>
html
  height: 100%

a
  text-decoration: none
a:link
  color: black
a:visited
  color: black
a:hover
  color: red

body
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  height: 100%
  width: 100%
  background-color: #fff
  font-family: Helvetica, sans-serif


.head-bar
  list-style: none

.head-bar li
  display: inline-block


.logo
  width: 50px
  height: 50px
  left: 0px


.view
  transition: all .5s ease

.test-enter, .test-leave
  opacity: 0
  transform: translate3d(10px, 0, 0)

</style>
