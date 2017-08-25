import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Top from '@/components/Top'
import Download from '@/components/Download'
import Song from '@/components/Song'
 

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/hello', name: 'Hello',component: Hello},   
    {path:'/',name:'Home',component:Home},
    {path:'/top',name:'Top',component:Top},
    {path:'/download',name:'Download',component:Download},
    {path:'/song',name:'Song',component:Song}

  ]
})
