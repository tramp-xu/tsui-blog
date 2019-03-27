import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Button } from 'antd';
import Navbar from '../navbar/Navbar';
import './layout.css';

import Home from '../../views/home';
import Tag from '../../views/tag';
import Article from '../../views/article';
import Write from '../../views/write';
// import NotFound from '../../routes/not-found';

const { Header, Sider, Content } = Layout;

class TsuiLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let { match, location } = this.props;
    return (
      <Layout className="tsui-layout">
        <Sider
          collapsed={this.state.collapsed}
          collapsible
          trigger={null}
        >
          <Navbar location={location.pathname}></Navbar>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Button
              className="trigger-btn"
              icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              type="primary"
            >
            </Button>
          </Header>
          <Content className="layout-content-main">
            <Switch>
              <Route
                component={Home}
                exact
                path={`${match.path}/home`}
              >
              </Route>
              <Route
                component={Tag}
                exact
                path={`${match.path}/tag`}
              >
              </Route>
              <Route
                component={Article}
                path={`${match.path}/article`}
              >
              </Route>
              <Route
                component={Write}
                exact
                path={`${match.path}/write`}
              >
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }


}

export default TsuiLayout;