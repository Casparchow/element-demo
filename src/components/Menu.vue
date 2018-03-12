<template>
  <el-menu :router="true" mode="horizontal" class="menu"
    background-color="#373d41" text-color="#ffffff"
    active-text-color="#4dd0e1" @select="handleChangeMenuStyle">
    <el-menu-item index="/" ref="home" class="home">
      首页
    </el-menu-item>
    <el-submenu index="1" ref="share">
      <span slot="title">前端大牛分享</span>
      <el-menu-item index="vue">
        <i class="el-icon-message"></i><span>Vue.js</span>
      </el-menu-item>
      <el-menu-item index="node">
        <i class="el-icon-message"></i><span>Node.js</span>
      </el-menu-item>
      <el-menu-item index="react">
        <i class="el-icon-message"></i><span>React</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2" ref="personCenter">
      <span slot="title">个人中心</span>
      <el-menu-item index="resume">
        <i class="el-icon-message"></i><span>简历</span>
      </el-menu-item>
      <el-menu-item index="album">
        <i class="el-icon-message"></i><span>相册</span>
      </el-menu-item>
    </el-submenu>
    <el-breadcrumb class="navbar">
      <el-breadcrumb-item class="breadcrumb-item">
        <span class="breadcrumb">当前位置：{{ breadCrumb }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-menu>
</template>

<script>
export default {
  props: {
    breadCrumb: String,
  },

  methods: {
    handleHome(e) {
      this.$router.push('/')
    },

    handleChangeHomeClass(style1, style2) {
      this.$refs.home.$el.style = style1
      this.$refs.home.$el.className = 'el-menu-item home is-active'
      this.$refs.share.$el.childNodes[0].style = style2
      this.$refs.share.$el.className = 'el-submenu'
      this.$refs.personCenter.$el.childNodes[0].style = style2
      this.$refs.personCenter.$el.className = 'el-submenu'
    },
    handleChangeShareClass(style1, style2) {
      this.$refs.home.$el.style = style2
      this.$refs.home.$el.className = 'el-menu-item home'
      this.$refs.share.$el.childNodes[0].style = style1
      this.$refs.share.$el.className = 'el-submenu is-active'
      this.$refs.personCenter.$el.childNodes[0].style = style2
      this.$refs.personCenter.$el.className = 'el-submenu'
    },
    handleChangePersonCenterClass(style1, style2) {
      this.$refs.home.$el.style = style2
      this.$refs.home.$el.className = 'el-menu-item home'
      this.$refs.share.$el.childNodes[0].style = style2
      this.$refs.share.$el.className = 'el-submenu'
      this.$refs.personCenter.$el.childNodes[0].style = style1
      this.$refs.personCenter.$el.className = 'el-submenu is-active'
    },

    handleChangeMenuStyle() {
      const style1 = 'color: #4dd0e1; border-bottom-color: #4dd0e1; background-color: rgb(44, 49, 52);'
      const style2 = 'color: #ffffff;  background-color: #373d41;'
      this.$nextTick(() => {
        switch(this.$route.path) {
          case '/': {
            this.handleChangeHomeClass(style1, style2)
            break
          }
          case '/vue': {
            this.handleChangeShareClass(style1, style2)
            break
          }
          case '/node': {
            this.handleChangeShareClass(style1, style2)
            break
          }
          case '/react': {
            this.handleChangeShareClass(style1, style2)
            break
          }
          case '/resume': {
            this.handleChangePersonCenterClass(style1, style2)
            break
          }
          case '/album': {
            this.handleChangePersonCenterClass(style1, style2)
            break
          }
        }
      })
    },
  },

  created() {
    this.$nextTick(() => {
      this.handleChangeMenuStyle()
    })
  }
}
</script>