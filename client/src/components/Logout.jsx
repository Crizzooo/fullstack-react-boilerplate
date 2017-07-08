import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../reducers/user';

export const Logout = ({ logout }) => (
  <button onClick={logout}>Logout</button>
);

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default connect(null, mapDispatch)(Logout);
