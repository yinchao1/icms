import React,{Fragment} from 'react'
import { Layout, Icon } from 'antd';
import SlideMenu from '../SlideMenu';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';
import logo from '../../assets/images/logo.svg'

const { Header, Content} = Layout;


class BasicLayout extends React.PureComponent{

    state = {
        collapsed: false,
    }
    
    handleCollapse=()=>{
        this.setState({
            collapsed: !this.state.collapsed
        })
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
                    collapsed={this.state.collapsed}/>
                <Layout>
                    <Header style={{padding: 0}}>
                        <GlobalHeader
                            collapsed={this.state.collapsed}
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

export default BasicLayout;
