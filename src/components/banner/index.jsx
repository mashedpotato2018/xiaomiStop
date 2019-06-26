import React, {Component} from 'react';
import {Link} from "react-router-dom";


import './css/index.scss'
import 'swiper/dist/css/swiper.min.css'
import Swiper from "swiper";


class Banner extends Component {
    state = {
        data: []
    }
    play(){
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 2000,//1秒切换一次
            },
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true
        })
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/banner')
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 200)
                {
                    this.setState({
                        data:data.data
                    })
                }
            })
            .then(()=>this.play())
    }
    render() {
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'}>
                    {
                        this.state.data.length>0&&(
                            this.state.data.map((item,index)=>{
                                return (
                                    <li className={'swiper-slide'} key={item.id}>
                                        <Link to={`/shopbuy/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.alt}/>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Banner;