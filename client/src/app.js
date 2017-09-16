import React from 'react';
import { connect } from 'react-redux';

import User from './components/User';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import GoogleSignIn from './components/GoogleSignIn';

//load components

const App = ({ user }) => (
  <div>
    {!user.id ? <div>
      <User />
      <SignUp />
      <GoogleSignIn />
    </div>
    :
    <Logout />}
  </div>
);

const mapState = (state) => ({
  user: state.userReducer.user
});

export default connect(mapState)(App);