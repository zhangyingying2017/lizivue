//入口文件

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//导入自定义的模块
import state from './state'
import mutations from './mutations'
import actions from './actions'

//暴露模块

export default new Vuex.Store({
	state,
	mutations,
	actions
})
