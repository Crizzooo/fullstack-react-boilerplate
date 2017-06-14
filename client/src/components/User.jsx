import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../reducers/user';

export const Login = ({ login }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault();
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
);

const mapDispatch = (dispatch) => ({
  login: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatch)(Login);
