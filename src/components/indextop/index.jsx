import React, {Component} from 'react';
import './css/index.scss'
class Head extends Component {
    state = {
        data:'react实战'
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/name')
            .then(res=>res.json())
            .then(data=>{
                if(data.status===200)
                {
                    this.setState({
                        data:data.name
                    })
                }
            })
    }

    render() {
        return (
            <header className={'index_top'}>
                <div className={'logo'}>
                    <img src={require('./img/logo.png')} width={'100%'} height={'100%'} alt=""/>
                </div>
                <div className={'search'}>
                    <i className={'iconfont icon-sousuo11'}/>
                    <span>{this.state.data}</span>
                </div>
                <div className={'login iconfont icon-wode'}/>
            </header>
        );
    }
}

export default Head;