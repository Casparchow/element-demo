<template>
<div class="navbar">
</div>
</template>

<script>
export default {
  props: {
    breadCrumb: String
  }
}
</script>

<style scoped>
.navbar {
  background-color: #f3f3f4;
  width: 100%;
  height: 36px;
  padding: 8px 0;
  z-index: 1000;
}
.navbar i {
  text-align: center;
  display: block;
  font-size: 36px;
  width: 64px;
  transition: all .4s;
}
.navbar i:hover {
  cursor: pointer;
}
.el-breadcrumb {
  height: 36px;
  line-height: 36px;
}
.left {
  float: left;
}
</style>
