import React, { Component } from 'react';
import Swiper from "swiper";
import './ShopDetail.less'
import imgs from '../../assets/images/img.png'

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    componentDidMount(){
        new Swiper('.swiper-container', { 
            speed: 400,
            spaceBetween: 100
        });
    }
    render() { 
        return ( 
            <div>
                {/* banner */}
                <div className="swiper-container banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                </div>
                <div className="main_top">
                    <p className="shop_name">哈哈哈哈哈</p>
                    <p className="shop_opening_hours">营业时间: 周一至周日 09:00 ~ 19:00</p>
                    <div className="shop_line">
                        <p>电话: 15535558982</p>
                        <span>拨打</span>
                    </div>
                    <div className="shop_line">
                        <p>电话: 15535558982</p>
                        <span>拨打</span>
                    </div>
                </div>
                {/* 详情介绍 */}
                <div className="main_info">
                    <p className="main_info_title">详情介绍</p>
                    <p className="main_info_txt">移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键移动设备优先在 Bootstrap 2 中，我们对框架中的某些关键</p>
                    <img className="main_info_img" src={imgs} alt="图片" />
                </div>
            </div>
         );
    }
}
 
export default ShopDetail;