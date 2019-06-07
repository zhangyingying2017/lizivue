import Vue from 'vue'
import Router from 'vue-router' //路由模块
import Home from '@/views/Home/Home'
import Classify from '@/views/Classify/Classify'
import News from '@/views/News/News'
import Cart from '@/views/Cart/Cart'
import Mine from '@/views/Mine/Mine'
import Register from '@/views/Mine/Register'
import Login from '@/views/Mine/Login'
import GoodsDetail from '@/views/Detail/GoodsDetail'
Vue.use(Router) //使用模块

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/classify/:id',
      name: 'Classify',
      component: Classify
    },{
      path: '/news',
      name: 'News',
      component: News
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/goodsdetail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail
    },{
    	path:"*",
    	redirect:"/home"
    }
  ]
})
