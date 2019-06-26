import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {connect} from "react-redux";


import {addCart} from "../../actions/cart";


import './css/index.scss'
import Tabbar from "../tabbar";
@connect(
    state=>({shop:state}),
    {addCart}
)
class Shopbuy extends Component {
    state = {
        data: {},
        num: 0,
        id: 0
    }
    componentDidMount() {
        let id = this.props.match.params.shopid
        fetch('http://47.100.98.54:9020/api/buygoods/'+id)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    data,
                    num:0,
                    id
                })
            })

    }
    submitRedux =()=>{
        let {num,id} = this.state
        let addCart = this.props.addCart
        num&&(
            addCart({
                id,
                num
            })
        )
    }
    //减少
    reduceGoods =()=>{
        let num = this.state.num
        num===0||(num--)
        this.setState({
            num
        })
    }
    //增加
    addGoods =()=>{
        let num = this.state.num
        num++
        this.setState({
            num
        })
    }
    render() {
        let {num, data} = this.state
        return (
            <div>
                <div className={'shopdedatils'}>
                    <img src={data.picurl} width={'80%'} alt={data.des}/>
                    <h3 className={'title'}>{data.title}</h3>
                    <h3 className={'des'}>{data.des}</h3>
                    <p className={'money'}>
                        <span className={'symbol'}>{data.symbol}</span>
                        <span className={'price'}>{data.price}</span>
                    </p>
                    <p className={'courier'}>快递：包邮 <span className={'fr'}></span></p>
                    <div className={'buyNum clearFix'}>
                        <p className={'fl buyfont'}>购买数量</p>
                        <p className={'addNum fr'}>
                            <span className={'reduce'} onClick={this.reduceGoods}>-</span>
                            <span className={'num'}>{num}</span>
                            <span className={'add'} onClick={this.addGoods}>+</span>
                        </p>
                    </div>
                    <div className="buy">
                        <span className={'addCart'} onClick={this.submitRedux}>加入购物车</span>
                        <Link className={'nowBuy'} to={'/shopcart'}>立即购买</Link>
                    </div>
                </div>
                <Tabbar/>
            </div>
        );
    }
}

export default Shopbuy;