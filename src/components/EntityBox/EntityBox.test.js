import React from "react";
import EntityBox from "./EntityBox";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OnlineStatus from "../OnlineStatus/OnlineStatus";
import Counter from "../Counter";
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
    expect(enzymeWrapper.find(OnlineStatus).prop("isConnected")).toBe(
      props.connected
    );
    expect(enzymeWrapper.find(Counter).prop("count")).toBe(props.count);
  });
  it("check getting correct props", () => {
    const { props } = setup();
    const wrapper = mount(<EntityBox {...props} />);
    expect(wrapper.props().count).toBe(2);
    expect(wrapper.props().connected).toBe(false);
    expect(wrapper.props().entityName).toBe("My entity");
    expect(wrapper.props().entityType).toBe("Some");
  });
});
