import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import router from "../../router";
import TabBar from "./TabBar"; // 底部菜单

class TabRouter extends Component {
    render() {
        return ( 
            <Router>
                <div>
                    <Route path="/" component={TabBar} />
                    {
                        router.map((route, i) => (
                            <Route 
                                key={i} 
                                exact={route.exact} 
                                path={route.path} 
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />
                        ))
                    }
                </div>
            </Router>
         );
    }
}

export default TabRouter;