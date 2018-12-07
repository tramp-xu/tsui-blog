import React from 'react'
import Navbar from "../navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout, Button } from 'antd';
import './layout.css'

import Home from '../../routes/home/Home'
import About from '../../routes/about/About'
import NotFound from '../../routes/not-found'

const { Header, Sider, Content } = Layout;

class TsuiLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className="tsui-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Navbar></Navbar>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Button
              className="trigger-btn"
              type="primary"
              icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            ></Button>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/404" component={NotFound}></Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default TsuiLayout 