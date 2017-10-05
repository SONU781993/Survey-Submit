import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as action from '../actions'
class Payment extends React.Component {
  render() {

    return (
      <StripeCheckout amount={500}
        token={token => this.props.handltToken(token)}
        stripeKey={process.env.React_App_Stripe_key}>
          <button className="btn btn-primary">Add Credit</button>
        </StripeCheckout>
      );
  }
}
export default connect(null, action)(Payment);
