//改变数据的方法
//1、引入定义的state
import state from './state'
import * as type from './type'  //在type.js中定义一些规则，同步到mutations中
import { MessageBox } from 'mint-ui';  //按需引入mint-ui框架中的MessageBox弹窗功能
const mutations={
	setCarts(state,data){
		state.carts.push(data)
		localStorage.setItem("carts",JSON.stringify(state.carts))
	},
	add(state,index){  //点击购物车的加号
		state.carts[index].value++
	},
	minus(state,index){  //点击购物车的减号
		//state.carts[index].value==1?state.carts[index].value=1:state.carts[index].value--
		if(state.carts[index].value==1){
			state.carts[index].value=1
			MessageBox('提示', '商品个数不能小于1');
		}else{
			state.carts[index].value--
		}
	},
	dele(state,index){ //点击购物车中的删除按钮
		MessageBox.confirm('亲，您确定要取消订单吗?').then(action => {
		  	state.carts.splice(index,1)
			localStorage.setItem("carts",JSON.stringify(state.carts))
		});
	}
}
export default mutations
