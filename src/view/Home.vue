<template>
  <div class="blogContent">
    <div class="content-title-box">
      <div class="content-title-fix"></div>
      <h1 class="text-center content-title">{{ test }}</h1>
    </div>
    <div>
      
    </div>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import ScrollTop from '../components/ScrollTop.vue'
import * as api from '../../api/home'

export default {
  components: {
    ScrollTop
  },

  data() {
    return {
      test: ''
    }
  },

  created() {
    api.getUserInfo().then(({data}) => {
      this.test = data.data.city
    }, err => {
      console.log(err)
    })

    // $.ajax({
    //   url: 'http://tao.xxx.vvaccess.com:9021/users',
    //   data: {},
    //   dataType: 'jsonp',
    //   success: function(res) {
    //     if (res.code === '0000') {
    //       return;
    //     }
    //   }
    // })
  }
}
</script>