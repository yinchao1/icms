import React from 'react'
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import { Menu, Icon, Tooltip, Spin, Dropdown, Avatar } from 'antd';
import styles from './index.less'
import IcmsActionCreator from '../../redux/action';

class GlobalHeader extends React.PureComponent{
    
    toggle=(collapsed)=>{
        const { onCollapse } = this.props;
        onCollapse(!collapsed);
    }

    onMenuClick=({item, key})=>{
        const {dispatch} = this.props;
        dispatch(IcmsActionCreator.switchMenu(item.props.children, key));
    }

    render(){
        const{
            collapsed,
        } = this.props;

        const {menus} = this.props.menus;
        const {userInfo} = this.props.userInfo;

        const menu = (
          <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
            <Menu.Item disabled key="user">
                <Icon type="user"/>个人中心
            </Menu.Item>
            <Menu.Item key="/3">
                <Icon type="setting"/><NavLink style={{display: 'inline-block'}} to="/3">设置</NavLink>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="/login">
                <Icon type="logout"/><NavLink style={{display: 'inline-block'}} to="/login">退出登录</NavLink>
            </Menu.Item>
          </Menu>  
        );

        return (
            <div className={styles.header}>
                <Icon 
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}/>
                <span className={styles.title}>{menus?menus.menuName:""}</span>
                <div className={styles.right}>
                    <Tooltip title="使用说明" className={styles.action}>
                        <a target="_blank" href=""/>
                        <Icon type="question-circle-o"/>
                    </Tooltip>
                    {userInfo?
                    (<Dropdown 
                        overlay={menu}
                        placement="bottomLeft">
                        <span className={`${styles.action} ${styles.account}`}>
                            <Avatar icon="user" shape="default" alt="U" className={styles.avatar}/>
                            <span className={styles.name}>{userInfo.userName}</span>
                        </span>
                    </Dropdown>):(<Spin size="small" indicator={<Icon type="loading" style={{fontSize:12}} spin/>}/>)}
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        userInfo: state.userInfo,
        menus: state.menus
    }
})(withRouter(GlobalHeader))