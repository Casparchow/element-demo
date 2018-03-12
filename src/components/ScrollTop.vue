<template>
  <span class="scrollTop el-icon-arrow-down" v-if="scrollable"
    @click="handleScrollTop"></span>
</template>

<script>
export default {
  data() {
    return {
      scrollable: true,
      setInterval: null
    }
  },

  methods: {
    handleScrollTop() {
      var scrollBox = document.getElementById('content')
      scrollBox.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
      
      // this.setInterval = setInterval(() => {
      //   if (scrollBox.scrollTop === 0) {
      //     clearInterval(this.setInterval)
      //   } else {
      //     scrollBox.scrollTop = scrollBox.scrollTop
      //   }
      // }, 20);
    }
  }
}
</script>