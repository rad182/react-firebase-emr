import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import PropTypes from 'prop-types';
import firebase from '../../lib/firebase';
import './index.css';

const { Header } = Layout;

export default class NavHeader extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    collapsed: PropTypes.bool.isRequired,
    onToggleCollapsed: PropTypes.func.isRequired,
  };

  onClickAccountMenu = e => {
    const { history } = this.props;
    switch (e.key) {
      case 'logout':
        // sign out from firebase
        firebase.auth().signOut();
        break;
      case 'settings':
        history.push('/settings');
        break;
      default:
        break;
    }
  };

  toggleCollapsed = () => {
    const { onToggleCollapsed, collapsed } = this.props;
    onToggleCollapsed(!collapsed);
  };

  render() {
    const { collapsed } = this.props;

    const accountMenu = (
      <Menu selectedKeys={[]} onClick={this.onClickAccountMenu}>
        <Menu.Item>
          <Icon type="user" />
          Edit Profile
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="header">
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className="trigger"
          onClick={this.toggleCollapsed}
        />
        <div className="right">
          <span className="notification-button">
            <Icon type="bell" className="notification-icon" />
          </span>
          <Dropdown overlay={accountMenu}>
            <span className="account">
              <Avatar size="small" icon="user" className="avatar" />
              <span className="account-name">John Doe</span>
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
