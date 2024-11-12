import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />
    );

    const thElement = wrapper.find("th");
    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(thElement.prop("colSpan")).toBe(2);
    expect(thElement.text()).toBe("test");
  });

  it("should render two cells when textSecondCell is not null and isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />
    );

    const cells = wrapper.find("td");
    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(cells.at(0).text()).toBe("test");
    expect(cells.at(1).text()).toBe("test");
  });
});
