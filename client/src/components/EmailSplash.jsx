import React, { Component } from 'react';
import { connect } from 'react-redux';

import './EmailSplashStyle.scss';

class EmailSplash extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //attach bound functions here
    //this.func = this.func.bind(this)
  }

  render() {
    return (
      <div className="splashBackground">
        <div className="emailSignUp">
          <div id="mc_embed_signup">
            <form action="//play.us15.list-manage.com/subscribe/post?u=d806631c2c2b68285d31de691&amp;id=c29285afce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
              	<label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
              	<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required></input>
                  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_d806631c2c2b68285d31de691_c29285afce" tabindex="-1" value=""></input>
                  </div>
                  <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// EXAMPLE
const mapState = state => {
  // The reducers are combined in reducers/index.js and that is where their name is set
  // The format is state.REDUCERNAME.propertyOfREDUCERNAME
  return {};
};

// Unused example mapDispatch function
// const mapDispatch = state => {
//   return {};
// }

export default connect(mapState, null)(EmailSplash);


// <!-- Begin MailChimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">

//COMPONENT CODE
// <div id="mc_embed_signup">
//   <form action="//play.us15.list-manage.com/subscribe/post?u=d806631c2c2b68285d31de691&amp;id=c29285afce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
//     	<label for="mce-EMAIL">Subscribe to our mailing list</label>
//     	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
//         <div style="position: absolute; left: -5000px;" aria-hidden="true">
//           <input type="text" name="b_d806631c2c2b68285d31de691_c29285afce" tabindex="-1" value="">
//         </div>
//         <div class="clear">
//           <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
//         </div>
//     </div>
//   </form>
// </div>
//
// <!--End mc_embed_signup-->
