import React from "react";
import { shallow } from "enzyme";
import { CartIcon } from "./cart-icon.component.jsx";

describe("CartIcon component", () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartHidden when icon is clicked", () => {
    wrapper.find(".cart-icon").simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render the itemCount as the text", () => {
    const itemCount = parseInt(wrapper.find(".item-count").text());
    expect(itemCount).toBe(0);
  });
});