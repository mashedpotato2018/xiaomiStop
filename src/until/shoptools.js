const key = 'shopInfo'
let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem(key)||'{}')
//shop=>{商品id:商品数量}
shopTools.addUpdate = function (goods) {
    //判断是否已经存在商品id 存在就累加
    if(shop[goods.id]){
        shop[goods.id] += goods.num
    }else {
        shop[goods.id] = goods.num
    }
    this.saveShop()
}
//删除
shopTools.delete = function (id) {
    delete shop[id]
    this.saveShop()
}
//默认获取商品
shopTools.getShop =function(){
    return shop
}

//保存
shopTools.saveShop = function () {
    window.localStorage.setItem(key,JSON.stringify(shop))
}
export default shopTools