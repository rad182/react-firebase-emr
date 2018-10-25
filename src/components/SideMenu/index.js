import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import './index.css';

const { Sider } = Layout;

export default class SideMenu extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    collapsed: PropTypes.bool.isRequired,
  };

  handleClick = e => {
    const { history } = this.props;
    switch (e.key) {
      case 'doctors':
        history.push('/doctors');
        break;
      case 'patients':
        history.push('/patients');
        break;
      case 'dashboard':
        history.push('/');
        break;
      default:
        break;
    }
  };

  render() {
    const { collapsed, location } = this.props;
    return (
      <Sider collapsed={collapsed}>
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
        </Menu>
      </Sider>
    );
  }
}
