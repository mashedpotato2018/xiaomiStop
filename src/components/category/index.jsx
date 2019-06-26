import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './css/index.scss'
class Category extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/category')
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
            <div className={'category'}>
                {
                    data.length>0&&(
                        data.map((item,index)=>{
                            return(
                                <Link to={`/shopbuy/${item.shopid}`} key={item.id}>
                                    <img src={item.picurl} alt={item.alt}/>
                                </Link>
                            )
                        })
                    )
                }

                {/*<a href=""><img src={require('./img/1.webp')} alt=""/></a>
                <a href=""><img src={require('./img/2.webp')} alt=""/></a>
                <a href=""><img src={require('./img/3.png')} alt=""/></a>
                <a href=""><img src={require('./img/4.webp')} alt=""/></a>
                <a href=""><img src={require('./img/5.webp')} alt=""/></a>*/}
            </div>
        );
    }
}

export default Category;