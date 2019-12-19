import React, { Component } from "react";
import './My.less'

class My extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    // 成为商家
    toCreateShop = () => {
        this.props.history.push({pathname: '/createshop'})
    }

    render(){
        return (
            <div>
                <div className="header">
                    <div className="user">
                        <div className="user_img"></div>
                        <div className="user_nick">
                            <p>HI~, 此用户已成仙</p>
                        </div>
                    </div>
                </div>

                <div className="handle_box">
                    <div className="handle_item" onClick={this.toCreateShop}>
                        <p>成为商家</p>
                        <p>></p>
                    </div>
                    <div className="handle_item" onClick={this.toCreateShop}>
                        <p>我的店铺</p>
                        <p>></p>
                    </div>
                    <div className="handle_item">
                        <p>关于我们</p>
                        <p>></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default My