import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    defaultSelectedKeys: ['home']
  }

  handlerPath = (location) => {
    let names = location.split('/');
    let name = names[names.length - 1];
    return [name];
  }


  render () {
    let {location} = this.props;
    return (
      <div>
        <div className="logo">Logo</div>
        <Menu
          defaultSelectedKeys={this.handlerPath(location)}
          mode="inline"
          // selectedKeys={this.state.selectedKeys}
          theme="dark"
        >
          <Menu.Item key="home">
            <Link to="/back/home">
              <Icon type="user" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="tag">
            <Link to="/back/tag">
              <Icon type="tags" />
              <span>标签管理 (Tags)</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="article">
            <Link to="/back/article">
              <Icon type="video-camera" />
              <span>文章管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="write">
            <Link to="/back/write">
              <Icon type="upload" />
              <span>新建文章</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;