import React from "react";
import { shallow } from "enzyme";

import { CollectionItem } from "./collection-item.component.jsx";

describe("CollectionItem component", () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = "www.testRTGImage.com";
  const mockName = "Princess Dreamer 6Pc";
  const mockSku = "12121212";
  const mockPrice = 1474.99;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
        sku: mockSku,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call addItem when AddButton clicked", () => {
    wrapper.find("CustomButton").simulate("click");

    expect(mockAddItem).toHaveBeenCalled();
  });

  /*it("should render imageUrl as a prop on BackgroundImage", () => {
    expect(
      wrapper.find(".collection-item").find(".image").prop("imageUrl")
    ).toBe(imageUrl);
  });*/

  it("should render name prop in NameContainer", () => {
    expect(wrapper.find(".collection-footer").find(".name").text()).toBe(
      mockName
    );
  });

  it("should render price prop in PriceContainer", () => {
    const price = wrapper.find(".collection-footer").find(".price").text();
    expect(parseFloat(price.substring(1))).toBe(mockPrice);
  });
});
