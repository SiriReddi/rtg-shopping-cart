import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

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
export const selectTax = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      (accumalatedQuantity + cartItem.quantity * cartItem.price) * 0.1 +
      (accumalatedQuantity + cartItem.quantity * cartItem.price),
    0
  )
);

export const selectShippingCost = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        50 +
        (accumalatedQuantity + cartItem.quantity * cartItem.price) * 0.2 -
        5 * accumalatedQuantity,
      0
    )
);

export const selectTotalCost = createSelector(
  selectCartItems,
  [selectCartTotal],
  [selectTax],
  [selectShippingCost],
  (cartItems, total, tax) => total + tax
);
