import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    current: '1'
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }

  render () {
    return (
      <div>
        <div className="logo">Logo</div>
        <Menu defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Link to="/back/home">
              <Icon type="user" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/back/tags">
              <Icon type="tags" />
              <span>标签管理 (Tags)</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/back/about">
              <Icon type="video-camera" />
              <span>About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/back/contact">
              <Icon type="upload" />
              <span>Contact</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/back/demo">
              <Icon type="upload" />
              <span>Demo</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;