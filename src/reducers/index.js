
import {combineReducers} from "redux";
import cartCount from "./cartCount.js";
import user from "./user";


export default combineReducers({
    cartCount,
    user
    // ....
})
/*
* 随着应用变的非常复杂 需要对reducer函数 进行拆分 拆分后的每一块独立负责 state的一部分
* 把一个多个不同的reduce函数 作为value的object 合并成一个最终的reducer函数
* 然后 就可以对这个reducer调用createStore
* */
