<template>
  <div class="full-screen">
    <div class="header-box">
      <div class="header text-center">
        <p>周而涛<span>个人博客</span></p>
      </div>
      <menus :breadCrumb="breadCrumb"></menus>
    </div>
    <div class="box-fix"></div>
    <div class="content" ref="content">
      <div class="content-box">
        <left-content class="left-content left"></left-content>
        <div id="content">
          <router-view></router-view>
        </div>
        <right-content class="right-content right" @showImg="handleShowImg"></right-content>
      </div>
    </div>
    <div class="box-fix fix-bottom"></div>
    <img-dialog v-model="dialogVisible" :src="src" :type="type"></img-dialog>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import LeftContent from './LeftContent.vue'
import RightContent from './RightContent.vue'
import imgDialog from 'view/dialog/imgDialog.vue'

export default {
  name: 'Layout',
  components: {
    Menus: Menu,
    LeftContent,
    RightContent,
    imgDialog
  },
  data() {
    return {
      breadCrumb: '首页',
      dialogVisible: false,
      src: '',
      type: ''
    }
  },
  methods: {
    changeCrumb() {
      switch(this.$route.path) {
        case '/': {
          this.breadCrumb = '首页'
          break
        }
        case '/vue': {
          this.breadCrumb = '前端大牛分享 > Vue.js'
          break
        }
        case '/node': {
          this.breadCrumb = '前端大牛分享 > Node.js'
          break
        }
        case '/react': {
          this.breadCrumb = '前端大牛分享 > React'
          break
        }
        case '/resume': {
          this.breadCrumb = '个人中心 > 简历'
          break
        }
        case '/album': {
          this.breadCrumb = '个人中心 > 相册'
          break
        }
      }
    },
    
    handleShowImg(type) {
      this.type = type
      console.log(type)
      if (type === '微信') {
        this.src = 'src/assets/wechatQrCode.jpg'
      } else if (type === '微博') {
        this.src = 'src/assets/weiboQrCode.jpg'
      }

      this.dialogVisible = true
    }
  },

  beforeUpdate() {
    this.changeCrumb()
  },

  created() {
    this.changeCrumb()
  }
}
</script>