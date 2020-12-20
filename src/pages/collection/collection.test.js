import React from "react";
import { shallow } from "enzyme";

import { CollectionPage } from "./collection.component.jsx";
import CollectionItem from "../../components/collection-item/collection-item.component.jsx";

describe("CollectionPage", () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: "Disney Princess",
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it("should render the CollectionPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the same number of CollectionItems as collection array", () => {
    expect(wrapper.find(CollectionItem).length).toEqual(mockItems.length);
  });
});
