import React from 'react'
import {connect} from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import {switchMenu} from '../../redux/action';
import styles from './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SlideMenu extends React.Component{
    state = {
        currentKey: '/home',
        menus: []
    }

    getIcon=icon=>{
        if(typeof icon === "string"){
            if(icon.indexOf("http") >= 0){
                return <img src={icon} alt="icon" className={styles.icon}/>
            }else{
                return <Icon type={icon}/>
            }
        }
        return icon;
    }

    handleClick=({item, key})=>{
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.children));
        this.setState({
            currentKey:key
        })
    }

    componentWillMount(){
        let { menusData } = this.props;
        //let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        let currentKey = window.location.href.substring(window.location.href.lastIndexOf("/"));
        let menus = this.getNavMenuItems(menusData);
        this.setState({
            currentKey: currentKey,
            menus
        })
    }

    getNavMenuItems = menusData=>{
        if(!menusData){
            return []
        }
        return menusData
            .filter(item=> item.title)
            .map(item=>{
                return this.getSubMenuOrItem(item);
            })
            .filter(item=>item);
    }

    getSubMenuOrItem=item=>{
        if(item.children){
            return <SubMenu 
                key={item.key} 
                title={item.icon ? <span>{this.getIcon(item.icon)}<span>{item.title}</span></span> : item.title}>
                {this.getNavMenuItems(item.children)}
            </SubMenu>
        }
        return <Menu.Item
            key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
    }

    render(){
        const { logo, collapsed } = this.props;
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={230}
                className={styles.sider}>
                <div className={styles.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        <h1>ICMS</h1>
                    </Link>
                </div>
                <Menu
                    theme='dark'
                    mode='inline'
                    selectedKeys={this.state.currentKey}
                    onClick={this.handleClick}
                    style={{ padding: '16px 0', width: '100%' }}>
                    {this.state.menus}
                </Menu>
            </Sider>
        )
    }
}

export default connect()(SlideMenu);