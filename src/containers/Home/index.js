import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Doctors from './Doctors';
import Patients from './Patients';
import Settings from './Settings';
import RedirectAs404 from '../../components/RedirectAs404';
import SideMenu from '../../components/SideMenu';
import NavHeader from '../../components/NavHeader';
import './index.css';

const { Content, Footer } = Layout;

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

  onToggleCollapsed = () => {
    this.setState(state => ({ collapsed: !state.collapsed }));
  };

  render() {
    const { collapsed } = this.state;
    const { location, history } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu collapsed={collapsed} location={location} history={history} />
        <Layout>
          <NavHeader
            collapsed={collapsed}
            history={history}
            onToggleCollapsed={this.onToggleCollapsed}
          />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/doctors" component={Doctors} />
              <Route exact path="/patients" component={Patients} />
              <Route exact path="/settings" component={Settings} />
              <Route component={RedirectAs404} />
            </Switch>
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
