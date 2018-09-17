import React from 'react';
import '../assets/styles/common.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../pages/home';
import Error404 from '../pages/exception/404';
import Error403 from '../pages/exception/403';
import Error500 from '../pages/exception/500';
import BasicLayout from '../components/Layout/BasicLayout';
import UserLayout from '../components/Layout/UserLayout';

export default class IRouter extends React.Component{

    render(){
        return (<BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={UserLayout}/>
                        <Route path="/register" component={UserLayout}/>
                        <Route path="/user" render={()=>
                            <UserLayout>
                                <Switch>
                                    
                                </Switch>
                            </UserLayout>
                        }/>
                        <Route path="/" render={()=>
                            <BasicLayout>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/error403" component={Error403}/>
                                    <Route path="/error500" component={Error500}/>
                                    <Route path="/3" component={Error404}/>
                                    <Route component={Error404}/>
                                </Switch>
                            </BasicLayout>
                        }/>
                    </Switch>
                </App>
        </BrowserRouter>)
    }

}

//页面通用路由(打开新窗口)
class App extends React.Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}
