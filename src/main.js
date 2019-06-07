// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vuex模块   需要下载  cnpm install vuex --save
import Vuex from 'vuex';
import store from './vuex/index'


Vue.config.productionTip = false

//引入mint-ui框架    先下载   cnpm install mint-ui --save
import MintUI from 'mint-ui'  //引入mint-ui框架  
import 'mint-ui/lib/style.css' //引入css
Vue.use(MintUI)  //使用

//axios第三方模块，主要用于请求数据，相当于ajax
import axios from "axios";   //cnpm install axios --save
//console.log(axios)

//配置axios
axios.defaults.baseURL="http://localhost:3000";  //服务器地址
axios.defaults.headers["Content-Type"]="application/x-www-form-urlencoded";  //设置头信息
Vue.prototype.$http=axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
