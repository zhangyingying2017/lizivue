//存放数据
//var carts=[]
//if(localStorage["carts"]){
//	carts=JSON.parse(localStorage["carts"])
//}
const state={
	carts:localStorage["carts"]?JSON.parse(localStorage["carts"]):[]
}
export default state
