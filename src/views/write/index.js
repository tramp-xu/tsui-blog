import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Select, Button, message, Form, Input, Tooltip, Icon, Spin, Modal} from 'antd';
import BraftEditor from 'braft-editor';
import {_getTag} from '@/apis/tag';
import {_publishArticle} from '@/apis/article';

import 'braft-editor/dist/index.css';
import './index.scss';

const Option = Select.Option;
const confirm = Modal.confirm;

export class Write extends Component {
  state = {
    loading: false,
    editorState: BraftEditor.createEditorState(null),
    tags: [],
    options: null,
    selectedTags: null,
    formItemLayout: 'vertical'
  }
  componentDidMount () {
    this.getTag();
  }
  getTag = async () => {
    let res = await _getTag();
    let list = res.data.list;
    let children = [];
    if (list && list.length) {
      list.forEach(element => {
        children.push(<Option key={element.name}>{element.name}</Option>);
      });
    }
    this.setState({
      tags: res.data.list,
      options: children
    });
  }
  changeTag = (value) => {
    this.setState({
      selectedTags: value
    });
  }
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        this.publicArticl(values);
      }
    });
  }
  publicArticl = async (values) => {
    const text = this.state.editorState.toText();
    if (!text) {
      message.warning('文章不能为空');
      return;
    }
    this.setState({
      loading: true
    });
    const htmlContent = this.state.editorState.toHTML();
    await _publishArticle({
      content: htmlContent,
      tags: this.state.selectedTags,
      ...values
    });
    this.setState({
      loading: false
    });
    const _this = this;
    confirm({
      title: '提示',
      content: '再写一篇？',
      onOk() {
        _this.props.form.resetFields();
        _this.setState({
          editorState: BraftEditor.createEditorState(null),
          tags: [],
          options: null,
          selectedTags: null
        });
        setTimeout(() => {
          let dom = document.querySelector('.layout-content-main');
          dom.scrollTop = 0;
        }, 100);
      }
    });
  }
  handleEditorChange = (editorState) => {
    this.setState({
      editorState: editorState
    });
  }
  render() {
    const { editorState, options, formItemLayout } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        className="write-wrapper"
      >
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
          <Form className="login-form"
            onSubmit={this.handleSubmit}

          >
            <Form.Item
              {...formItemLayout}
              label="文章标题"
            >
              {
                getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input your title!' }]
                })(
                  <Input
                    placeholder="标题"
                  />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label={(
                <span>
                文章子标题
                  <Tooltip
                    placement="topLeft"
                    title="文章子标题，主要用于列表展示"
                  >
                    <Icon
                      className="sub-title-tip"
                      type="info-circle"
                    />
                  </Tooltip>
                </span>
              )}
            >
              {
                getFieldDecorator('subTitle', {
                  rules: [{ required: true, message: 'Please input your sub title!' }]
                })(
                  <Input
                    placeholder="子标题"
                  />)
              }
            </Form.Item>
          </Form>
          <BraftEditor
            onChange={this.handleEditorChange}
            value={editorState}
          />
          <div className="tag-wrap">
            <div className="label">
            请添加文章标签
            </div>
            <Select
              className="select"
              mode="multiple"
              onChange={this.changeTag}
              size="large"
            >{options}</Select>
          </div>
          <div className="btn-wrap">
            <Button
              onClick={this.handleSubmit}
              size="large"
              type="primary"
            >发 布</Button>
            {/* <Button
              icon="save-fill"
              size="large"
              type="primary"
            >保存到草稿</Button> */}
          </div>
        </Spin>
      </div>
    );
  }
}

let WriteWrap = Form.create({name: 'public'})(Write);
WriteWrap = connect()(WriteWrap);

export default WriteWrap;
