import React, { Component } from "react";
import Swiper from "swiper";
import ItemShop from "../../component/ItemShop/ItemShop";
import './Home.less';
// import store from "../../store";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 100
        });
    }

    

    // 在组件从 DOM 中移除之前立刻被调用。
    componentWillUnmount(){
        // console.log(123)
    }

    render(){
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

                {/* 功能入口 */}
                <div className="grid-box">
                    <div className="grid-item">
                        <div></div>
                    </div>
                    <div className="grid-item">
                        <div></div>
                    </div>
                    <div className="grid-item">
                        <div></div>
                    </div>
                    <div className="grid-item">
                        <div></div>
                    </div>
                </div>
                <div className="grid-box2">
                    <div className="grid-left"></div>
                    <div className="grid-right">
                        <div className="grid-right-item"></div>
                        <div className="grid-right-item"></div>
                    </div>
                </div>

                {/* 本地商家 */}
                <div className="shop-box">
                    <p className="shop-class">
                        <span>本地商家</span>
                        <span>更多</span>
                    </p>
                    <div className="shop-list">
                        <ItemShop {...this.props} />
                        <ItemShop {...this.props} />
                        <ItemShop {...this.props} />
                        <ItemShop {...this.props} />
                        <ItemShop {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home