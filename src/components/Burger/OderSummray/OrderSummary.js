import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] will update')
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delecious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
