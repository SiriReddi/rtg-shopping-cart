import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component.jsx";
//import { CartDropdown } from "../cart-dropdown/cart-dropdown.component.jsx";

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      hidden: true,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  /*describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });*/
});
