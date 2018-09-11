import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import styles from './UserLayout.less'
import GlobalFooter from '../GlobalFooter';
import { Icon } from 'antd';
import Login from '../../pages/login'
import Register from '../../pages/register'

export default class UserLayout extends React.PureComponent{

    getPageTitle=()=>{
        let title = "ICMS";

        return title;
    }

    render(){
        const links=[{
            title: '帮助',
            key: 'help',
            href: ''
        },{
            title: '隐私',
            key: 'help',
            href: ''
        },{
            title: '条款',
            key: 'help',
            href: ''
        }]

        const copyright = (<Fragment>
            Copyright <Icon type="copyright"/> 2018小卖柜平台开发部技术出品
        </Fragment>)

        return (
            <div title={this.getPageTitle()}>
                <div className={styles.continer}>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                        {this.props.children}
                    </div>
                    <GlobalFooter links={links} copyright={copyright}/>
                </div>
            </div>
        )
    }

}