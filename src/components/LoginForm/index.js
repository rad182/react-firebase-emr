import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import PropTypes from 'prop-types';
import './index.css';
import firebase from '../../lib/firebase';

const FormItem = Form.Item;

class LoginForm extends PureComponent {
  state = {
    isLoading: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        this.setState({ isLoading: true });
        // login to firebase
        const { email, password } = values;
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(result => {
            console.log({ result });
            const { onLoginSuccess } = this.props;
            onLoginSuccess();
          })
          .catch(error => {
            this.setState({ isLoading: false });
            console.log({ error });
            message.destroy();
            message.error(error.message);
          });
      }
    });
  };

  render() {
    const { isLoading } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Form.create()(LoginForm);
