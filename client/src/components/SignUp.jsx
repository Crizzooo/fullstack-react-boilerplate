// change this for sign up - right now its copied from Login.jsx

import React from 'react';
import { connect } from 'react-redux';

import { signupUser } from '../reducers/user';

export const SignUp = ({ signup }) => (
  <form onSubmit={evt => {
    evt.preventDefault();
    signup(evt.target.username.value, evt.target.password.value);
  } }>
    <input name="username" />
    <input name="password" type="password" />
    {
      /*Other fields should go here for storage in database if necessary*/
    }
    <input type="submit" value="Signup" />
  </form>
);

const mapDispatch = (dispatch) => ({
  signup: (email, password) => dispatch(signupUser(email, password))
});

export default connect(null, mapDispatch)(SignUp);
