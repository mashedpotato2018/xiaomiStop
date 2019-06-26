import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import {connect} from "react-redux";

import './css/index.scss'
/* alt+j 批量选中
*  shift + end 选中本行
*  Ctrl + / 注释本行
*  Ctrl + shift + / 多行注释
* */
@connect(
    state=>({shop:state}),
    {}
)
class Tabbar extends Component {
    render() {
        let num = this.props.shop.cartCount.count||false

        return (
            <div>
                <div className={'full_tabbar'}/>
                <div className={'tabbar'}>
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                <i className={'iconfont icon-shouye'}></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/map">
                                <i className={'iconfont icon-zhongguoditu'}></i>
                                <span>定位</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Shopcart">
                                <i className={'iconfont icon-gouwuche'}>
                                    <em>{num}</em>
                                </i>
                                <span>购物车</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/me">
                                <i className={'iconfont icon-wode'}></i>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tabbar;