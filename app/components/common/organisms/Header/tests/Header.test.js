import React from "react";
import { shallow } from "enzyme";
import { HeaderVanilla } from "../Header";

describe("Header Test Cases", () => {
  const props = {
    className: "testClass"
  };
  let output = "";

  beforeEach(() => {
    output = shallow(<HeaderVanilla {...props} />);
  });

  test("should render correctly", () => {
    expect(output).toMatchSnapshot();
  });
});
