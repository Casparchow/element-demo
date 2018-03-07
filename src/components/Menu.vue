<template>
  <el-menu :router="true" mode="horizontal" class="menu" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="/" ref="home" class="home">首页</el-menu-item>
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
      <el-breadcrumb-item class="breadcrumb-item"><span class="breadcrumb">当前位置：{{ breadCrumb }}</span></el-breadcrumb-item>
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
    
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.handleChangeMenuStyle()
    },

    handleChangeMenuStyle() {
      const style = 'color: rgb(255, 208, 75); border-bottom-color: rgb(255, 208, 75); background-color: rgb(84, 92, 100);'            
      this.$nextTick(() => {
        switch(this.$route.path) {
          case '/': {
            this.$refs.home.$el.className = 'el-menu-item home is-active'
            this.$refs.share.$el.className = 'el-submenu'      
            this.$refs.personCenter.$el.className = 'el-submenu'         
            this.$refs.home.$el.style = style
            this.$refs.share.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.personCenter.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'            
            break;
          }
          case '/vue': {
            this.$refs.share.$el.className = 'el-submenu is-active'
            this.$refs.home.$el.className = 'el-menu-item home'
            this.$refs.personCenter.$el.className = 'el-submenu'
            this.$refs.share.$el.childNodes[0].style = style
            this.$refs.home.$el.style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.personCenter.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            break;
          }
          case '/node': {
            this.$refs.share.$el.className = 'el-submenu is-active'
            this.$refs.home.$el.className = 'el-menu-item home'
            this.$refs.personCenter.$el.className = 'el-submenu'
            this.$refs.share.$el.childNodes[0].style = style
            this.$refs.home.$el.style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.personCenter.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            break;
          }
          case '/react': {
            this.$refs.share.$el.className = 'el-submenu is-active'
            this.$refs.home.$el.className = 'el-menu-item home'
            this.$refs.personCenter.$el.className = 'el-submenu'
            this.$refs.share.$el.childNodes[0].style = style
            this.$refs.home.$el.style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.personCenter.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            break;
          }
          case '/resume': {
            this.$refs.personCenter.$el.className = 'el-submenu is-active'
            this.$refs.home.$el.className = 'el-menu-item home'
            this.$refs.share.$el.className = 'el-submenu'      
            this.$refs.personCenter.$el.childNodes[0].style = style
            this.$refs.home.$el.style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.share.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            break;
          }
          case '/album': {
            console.log(this.$refs.personCenter)
            this.$refs.personCenter.$el.className = 'el-submenu is-active'
            this.$refs.home.$el.className = 'el-menu-item home'
            this.$refs.share.$el.className = 'el-submenu'      
            this.$refs.personCenter.$el.childNodes[0].style = style
            this.$refs.home.$el.style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            this.$refs.share.$el.childNodes[0].style = 'color: #ffffff;  background-color: rgb(84, 92, 100);'
            break;
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

<style>
.home {
  margin-left: 40px !important;
}
.el-menu-item.is-active {
  background-color: #434a50 !important;
}
.el-submenu.is-active .el-submenu__title {
  background-color: #434a50 !important;
}

.navbar {
  height: 60px;
  float: right;
}
.el-breadcrumb {
  height: 60px;
  line-height: 60px;
  margin-right: 40px;
}
.breadcrumb {
  color: #ffffff !important;
}
</style>
