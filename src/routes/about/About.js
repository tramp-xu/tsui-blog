import React from 'react';
import { Button, Table } from 'antd';
import './About.css';
import {_getArticle} from '@/apis/about';

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title'
}, {
  title: '作者',
  dataIndex: 'author_name',
  key: 'author_name'
}, {
  title: '日期',
  dataIndex: 'date',
  key: 'date'
}];

class About extends React.Component {
  state = {
    records: []
  }

  componentDidMount () {
    this.getArticle();
  }

  getArticle = async () => {
    let res = await _getArticle();
    this.setState({
      records: res.data.data
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.getArticle}
          type="primary"
        >Primary</Button>

        <Table
          bordered
          columns={columns}
          dataSource={this.state.records}
        />
      </div>
    );
  }
}

export default About;