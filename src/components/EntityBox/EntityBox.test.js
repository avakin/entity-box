import React from "react";
import EntityBox from "./EntityBox";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    entityType: "Some",
    entityName: "My entity",
    connected: false,
    count: 2
  };

  const enzymeWrapper = shallow(<EntityBox {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("EntityBox rendering", () => {
  it("renders EntityBox component with correct props", () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find("div.type").text()).toBe(props.entityType);
    expect(enzymeWrapper.find("div.name").text()).toBe(props.entityName);
  });
});
