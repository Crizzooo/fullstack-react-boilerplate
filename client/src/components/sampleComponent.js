import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

// Project Dependencies
import { updateMessage, amountOfMessages } from '../reducers/dummyReducer';

import './sampleComponentStyle.scss';

class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.messageNumber = 0;
    //attach bound functions here
    //this.func = this.func.bind(this)
  }

  componentDidMount() {
    this.messageId = setInterval( () => {
      //incrememnt message id and send to reducer
      this.changeMessage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.messageId);
  }

  render() {
    return (
      <div className="sample">
        <h4 className="sampleHeader">Skip the Boring Stuff!</h4>
        <h6 className="sampleHeader">I can do { this.props.message }</h6>
      </div>
    );
  }

  changeMessage() {
    ++this.messageNumber;
    if (this.messageNumber > amountOfMessages) {
      this.messageNumber = 0;
    }
    store.dispatch(updateMessage(this.messageNumber));
  }
}

// EXAMPLE
const mapState = state => {
  // The reducers are combined in reducers/index.js and that is where their name is set
  // The format is state.REDUCERNAME.propertyOfREDUCERNAME
  return {
    message: state.dummyReducer.message
  };
};

// Unused example mapDispatch function
// const mapDispatch = state => {
//   return {};
// }

export default connect(mapState, null)(SampleComponent);
