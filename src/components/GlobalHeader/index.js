import React from 'react'
import { Menu, Icon, Tooltip, Spin, Dropdown, Avatar } from 'antd';
import styles from './index.less'

export default class GlobalHeader extends React.PureComponent{
    
    toggle=(collapsed)=>{
        const { onCollapse } = this.props;
        onCollapse(!collapsed);
    }

    render(){
        const{
            currentUser = {},
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
                <div className={styles.right}>
                    <Tooltip title="使用说明" className={styles.action}>
                        <a target="_blank" href=""/>
                        <Icon type="question-circle-o"/>
                    </Tooltip>
                    {currentUser.name?
                    (<Dropdown 
                        overlay={menu}
                        placement="bottomLeft">
                        <span className={`${styles.action} ${styles.account}`}>
                            <Avatar icon="user" shape="default" alt="U" className={styles.avatar}/>
                            <span className={styles.name}>{currentUser.name}</span>
                        </span>
                    </Dropdown>):(<Spin size="small" indicator={<Icon type="loading" style={{fontSize:12}} spin/>}/>)}
                </div>
            </div>
        );
    }
}