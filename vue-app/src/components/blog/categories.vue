<template>
  <div>
    <h2>Categories of {{categories.id}}</h2>
    <div style="height:1000px; border: 1px solid #f00">
      This long div is for testing { saveScrollPosition: true } in html5 mode
    </div>
    <p>This anchor is for testing anchor scrolling in html5 mode</p>
  </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        categories: undefined
      };
    },
    route: {
      // data hook
      // Useful for doing async data loading.
      // sets the component's "$loading" property to
      // true when called, and sets it to false when resolved.
      // two options:
      // 1. return a promise
      // 2. explicitly call transition.next() or
      //     transition.abort(reason)
      data ({ to, next }) {
        return {
          categories: {
            id: to.params.categoryId
          }
        };
      }
    }
  }
</script>
