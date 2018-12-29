import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    current: 'mail'
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
              <span>nav 1</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/back/about">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/back/contact">
              <Icon type="upload" />
              <span>nav 3</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;