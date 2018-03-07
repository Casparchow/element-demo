<template>
  <div style="width: 100%;height: 100%;">
    <div style="height: 60px; text-align: center; background-color: #434a50; color: #ffffff;">
      <p style="margin: 0; line-height: 60px; font-size: 32px; height: 60px;">周而涛
        <span style="font-size: 20px; margin-left: 8px;">个人博客</span>
      </p>
    </div>
    <menus :breadCrumb="breadCrumb"></menus>
    <div class="content" ref="content">
      <router-view id="content"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Menu from './Menu.vue'

export default {
  name: 'HelloWorld',
  components: {
    Navbar,
    Menus: Menu
  },
  data() {
    return {
      breadCrumb: '首页'
    }
  },
  methods: {
    changeCrumb() {
      switch(this.$route.path) {
        case '/': {
          this.breadCrumb = '首页';
          break;
        };
        case '/vue': {
          this.breadCrumb = '前端大牛分享 > Vue.js';
          break;
        };
        case '/node': {
          this.breadCrumb = '前端大牛分享 > Node.js';
          break;
        };
        case '/react': {
          this.breadCrumb = '前端大牛分享 > React';
          break;
        };
        case '/resume': {
          this.breadCrumb = '个人中心 > 简历';
          break;
        };
        case '/album': {
          this.breadCrumb = '个人中心 > 相册';
          break;
        };
      }
    }
  },

  beforeUpdate() {
    this.changeCrumb();
  },

  created() {
    this.changeCrumb();
  }
}
</script>

<style scoped>
#content {
  overflow-y: scroll;
  height: 100%;
}
.content {
  overflow-y: overlay;
  height: calc(100% - 182px);
  position: relative;
  top: 0;
  left: 0;
  transition: all .4s;
  border-bottom: 1px solid #545c64;
  padding: 30px 0;
}
</style>




