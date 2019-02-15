import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '@/redux/action/user';
import {
  Form, Icon, Input, Button, Spin
} from 'antd';

import './loginForm.css';
import {_login} from '@/apis/login';

class LoginForm extends React.Component {
  state = {
    loginSucess: false,
    loading: false
  }

  onLogin = async (values) => {
    const res = await _login(values);
    if (res.code === 200) {
      const user = res.user;
      this.props.dispatch(login(user));
      localStorage.token = res.data.token;
      localStorage.user = res.data.user;
      this.setState({
        loginSucess: true,
        loading: false
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleSubmit = (e) => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.onLogin(values);
        // this.setState({
        //   loginSucess: true
        // });
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    if (this.state.loginSucess) {
      return <Redirect to="/back/home"></Redirect>;
    }
    return (
      <div className="login-box">
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
          <Form className="login-form"
            onSubmit={this.handleSubmit}
          >
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }]
                })(
                  <Input
                    placeholder="Username"
                    prefix={
                      <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                        type="user"
                      />
                    }
                  />)
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }]
                })(
                  <Input
                    placeholder="Password"
                    prefix={
                      <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                        type="lock"
                      />
                    }
                    type="password"
                  />
                )}
            </Form.Item>
            <Form.Item>
              <div className="button-row">
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  type="primary"
                >
              Log in
                </Button>
                {/* {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>Remember me</Checkbox>
                )} */}
              </div>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }
}

let LoginFormWrap = Form.create({name: 'login'})(LoginForm);
LoginFormWrap = connect()(LoginFormWrap);

export default LoginFormWrap;