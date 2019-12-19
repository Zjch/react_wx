import React, { Component } from 'react';
import { Button,WingBlank,WhiteSpace } from 'antd-mobile';
import './CreateShop.less'

class CreateShop extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }
    render() { 
        return (
            <div className="CreateShop">
                <div className="shop_item">
                    <div className="item_left">店铺名字</div>
                    <input className="item_ipt" type="text" placeholder="请输入店铺名字" />
                </div>
                <div className="shop_item">
                    <div className="item_left">营业时间</div>
                    <input className="item_ipt" type="text" placeholder="请输入营业时间" />
                </div>
                <div className="shop_item">
                    <div className="item_left">店铺负责人</div>
                    <input className="item_ipt" type="number" placeholder="请输入联系电话" />
                </div>
                <div className="shop_item">
                    <div className="item_left">联系电话</div>
                    <input className="item_ipt" type="number" placeholder="请输入联系电话" />
                </div>
                <div className="shop_item">
                    <div className="item_left">店铺地址</div>
                    <input className="item_ipt" type="number" placeholder="请输入联系电话" />
                </div>
                <div className="shop_item">
                    <div className="item_left">店铺简介</div>
                    <input className="item_ipt" type="text" placeholder="请输入联系电话" />
                </div>
                {/* <div className="shop_item">
                    <div className="item_left">店铺营业执照</div>
                    <input className="item_ipt" type="text" placeholder="请输入联系电话" />
                </div> */}
                <WhiteSpace />
                <WingBlank>
                    <Button type="primary">保存</Button>
                </WingBlank>
            </div>
        );
    }
}
 
export default CreateShop;