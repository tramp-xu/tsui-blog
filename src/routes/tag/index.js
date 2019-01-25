import React from 'react';
import { Button, Table } from 'antd';
import {_getTag} from '@/apis/tag';

const columns = [
  {
    title: '标签名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate'
  },
  {
    title: '关联文章数',
    dataIndex: 'relatedCount',
    key: 'relatedCount'
  },
  {
    title: '等级',
    dataIndex: 'tagLevel',
    key: 'tagLevel'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};

class Tag extends React.Component {
  state = {
    records: []
  }

  componentDidMount () {
    this.getTag();
  }

  getTag = async () => {
    let res = await _getTag();
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
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default Tag;