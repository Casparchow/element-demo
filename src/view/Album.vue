<template>
  <div class="blogContent" ref="viewBox">
    <div class="content-title-box">
      <div class="content-title-fix"></div>
      <h1 class="text-center content-title">Album</h1>
    </div>
    <div>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <h1 class="text-center">Album</h1>
      <scroll-top></scroll-top>
    </div>
  </div>
</template>

<script>
import ScrollTop from '../components/ScrollTop.vue'

export default {
  components: {
    ScrollTop
  },
  data() {
    return {
      box: '',
      scroll: ''
    }
  },
  methods: {
    menu() {
      console.log([document])
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll)
    }
  },
  mounted() {
    this.box = this.$refs.viewBox;
    this.box.addEventListener('scroll', this.menu)
    console.log(document.body.scrollTop)
  },
}
</script>