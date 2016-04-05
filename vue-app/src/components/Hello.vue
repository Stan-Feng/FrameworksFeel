<template>
  <div class='hello'
    <h1>{{ msg }}</h1>
    <br>
    <br>
    <div>
      <input v-model='msg'>
    </div>
    <button v-on:click='reverseMessage'>Revrse Input Message</button>
    <br>
    <ul>
      <li v-for='hobby in hobbies'>
        <span>{{ hobby.name }}</span>
        <button v-on:click='removeHobby($index)'>X</button>
      </li>
    </ul>

    <div>
      <h3>Add hobbies</h3>
      <input v-model='newHobby' v-on:keyup.enter='addHobby'>
    </div>
  </div>

  <div>
    <h3>Computed Property</h3>
    <span>dataA={{ dataA }}, computedB={{ computedB }}</span>
  </div>

  <div>
    <h3>Transitions</h3>
    <div v-if='show' transition='expand'>Hello Transition</div>
    <span v-show="show" transition="bounce">Look at me!</span>
    <br>
    <button v-on:click='toggleTransition'>toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      show: true,
      newHobby: '',
      hobbies: [
        { name: 'Singing' },
        { name: 'Writing' },
        { name: 'Dancing' },
        { name: 'Surfing' }
      ],
      dataA: 20
    }
  },

  methods: {
    reverseMessage () {
      this.msg = this.msg.split('').reverse().join('')
    },

    addHobby () {
      var name = this.newHobby.trim()
      if (name) {
        this.hobbies.push({ name })
        this.newHobby = ''
      }
    },

    removeHobby (index) {
      this.hobbies.splice(index, 1)
    },

    toggleTransition () {
      this.show = !this.show
    }
  },

  computed: {
    computedB () {
      return this.dataA * 29 % 3
    }
  },

  transitions: {
    expand: {
      beforeEnter (el) {
        console.log(el)
      },

      enter (el) {
        console.log(el)
      },

      afterEnter (el) {
        console.log(el)
      },

      enterCancelled (el) {

      },

      beforeLeave (el) {

      },

      leave (el) {

      },

      afterLeave (el) {

      }
    }
  }
}
</script>

<style>
/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
