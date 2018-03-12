<template>
  <div>
     <div style="display: flex; border-bottom: 1px solid #d8d8d8;">
        <i style="flex: 1; width 60px; height: 60px; padding: 10px;">
          <img src="../assets/wechat.png" alt="" style="width: 40px; margin: 0 auto; cursor: pointer;" @click="handleShowImg('微信')">
        </i>
        <i style="flex: 1; width 60px; height: 60px; padding: 10px;">
          <img src="../assets/weibo.png" alt="" style="width: 40px; margin: 0 auto;; cursor: pointer;" @click="handleShowImg('微博')">
        </i>
        <i style="flex: 1; width 60px; height: 60px; padding: 10px;">
          <img src="../assets/wechat.png" alt="" style="width: 40px; margin: 0 auto;">
        </i>
     </div>
  </div>
</template>

<script>

export default {
  methods: {
    handleShowImg(type) {
      this.$emit('showImg', type)
    }
  }

}
</script>