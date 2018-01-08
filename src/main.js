// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
//设置路由
 // const router = new VueRouter({
 // 	mode:'history',
 // 	base:__dirname,
 // 	routes:[
 // 	{path:"/",component:Users}
 // 	]
 // })
/* eslint-disable no-new dsfsd fdfsdaf*/
new Vue({
  el: '#app',
  template: '<app/>',
  components: { App }
})
