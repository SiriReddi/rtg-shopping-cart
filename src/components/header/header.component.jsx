import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import logo from "../../assets/RTG.png";
import "./header.styles.scss";

export const Header = ({ hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/shop">
      <img src={logo} alt="" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
