<template>
  <span class="scrollTop el-icon-arrow-down" v-if="scrollable" @click="handleScrollTop"></span>
</template>

<script>
export default {
  data() {
    return {
      scrollable: true
    }
  },

  methods: {
    handleScrollTop() {
      var scrollBox = document.getElementById('content');
      console.log(scrollBox.offsetTop)
      console.log(scrollBox.offsetHeight)
      console.log(scrollBox.scrollTop)
      console.log(scrollBox)
      scrollBox.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
}
</script>

<style>
span.scrollTop {
  position: fixed;
  bottom: 100px;
  right: 40px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #545c64;
  cursor: pointer;
}
span.scrollTop:before {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  transform: rotate(180deg);
}
span.scrollTop:hover {
  background-color: #434a50;
}
</style>
