import React from "react";
import { shallow } from "enzyme";

import { CollectionPreview } from "./collection-preview.component.jsx";

it("should render CollectionPreview component", () => {
  const mockProps = {
    title: "Disney Princess",
    items: [],
  };

  const wrapper = shallow(<CollectionPreview {...mockProps} />);

  expect(wrapper).toMatchSnapshot();
});
