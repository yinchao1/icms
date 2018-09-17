import React from 'react'
import {connect} from 'react-redux';
import {withRouter, NavLink, Link} from 'react-router-dom';
import { Menu, Icon, Tooltip, Spin, Dropdown, Avatar } from 'antd';
import styles from './index.less'
import { switchMenu } from '../../redux/action';

class GlobalHeader extends React.PureComponent{
    
    toggle=(collapsed)=>{
        const { onCollapse } = this.props;
        onCollapse(!collapsed);
    }

    onMenuClick=({item, key})=>{
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.children, key));
    }

    render(){
        const{
            menuName,
            userName,
            collapsed,
        } = this.props;

        const menu = (
          <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
            <Menu.Item disabled key="user">
                <Icon type="user"/>个人中心
            </Menu.Item>
            <Menu.Item key="/3">
                <Icon type="setting"/><Link style={{display: 'inline-block'}} to="/3">设置</Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="/login">
                <Icon type="logout"/><Link style={{display: 'inline-block'}} to="/login">退出登录</Link>
            </Menu.Item>
          </Menu>  
        );

        return (
            <div className={styles.header}>
                <Icon 
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}/>
                <span className={styles.title}>{menuName}</span>
                <div className={styles.right}>
                    <Tooltip title="使用说明" className={styles.action}>
                        <a target="_blank" href=""/>
                        <Icon type="question-circle-o"/>
                    </Tooltip>
                    {userName?
                    (<Dropdown 
                        overlay={menu}
                        placement="bottomLeft">
                        <span className={`${styles.action} ${styles.account}`}>
                            <Avatar icon="user" shape="default" alt="U" className={styles.avatar}/>
                            <span className={styles.name}>{userName}</span>
                        </span>
                    </Dropdown>):(<Spin size="small" indicator={<Icon type="loading" style={{fontSize:12}} spin/>}/>)}
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        userName: state.userName,
        menuName: state.menuName
    }
})(withRouter(GlobalHeader))