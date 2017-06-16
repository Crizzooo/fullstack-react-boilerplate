import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkOAuth } from '../reducers/user';

export class GoogleSignIn extends Component {
  componentDidMount() {
    this.props.checkForSignedInUser();
  }
  render() {
    return (
      <a href="/api/users/google"><button>
        Login with Google
      </button></a>
    )
  }
}


const mapDispatch = dispatch => ({
  checkForSignedInUser: () => dispatch(checkOAuth())
});

export default connect(null, mapDispatch)(GoogleSignIn);
