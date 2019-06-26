import shopTools from "../until/shoptools";

//购物车的功能
// 事件交互 所改变的状态 都交给redux处理
export default function (state={},action) {
    let goods = action.data
    switch (action.type) {
        case 'CART_ADD':
            shopTools.addUpdate(goods)
            return shopTools.getShop()
        case 'CART_DEL':
            shopTools.delete(goods)
            return shopTools.getShop()
        case 'CART_GOODS_NUM':
            let newState = Object.assign({},state,goods)
            return newState
        case 'GET_USER_INFO':
            let newMapInfo = Object.assign({},state,action.map)
            return newMapInfo
        default:
            return shopTools.getShop()
    }
}