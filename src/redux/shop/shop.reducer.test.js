import shopReducer from "./shop.reducer";
import SHOP_DATA from "./shop_data";

const initialState = {
  collections: SHOP_DATA,
};
describe("shopReducer", () => {
  it("should return initial state", () => {
    expect(shopReducer(undefined, {})).toEqual({ ...initialState });
  });
});
