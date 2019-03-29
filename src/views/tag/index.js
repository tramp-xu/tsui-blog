import React from 'react';
import { Table, Popconfirm, Input, message, Spin } from 'antd';
import EditableContext from './src/context';
import EditableFormRow from './src/editableRow';
import EditableCell from './src/editableCell';

import './index.scss';
import {_getTag, _addTag, _editTag, _deleteTag} from '@/apis/tag';

const Search = Input.Search;
const columnsOpt = [
  {
    title: '标签名',
    dataIndex: 'name',
    key: 'name',
    editable: true
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
  }
];

class Tag extends React.Component {
  state = {
    loading: false,
    records: [],
    editingId: '',
    curPage: 1,
    total: '',
    columns: [
      ...columnsOpt,
      {
        title: '编辑标签',
        key: 'operation',
        width: '120px',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <div className="g_flex-between">
                  <EditableContext.Consumer>
                    {
                      form => (
                        <span
                          className="g_cursor-pointer g_hover-primary"
                          onClick={() => this.save(form, record._id)}
                        >
                          Save
                        </span>
                      )
                    }
                  </EditableContext.Consumer>
                  <Popconfirm
                    onConfirm={() => this.cancel(record._id)}
                    title="Sure to cancel"
                  >
                    <span className="g_cursor-pointer g_hover-primary">Cancel</span>
                  </Popconfirm>
                </div>
              ) : (
                <div className="g_flex-between">
                  <i
                    className="anticon_user g_cursor-pointer g_hover-primary"
                    onClick={() => this.edit(record._id)}
                  >&#xe8cf;</i>

                  <Popconfirm
                    onConfirm={() => this.delete(record._id)}
                    placement="topRight"
                    title="所有含有此标签的文章将删除此标签"
                  >
                    <i
                      className="anticon_user g_cursor-pointer g_hover-primary"
                    >&#xe613;</i>
                  </Popconfirm>
                </div>
              )}
            </div>
          );
        }
      }
    ]
  }

  componentDidMount () {
    this.getTag(1);
  }

  getTag = async (page) => {
    this.setState({
      loading: true
    });
    let req = {
      pageSize: 10,
      curPage: page
    };
    let res = await _getTag(req);
    this.setState({
      loading: false,
      records: res.data.list,
      total: res.data.count,
      curPage: res.data.curPage
    });
  }

  isEditing = record => record._id === this.state.editingId

  cancel = () => {
    this.setState({
      editingId: ''
    });
  }

  save = (form, _id) => {
    form.validateFields(async (error, row) => {
      if (error) {
        return;
      }
      await _editTag({
        _id,
        ...row
      });
      const newData = [...this.state.records];
      const index = newData.findIndex(item => _id === item._id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ records: newData, editingId: '' });
      } else {
        newData.push(row);
        this.setState({ records: newData, editingId: '' });
      }
    });
  }

  edit = (key) => {
    this.setState({ editingId: key });
  }

  delete = async (_id) => {
    let res = await _deleteTag({_id});
    message.success(res.message);
    this.getTag(this.state.curPage);
  }

  addTag = async (value) => {
    if (!value) {
      message.error('新建标签名不能为空');
      return;
    }
    await _addTag({name: value});
    this.getTag(1);
  }

  pageChange= (page) => {
    this.getTag(page);
  }

  render() {
    console.log('object');
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'tagLevel' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <Spin spinning={this.state.loading}>
        <div className="tag-box">
          <Search
            className="add-btn-wrap"
            enterButton="添加标签"
            onSearch={value => this.addTag(value)}
            placeholder="新建标签名"
            size="large"
          />

          <Table
            bordered
            columns={columns}
            components={components}
            dataSource={this.state.records}
            pagination={{pageSize: 10, current: this.state.curPage, onChange: this.pageChange, total: this.state.total}}
            rowKey={record => record._id}
          />
        </div>
      </Spin>
    );
  }
}

export default Tag;