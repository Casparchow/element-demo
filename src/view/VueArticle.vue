<template>
  <div>
    <h1 style="text-align: center" @click="handleClick">Vue</h1>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import ScrollTop from '../components/ScrollTop.vue'
import Watch from '../watch.js';

export default {
  components: {
    ScrollTop
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    handleClick() {
      this.count ++;
    }
  }
}
</script>