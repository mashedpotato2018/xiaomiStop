import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserInfo} from "../../actions/cart";


import './css/index.scss'
import Tabbar from "../tabbar";
@connect(
    state=>({shop:state}),
    {getUserInfo}
)
class Map extends Component {
    componentDidMount() {
        let {getUserInfo} = this.props
        let {BMap,BMAP_STATUS_SUCCESS} = window
        // 百度地图API功能
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,18);
        let geoc = new BMap.Geocoder();
        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === BMAP_STATUS_SUCCESS){
                let mk = new BMap.Marker(r.point);
                let pt = r.point;
                map.addOverlay(mk);
                map.panTo(pt);
                geoc.getLocation(pt, function(rs){
                    let addComp = rs.addressComponents;
                    let Info = addComp.province + " " + addComp.city + " " + addComp.district //+ " " + addComp.street + " " + addComp.streetNumber
                    getUserInfo({map:Info})
                    // console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });
            }
        },{enableHighAccuracy: true})
    }

    render() {
        return (
            <div>
                <div id="allmap" className={'map'}></div>
                <Tabbar/>
            </div>
        );
    }
}

export default Map;