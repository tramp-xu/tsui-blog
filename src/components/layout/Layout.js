import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Button } from 'antd';
import Navbar from '../navbar/Navbar';
import style from './layout.module.css';

import Home from '../../routes/home/Home';
import About from '../../routes/about/About';
import NotFound from '../../routes/not-found';

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
    let { match } = this.props;
    return (
      <Layout className="tsui-layout">
        <Sider
          collapsed={this.state.collapsed}
          collapsible
          trigger={null}
        >
          <Navbar></Navbar>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Button
              className={style['trigger-btn']}
              icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              type="primary"
            >
            </Button>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
          }}
          >
            <Switch>
              <Route
                component={Home}
                exact
                path={`${match.path}/home`}
              >
              </Route>
              <Route
                component={About}
                path={`${match.path}/about`}
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