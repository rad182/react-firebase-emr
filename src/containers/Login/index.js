import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.css';
import LoginForm from '../../components/LoginForm';

const { Header, Footer, Content } = Layout;

class Login extends Component {
  onPressLogin = () => {};

  render() {
    return (
      <Layout>
        <Header className="login-header" />
        <Content className="login-content">
          <LoginForm />
        </Content>
        <Footer className="login-footer">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Login;
