import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

import {
  selectCartItems,
  selectCartTotal,
  selectTax,
  selectShippingCost,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

export const CheckoutPage = ({ cartItems, total, tax, shippingCost }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span> Product </span>
      </div>
      <div className="header-block">
        <span> Product Name </span>
      </div>
      <div className="header-block">
        <span> Product SKU </span>
      </div>
      <div className="header-block">
        <span> Product Quantity </span>
      </div>
      <div className="header-block">
        <span> Product Price ($) </span>
      </div>
      <div className="header-block">
        <span> Remove </span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      (does not include Tax or Shipping Cost) SUBTOTAL: ${total.toFixed(2)}
    </div>
    <div className="tax"> Tax: ${tax} </div>
    <div className="shippingCost">
      Shipping Cost: ${shippingCost.toFixed(2)}
    </div>
    <div className="totalCost">
      Total Cost: ${(total + parseFloat(tax) + shippingCost).toFixed(2)}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  tax: selectTax,
  shippingCost: selectShippingCost,
});

export default connect(mapStateToProps)(CheckoutPage);
