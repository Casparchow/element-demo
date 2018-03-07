import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueArticle from '@/view/VueArticle'
import NodeArticle from '@/view/NodeArticle'
import ReactArticle from '@/view/ReactArticle'
import Resume from '@/view/Resume'
import Album from '@/view/Album'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [{
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
    }
  ]
})
