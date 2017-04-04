import React from 'react';
import Form from 'react-awesome-form-validator';
import { isEmail } from 'validator';
import { formTypes } from '../../types';
import styles from './ForgotPasswordPage.scss';

const ForgotPasswordPage = ({ handleForgotPassword, serverErrors }) => (
  <div className={styles.wrapper}>
    <h1>Forgot Password</h1>
    <Form
      onSubmit={formData => handleForgotPassword(formData)}
      serverErrors={serverErrors}
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

      <Form.CustomSubmitButton>
        <div className={styles.submitWrapper}>
          <a className="button submit">Sign Up</a>
        </div>
      </Form.CustomSubmitButton>

    </Form>
  </div>
);

ForgotPasswordPage.propTypes = {
  handleForgotPassword: React.PropTypes.func.isRequired,
  serverErrors: formTypes.serverErrors.isRequired
};

export default ForgotPasswordPage;
