// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import fastclick from 'fastclick'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'common/less/common.css' //引入公共的css  方法1
import 'common/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'

// import './permission' // permission control
// import './mock' // simulation data


Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
fastclick.attach(document.body)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
