import React from 'react';
import { connect } from 'react-redux';


//load components
const App = () => (
  <div>
    <h1>Shitty portfolio site!</h1>
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
