import React from 'react'
import {connect} from 'react-redux';
import { Menu, Icon, Tooltip, Spin, Dropdown, Avatar } from 'antd';
import styles from './index.less'

class GlobalHeader extends React.PureComponent{
    
    toggle=(collapsed)=>{
        const { onCollapse } = this.props;
        onCollapse(!collapsed);
    }

    render(){
        const{
            menuName,
            userName,
            collapsed,
            onMenuClick,
        } = this.props;

        const menu = (
          <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
            <Menu.Item disabled key="user">
                <Icon type="user"/>个人中心
            </Menu.Item>
            <Menu.Item key="setting">
                <Icon type="setting"/>设置
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout">
                <Icon type="logout"/>退出登录
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
})(GlobalHeader)