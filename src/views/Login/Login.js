import React, { Component } from 'react';
import './Login.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ParticlesBg from 'particles-bg'
import axios from 'axios'
class Login extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
    let {tel,password} = values
    axios.post("http://localhost:3000/api/users/login",{
        tel,
        password
    }).then(res=>{
        console.log(res.data)
    })
  };
  render() {
    return (
      <div >
        <h1 style={{color:"black",font:'900 60px/2 ""',textAlign:"center"}}>魅力惠后台管理系统</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="tel"
            rules={[{ required: true, message: '请输入你的手机号' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
        </Button>
          </Form.Item>
        </Form>

        <ParticlesBg type="circle" bg={true} />
      </div>
    )
  }

}
export default Login;