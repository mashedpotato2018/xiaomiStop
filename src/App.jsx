import React, {Component} from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Me from "./components/me";
import Shopcart from "./components/shopcart";
import Shopbuy from "./components/shop";
import Map from "./components/map";




class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/shopbuy/:shopid'} component={Shopbuy}/>
                    <Route path={'/me'} component={Me}/>
                    <Route path={'/shopcart'} component={Shopcart}></Route>
                    <Route path={'/map'} component={Map}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}
export default App
