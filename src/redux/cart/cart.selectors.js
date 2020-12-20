import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const taxselector = (state) => state.tax;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectTax = createSelector(
  [selectCartTotal],
  taxselector,
  (subtotal, tax) =>
    (subtotal * 0.1).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
);

export const selectShippingQuantity = createSelector(
  [selectCartItemsCount],
  (totalQuantity) => totalQuantity * 5
);

export const selectShippingCost = createSelector(
  selectCartTotal,
  selectShippingQuantity,
  (subtotal, shippingQuantity) => 50 + subtotal * 0.02 - shippingQuantity
);
