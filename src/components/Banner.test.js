import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";

describe("Banner", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(<Banner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
