import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Tabbar from "../tabbar";
import './css/index.scss'
class Me extends Component {
    render() {
        return (
            <div>
                <header className="me">
                    <div className="me_con">
                        <img src={require('./img/me (11).png')} alt=""/>
                        <Link to="/">登录</Link>/<Link to="/">注册</Link>
                    </div>
                </header>
                <div className="order">
                    <div className="fl">我的订单</div>
                    <div className="fr">全部订单</div>
                </div>
                <ul className={'title_list'}>
                    <li>
                        <Link to={'/'}>
                            <div className="icon"/>
                            <span>待付款</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div className="icon"/>
                            <span>待收货</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div className="icon"/>
                            <span>退换修</span>
                        </Link>
                    </li>
                </ul>
                <div className={'list'}>

                    <div className="ui_line"/>
                    <ul className={'con_list'}>
                        <li>
                            <Link to={'/'}>
                                <span>会员中心</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <span>我的优惠</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="ui_line"/>
                    <ul className={'con_list'}>
                        <li>
                            <Link to={'/'}>
                                <span>服务中心</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <span>小米之家</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="ui_line"/>
                    <ul className={'con_list'}>
                        <li>
                            <Link to={'/'}>
                                <span>F码通道</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="ui_line"/>
                    <ul className={'con_list'}>
                        <li>
                            <Link to={'/'}>
                                <span>设置</span>
                            </Link>
                        </li>
                    </ul>
                </div>
               <Tabbar/>
            </div>
        );
    }
}

export default Me;