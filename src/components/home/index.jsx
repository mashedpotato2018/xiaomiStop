import React, {Component} from 'react';
import Head from "../indextop";
import Banner from "../banner";
import Category from "../category";
import Recommend from "../recommend";
import DividerLine from "../dividerLine";
import Conference from "../conference";
import Goods from "../goods";
import Tabbar from "../tabbar";
import Lazyload from "react-lazyload";
class Home extends Component {
    render() {
        return (
            <div className={'App'}>
                <Head/>
                <Banner/>
                <Category/>
                <Recommend/>
                <DividerLine/>
                <Conference/>
                <Goods/>

                <Tabbar/>
                {/*<Lazyload>
                    <Goods/>
                </Lazyload>
                <Shopbuy/>
                <Shopcart/>*/}
            </div>
        );
    }
}

export default Home;