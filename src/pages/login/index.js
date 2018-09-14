import React from 'react'
import {connect} from 'react-redux';
import {login} from '../../redux/action';
import { Form, Input, Icon, Button, Tabs, Row, Col, Checkbox, message } from 'antd';
import logo from '../../assets/images/logo.svg';
import styles from './index.less';


class Login extends React.Component{

    state={
        autoLogin: true,
        activeKey: "1"
    }

    handleTabChange=(key)=>{
        this.setState({activeKey: key})
    }

    handleRegister=()=>{
        //window.location.href = "http://localhost:3000/#/user/register";
        this.props.history.push("/register");
    }

    handleLogin=()=>{
        let account = {};
        if(this.state.activeKey === "1"){
            account = this.props.form.getFieldsValue(["username", "password"]);
            message.info("用户名:" + account.username + ",密码:" + account.password);
        }else{
            account = this.props.form.getFieldsValue(["phone", "code"]);
            message.info("手机号:" + account.phone + ",验证码:" + account.code);
        }
        
        // window.location.href = "http://localhost:3000/home";

        const {dispatch} = this.props;
        dispatch(login(account.username));

        this.props.history.push("/home");
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>
                            <img src={logo} alt="logo"/>
                            <span>ICMS</span>
                        </div>
                        <span>小卖柜后台管理系统</span>
                    </div>
                    
                    <Tabs defaultActiveKey="1" activeKey={this.state.activeKey} tabBarStyle={{borderBottom: 0}} onChange={this.handleTabChange}>
                        <Tabs.TabPane tab="账户密码登陆" key="1">
                            <Form>
                                <Form.Item>
                                    {getFieldDecorator("username",{
                                        rules:[{required: true, message:"请输入用户名"}]
                                    })(
                                        <Input 
                                            prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}}/>} 
                                            placeholder="请输入用户名" 
                                            style={{height: '40px', fontSize: '15px', marginTop: '25px'}}/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("password",{
                                        rules:[{required: true, message:"请输入您的密码"}]
                                    })(
                                        <Input 
                                            prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, .25)'}}/>} 
                                            type="password" 
                                            placeholder="请输入密码"  
                                            style={{height: '40px', fontSize: '15px'}}/>
                                    )}
                                </Form.Item>
                            </Form>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="手机号登陆" key="2">
                                <Form>
                                    <Form.Item>
                                        {getFieldDecorator("phone",{
                                            rules: [{
                                                required: true, 
                                                message: '请输入手机号'
                                            },{
                                                pattern: new RegExp('^\\w+$','g'), 
                                                message: '密码必须为数字或字母'
                                            },{
                                                min: 6,
                                                max: 12,
                                                message: '密码长度为6-12位'
                                            }]
                                        })(
                                            <Input 
                                                prefix={<Icon type="phone" style={{color: 'rgba(0, 0, 0, .25)'}}/>}
                                                type="phone"
                                                placeholder="请输入手机号"
                                                style={{height: '40px', fontSize: '15px', marginTop: '25px'}}/>
                                        )}
                                    </Form.Item>
                                    <Row>
                                        <Col span={16}>
                                            <Form.Item>
                                                {getFieldDecorator("code", {
                                                    rules:[{
                                                        max: 6
                                                    }]
                                                })(
                                                    <Input
                                                        prefix={<Icon type="mail" style={{color: 'rgba(0, 0, 0, .25)'}}/>}
                                                        type="number"
                                                        placeholder="验证码"
                                                        style={{height: '40px', fontSize: '15px'}}/>
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Button style={{height: '40px', fontSize: '15px', width: '90%', marginLeft: '10px'}}>获取验证码</Button>
                                        </Col>
                                    </Row>
                                </Form>
                        </Tabs.TabPane>
                    </Tabs>

                    <div className={styles.flag}>
                        <Checkbox
                            checked={this.state.autoLogin}>
                            自动登录
                        </Checkbox>
                        <span>忘记密码</span>
                    </div>    

                    <Button 
                        type="primary"
                        style={{width: '100%', height: '40px', marginTop: '20px', fontSize: '16px'}}
                        onClick={this.handleLogin}>
                        登录
                    </Button>

                     <div className={styles.flag} style={{marginTop: 20}}>
                        <span>其它登录方式</span>
                        <span onClick={this.handleRegister}>注册账户</span>
                    </div>  

                </div>
            </div>
        )
    }
}

export default connect()(Form.create()(Login));