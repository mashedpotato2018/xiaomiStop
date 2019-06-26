import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './css/index.scss'
class Goods extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/goods')
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 200)
                {
                    this.setState({
                        data:data.data
                    })
                }
            })
    }

    render() {
        const data = this.state.data
        return (
            <div className={'goods'}>
                <ul>
                    <li><img src={require('./img/title.webp')} alt=""/></li>
                    <li>
                        <ul>
                            {
                                data.length>0&&(
                                    data.map((item,index)=>{
                                        return(
                                            <li key={item.id}>
                                                <Link to={`/shopbuy/${item.shopid}`}>
                                                    <div className={'good_shop'}>
                                                        <img src={item.picurl} alt={item.title}/>
                                                        <img className={'tag_icon'} src={require('./img/hot (1).png')} alt=""/>
                                                    </div>
                                                    <div className={'info'}>
                                                        <p className={'goods_title'}>{item.title}</p>
                                                        <p className={'goods_des'}>{item.des}</p>
                                                        <p className={'goods_price'}>{item.symbol}{item.price}{item.font}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                )
                            }
                            <li></li>
                        </ul>
                        {/*<ul>
                            <li>
                                <a href="/">
                                    <div className={'good_shop'}>
                                        <img src={require('./img/goods (4).webp')} alt=""/>
                                        <img className={'tag_icon'} src={require('./img/hot (1).png')} alt=""/>
                                    </div>
                                    <div className={'info'}>
                                        <p className={'goods_title'}>小米8 青春版</p>
                                        <p className={'goods_des'}>潮流轻旗舰，超级夜景模式</p>
                                        <p className={'goods_price'}>￥1299起</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <div className={'good_shop'}>
                                        <img src={require('./img/goods (5).webp')} alt=""/>
                                        <img className={'tag_icon'} src={require('./img/hot (3).png')} alt=""/>
                                    </div>
                                    <div className={'info'}>
                                        <p className={'goods_title'}>小米8 屏幕指纹版</p>
                                        <p className={'goods_des'}>压感屏幕指纹，手持超级夜景</p>
                                        <p className={'goods_price'}>￥2499起</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <div className={'good_shop'}>
                                        <img src={require('./img/goods (3).webp')} alt=""/>
                                    </div>
                                    <div className={'info'}>
                                        <p className={'goods_title'}>黑鲨游戏手机 Helo</p>
                                        <p className={'goods_des'}>双液冷，更能打</p>
                                        <p className={'goods_price'}>￥3199起</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <div className={'good_shop'}>
                                        <img src={require('./img/goods (2).webp')} alt=""/>
                                        <img className={'tag_icon'} src={require('./img/hot (2).png')} alt=""/>
                                    </div>
                                    <div className={'info'}>
                                        <p className={'goods_title'}>红米6</p>
                                        <p className={'goods_des'}>小屏高性能的双摄手机</p>
                                        <p className={'goods_price'}>￥729起</p>
                                    </div>
                                </a>
                            </li>
                        </ul>*/}
                    </li>
                </ul>
            </div>
        );
    }
}
export default Goods;