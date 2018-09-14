import React,{Fragment} from 'react'
import { Layout, Icon } from 'antd';
import SlideMenu from '../SlideMenu';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';
import MenuConfig from '../../config/icms'
import logo from '../../assets/images/logo.svg'

const { Header, Content} = Layout;

export default class BasicLayout extends React.PureComponent{

    state = {
        collapsed: false,
        // currentUser: {
        //     name: 'chad.yin'
        // },
        menusData: MenuConfig
    }

    handleMenuClick=(item, key)=>{
        if(key === "setting"){

        }else if(key === "logout"){

        }
    }
    
    handleCollapse=()=>{
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    componentDidMount(){
        
    }

    render(){
        const copyright = (<Fragment>
            Copyright <Icon type="copyright"/> 2018小卖柜平台开发部技术出品
        </Fragment>)

        return (
            <Layout>
                <SlideMenu
                    logo={logo}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    menusData={this.state.menusData}/>
                <Layout>
                    <Header style={{padding: 0}}>
                        <GlobalHeader
                            collapsed={this.state.collapsed}
                            onMenuClick={this.handleMenuClick}
                            onCollapse={this.handleCollapse}/>
                    </Header>
                    <Content style={{ margin: '24px 24px 0', height: '100%' }}>
                        {this.props.children}
                    </Content>
                    <GlobalFooter copyright={copyright}/>
                </Layout>
            </Layout>
        );
    }

}