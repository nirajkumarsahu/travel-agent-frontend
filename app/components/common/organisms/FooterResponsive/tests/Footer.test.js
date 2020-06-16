import React from "react";
import { shallow } from "enzyme";
import { FooterVanilla } from "../FooterResponsive";

describe("Footer Test Cases", () => {
  const props = {
    className: "testClass"
  };
  let output = "";

  beforeEach(() => {
    output = shallow(<FooterVanilla {...props} />);
  });

  test("should render correctly", () => {
    expect(output).toMatchSnapshot();
  });
});
