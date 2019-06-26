import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCart,delCart,getGoodsNum} from "../../actions/cart";
import './css/index.scss'
import Tabbar from "../tabbar";

@connect(
    state =>({shop:state}),
    {addCart,delCart,getGoodsNum}
)
class Shopcart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adr:'四川成都',
            goods:[],
            count:0,
            price:0,
            map:''
        }
    }
    //减少
    reduceGoods = (index)=>{
        let goods = this.state.goods
        let {addCart} = this.props
        let {shopid} = goods[index]
        if(!goods[index].num)
            return
        goods[index].num--
        this.setState({goods})
        addCart({
            id:shopid,
            num:-1
        })
        this.totalPrice()
    }
    //增加
    addGoods = (index)=>{
        let goods = this.state.goods
        let {addCart} = this.props
        let {shopid} = goods[index]
        goods[index].num++
        this.setState({goods})
        addCart({
            id:shopid,
            num:1
        })
        this.totalPrice()
    }
    delGoods = (index)=>{
        let goods = this.state.goods
        let {delCart} = this.props
        delCart(goods[index]["shopid"])
        goods.splice(index,1)
        this.setState({goods})
        this.totalPrice()
    }
    totalPrice = ()=>{
        let goods = this.state.goods
        let {getGoodsNum} = this.props
        let count = 0,price = 0
        for(let key of goods){
            price +=key.num*key.price
            count += key.num
        }
        this.setState({
            price,
            count
        })
        getGoodsNum({count})
    }
    getData = () =>{
        let {cartCount} = this.props.shop
        let {goods} = this.state
        let shopidList = Object.keys(cartCount)//[]
        shopidList = shopidList.filter((item)=>!isNaN(item))
        let shopLengnt = shopidList.length
        if(cartCount.map){
            this.setState({
                map:cartCount.map
            })
        }
        shopidList.forEach((item,index)=>{
            fetch('http://47.100.98.54:9020/api/buygoods/'+item)
                .then(res=>res.json())
                .then(data=>{
                    //挂载此商品对应的数量
                    data["num"] = cartCount[item]
                    goods.push(data)
                    this.setState({
                        goods
                    })
                    shopLengnt===(index+1)&&(this.totalPrice())
                })
        })

    }
    componentDidMount() {
        this.getData()
    }

    render() {
        let {price,count,goods,map} = this.state
        return (
            <div className={'shopcart'}>
              <div className={'shopArea mb'}>
                  <p className={'location clearFix'}>
                      <span className={'fl'}>送到地点：{map&&map}</span>
                      <span className={'fr'}>编辑地址</span>
                  </p>
                  {
                      goods.length>0&&(goods.map((item,index)=>{
                          return(
                              <div key={index} className={'shop'}>
                                  <div className={'shopShow'}>
                                      <div className="pic">
                                          <img src={item.picurl} alt={item.title}/>
                                          <img src={item.picurl} alt={item.title}/>
                                          <img src={item.picurl} alt={item.title}/>
                                      </div>
                                  </div>
                                  <div className="title">{item.title}</div>
                                  <div className="des">{item.des}</div>
                                  <div className="buyNum">
                                      <p className="buyfont">{item.symbol}{item.price}</p>
                                      <p className="addNum">
                                          <a href="javascript:;" className="reduce" onClick={this.reduceGoods.bind(this,index)}>-</a>
                                          <a href="javascript:;" className="num">{item.num}</a>
                                          <a href="javascript:;" className="add" onClick={this.addGoods.bind(this,index)}>+</a>
                                      </p>
                                      <a href="javascript:;" className="del" onClick={this.delGoods.bind(this,index)}>删除</a>
                                  </div>
                              </div>
                          )
                      }))
                  }
                  <div className="totalPrice">
                      <div className="total">
                          <p className="totalMoney">
                              <span className="font">总计：</span><span>￥{price}</span>
                          </p>
                          <p className="preferential">
                              总金额￥{price} 优惠￥0.00
                          </p>
                      </div>
                      <div className="goPayment">
                          <span className="font">去结算</span><span className="num">({count}件)</span>
                      </div>
                  </div>
              </div>
              <Tabbar/>
            </div>
        );
    }
}

export default Shopcart;