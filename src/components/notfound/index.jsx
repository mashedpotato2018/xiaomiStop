import React, {Component} from 'react';
import './index.scss'
class NotFount extends Component {
    render() {
        return (
            <div className={'container'}>
                <img src={require('./img/404.jpg')} alt=""/>
                <p className="sorry">咦~页面不见了~</p>
                <p className="goto"><a href="/" id="home">返回首页 mi.com</a></p>
            </div>
        );
    }
}

export default NotFount;