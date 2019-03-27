import React from 'react';
import { Table, Popconfirm, Spin } from 'antd';
import EditableContext from './src/context';
import EditableFormRow from './src/editableRow';
import EditableCell from './src/editableCell';

import './index.scss';
import {_getArticle, _editArticleTitle, _deleteArticle} from '@/apis/article';

const columnsOpt = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    editable: true
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate'
  }
];

class Article extends React.Component {
  state = {
    loading: false,
    records: [],
    editingId: '',
    curPage: 1,
    total: '',
    columns: [
      ...columnsOpt,
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        render: (text, record) => {
          let {tags} = record;
          tags = tags || [];
          return (
            tags.map(item => {
              return (
                <span
                  className="tag-block"
                  key={item}
                >{item}</span>
              );
            })
          );
        }
      },
      {
        title: '操 作',
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
                    title="确定删除此文章？"
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
    this.getArticle(1);
  }

  getArticle = async (page) => {
    this.setState({
      loading: true
    });
    let req = {
      pageSize: 10,
      curPage: page
    };
    let res = await _getArticle(req);
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

  edit = (key) => {
    this.setState({ editingId: key });
  }

  save = (form, _id) => {
    form.validateFields(async (error, row) => {
      if (error) {
        return;
      }
      await _editArticleTitle({
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

  delete = async (_id) => {
    await _deleteArticle({_id});
    this.getArticle(this.state.curPage);
  }

  pageChange= (page) => {
    this.getArticle(page);
  }

  render() {
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
          inputType: 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <Spin spinning={this.state.loading}
        tip="Loading..."
      >
        <div className="article-box">
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

export default Article;