import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './index.less'
import {Form, Select, Input, Button, message} from 'antd'
import BaseForm from '../../components/BaseForm'

class Register extends React.Component{

    state={
        prefix: "86"
    }

    handleLogin=()=>{
        this.props.history.push("/login");
    }

    handleRegister=()=>{
        let userInfo = this.props.form.getFieldsValue();
        message.info(userInfo.email);
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const field_phone = (
            <Form.Item>
                <Select 
                    size="large"
                    value="86"
                    style={{width: '20%', height: '40px', fontSize: '14px', marginRight: '-1px', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
                    <Select.Option key="86" value="86">+86</Select.Option>
                    <Select.Option key="87" value="87">+87</Select.Option>
                </Select>
                {getFieldDecorator("phone", {
                    rules: [{min: 11, max: 11}]
                })(
                    <Input 
                        style={{width: '80%', height: '40px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} 
                        placeHolder="11位手机号"/>
                )}
            </Form.Item>
        );
        const field_verifycode = (
            <Form.Item>
                {getFieldDecorator("code", {
                    rules: [{max: 6},{pattern: new RegExp('^\\d+$','g')}]
                })(
                    <Input style={{width: '65%', height: '40px', marginRight: '5%'}} placeholder="验证码"/>
                )}
                <Button style={{width: '30%', height: '40px'}}>获取验证码</Button>
            </Form.Item>
        );

        const fields = [{
            type: 'INPUT',
            width: '100%',
            placeHolder: '邮箱',
            field: 'email'
        },{
            type: 'INPUTPWD',
            width: '100%',
            placeHolder: '至少6位密码，区分大小写', 
            rules:[{
                min: 6
            }],
            field: 'password'
        },{
            type: 'INPUTPWD',
            width: '100%',
            placeHolder: '确认密码',
            field: 'confirmPassword'
        }, field_phone, field_verifycode]
        
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

                    <h1 style={{float: 'left', fontSize: '16px'}}>注册</h1>

                    <div style={{clear: 'both', paddingTop: '20px'}}>
                        <BaseForm 
                            fields={fields} 
                            getFieldDecorator={getFieldDecorator}/>
                        <div className={styles.commit}>
                            <Button 
                                type="primary" 
                                onClick={this.handleRegister}
                                style={{width: '100px', height: '35px', fontSize: '16px'}}>注册</Button>
                            <span onClick={this.handleLogin}>使用已有账号登录</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form.create()(Register);