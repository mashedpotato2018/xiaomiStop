import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './css/index.scss'
class Recommend extends Component {
    state = {
        data:{}
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/recommend')
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
            <div className={'recommend'}>
                {
                    data.shopid && (
                        <ul>
                            <li><Link to={`/shopbuy/${data.shopid}`}><img src={require('./img/3.webp')} alt=""/></Link></li>
                            <li>
                                <ul>
                                    <li><a href="/"><img src={require('./img/1.webp')} alt=""/></a></li>
                                    <li><a href="/"><img src={require('./img/2.webp')} alt=""/></a></li>
                                </ul>
                            </li>
                        </ul>
                    )
                }
            </div>
        );
    }
}

export default Recommend;