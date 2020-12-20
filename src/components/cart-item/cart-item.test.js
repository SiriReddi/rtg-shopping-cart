import React from "react";
import { shallow } from "enzyme";
import CartItem from "./cart-item.component.jsx";

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testRTGImage.com",
    price: 1474.45,
    name: "Princess Dreamer 6Pc",
    quantity: 3,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
