import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './ItemShop.less'

class ItemShop extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    toDetail = () => {
        this.props.history.push({pathname: '/shopdetail'})
    }
    render() { 
        return ( 
            // <Link to="/shopdetail">
            <div className="item-shop" onClick={this.toDetail}>
                <div className="item-shop-image">
                    <img src="" alt=""/>
                </div>
                <div className="item-shop-txt">
                    <p className="item-shop-name">商家名字</p>
                    <p className="item-shop-intro">商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介</p>
                    <p className="item-shop-address">地址: 政府大街东100米</p>
                </div>
            </div>
            // </Link>
         );
    }
}
 
export default ItemShop;