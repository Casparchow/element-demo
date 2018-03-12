import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'components/Layout.vue'
import Home from 'view/Home.vue'
import VueArticle from 'view/VueArticle.vue'
import NodeArticle from 'view/NodeArticle.vue'
import ReactArticle from 'view/ReactArticle.vue'
import Resume from 'view/Resume.vue'
import Album from 'view/Album.vue'

Vue.use(Router)


const routes = [{
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: Home
  }, {
    path: 'vue',
    component: VueArticle
  }, {
    path: 'node',
    component: NodeArticle
  }, {
    path: 'react',
    component: ReactArticle
  }, {
    path: 'resume',
    component: Resume
  }, {
    path: 'album',
    component: Album
  }]
}]

const router = new Router({routes})
export default router