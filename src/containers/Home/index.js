import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Doctors from './Doctors';
import Patients from './Patients';
import Settings from './Settings';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleClick = e => {
    const { history } = this.props;
    switch (e.key) {
      case 'logout':
        history.push('/login');
        break;
      case 'doctors':
        history.push('/doctors');
        break;
      case 'patients':
        history.push('/patients');
        break;
      case 'dashboard':
        history.push('/');
        break;
      case 'settings':
        history.push('/settings');
        break;
      default:
        break;
    }
  };

  render() {
    const { collapsed } = this.state;
    const { location } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[
              location.pathname.replace('/', '') || 'dashboard',
            ]}
            mode="inline"
            onClick={this.handleClick}
          >
            <Menu.Item key="dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="patients">
              <Icon type="team" />
              <span>Patients</span>
            </Menu.Item>
            <Menu.Item key="doctors">
              <Icon type="medicine-box" />
              <span>Doctors</span>
            </Menu.Item>
            <Menu.Item key="settings">
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="logout">
              <Icon type="logout" />
              <span>Log Out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/patients" component={Patients} />
            <Route exact path="/settings" component={Settings} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
