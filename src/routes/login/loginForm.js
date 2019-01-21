import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';

import './loginForm.css';

class LoginForm extends React.Component {
  state = {
    loginSucess: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          loginSucess: true
        });
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
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginFormWrap = Form.create({name: 'login'})(LoginForm);


export default LoginFormWrap;