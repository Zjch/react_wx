import React, { Component } from "react";
import { TabBar } from 'antd-mobile'
import './TabBar.less'

import store from "../../store";
import { handleTabHiddenAction } from "../../store/actionCreators";

class TabBars extends Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: store.getState().tabHidden,
            selectTab: 'index'
        }
        store.subscribe(this.handleHidden)
    }

    componentWillReceiveProps (){
        let pathname = this.props.history.location.pathname
        // 判断是否跳转页为tabbar
        if (pathname !== '/' && pathname !== '/liferang' && pathname !== '/my') {
            const action = handleTabHiddenAction(true)
            store.dispatch(action)
        }else{
            const action = handleTabHiddenAction(false)
            store.dispatch(action)
        }
    }

    handleHidden = () => {
        this.setState({
            hidden: store.getState().tabHidden
        })
    }

    render(){
        const pathname = this.props.location.pathname
        return (
            <div style={{position: 'fixed', height: '50px', width: '100%', bottom: 0, zIndex: 9}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        selected={pathname === '/'}
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}/>
                        }
                        onPress={() => {
                            this.props.history.push('/')
                        }}
                    >
                        {/* { pathname === '/' ? <Home {...this.props}/> : null } */}
                    </TabBar.Item>
                    <TabBar.Item
                        title="生活圈"
                        key="生活圈"
                        selected={pathname === '/liferang'}
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}/>
                        }
                        onPress={() => {
                            this.props.history.push('/liferang')
                        }}
                    >
                        {/* { pathname === '/liferang' ? <LifeRang/> : null } */}
                    </TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="我的"
                        selected={pathname === '/my'}
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}/>
                        }
                        onPress={() => {
                            this.props.history.push('/my')
                        }}
                    >
                        {/* { pathname === '/my' ? <My/> : null } */}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default TabBars