import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './index.css';
import LoginForm from '../../components/LoginForm';

const { Header, Footer, Content } = Layout;

class Login extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  };

  onLoginSuccess = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <Layout>
        <Header className="login-header" />
        <Content className="login-content">
          <LoginForm onLoginSuccess={this.onLoginSuccess} />
        </Content>
        <Footer className="login-footer">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Login;
