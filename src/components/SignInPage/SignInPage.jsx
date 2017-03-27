import React from 'react';
import Form from 'react-awesome-form-validator';
import { isAlpha, isEmail } from 'validator';

const SignInPage = ({ handleLogin }) => (
  <div>
    <h1>Sign</h1>

    <Form onSubmit={(formData) => handleLogin(formData)} >
      <Form.Input
        name='email'
        placeHolder=''
        label='Email Address'
        type='email'
        value=''
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
        name='password'
        placeHolder=''
        type='password'
        label='Password'
        fieldClassName="form-field"
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

      <Form.CustomSubmitButton>
        <div className="form-field form-submit">
          <a className="button submit">Sign In</a>
        </div>
      </Form.CustomSubmitButton>

    </Form>
  </div>
);


SignInPage.propTypes = {
  handleLogin: React.PropTypes.func.isRequired
};

export default SignInPage;
