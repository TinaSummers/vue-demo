// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/iconfont.css'
import './css/music.css'

/*使用webpack打包之后默认加载main.js文件并将其引入到index.html中*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //绑定index.html中的id为app的元素
  router,
  template: '<App/>',
  components: { App }
})
