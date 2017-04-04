import React, { Component } from 'react';
import Form from 'react-awesome-form-validator';
import { isEmail } from 'validator';
import { formTypes } from '../../types';
import styles from './ResetPasswordPage.scss';

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Reset Password</h1>
        <Form
          onSubmit={formData => this.props.handleResetPassword(formData)}
          serverErrors={this.props.serverErrors}
        >

          <Form.Input
            name="email"
            placeHolder=""
            label="Email Address"
            type="email"
            value=""
            fieldClassName="form-field"
            startValidatingWhenIsPristine
            validate={(value) => {
              let valid = true;
              let errorMessage = '';
              if (!value.length) {
                valid = false;
                errorMessage = 'This field is required';
              } else if (!isEmail(value.replace(/\s/g, ''))) {
                valid = false;
                errorMessage = 'You must enter a valid email';
              }
              return { valid, errorMessage };
            }}
          />

          <Form.Input
            name="password"
            placeHolder=""
            type="password"
            label="Password"
            fieldClassName="form-field"
            onChange={value => this.setState({ password: value })}
            startValidatingWhenIsPristine
            validate={(value) => {
              let valid = true;
              let errorMessage = '';
              if (!value.length) {
                valid = false;
                errorMessage = 'This field is required';
              }
              return { valid, errorMessage };
            }}
          />

          <Form.Input
            name="re-password"
            placeHolder=""
            type="password"
            label="Confirm Password"
            fieldClassName="form-field"
            startValidatingWhenIsPristine
            validate={(value) => {
              let valid = true;
              let errorMessage = '';
              if (!value.length) {
                valid = false;
                errorMessage = 'This field is required';
              } else if (value !== this.state.password) {
                valid = false;
                errorMessage = 'The password does not match';
              }
              return { valid, errorMessage };
            }}
          />

          <Form.CustomSubmitButton>
            <div className={styles.submitWrapper}>
              <a className="button submit">Sign Up</a>
            </div>
          </Form.CustomSubmitButton>

        </Form>
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  handleResetPassword: React.PropTypes.func.isRequired,
  serverErrors: formTypes.serverErrors.isRequired
};

export default ResetPasswordPage;
