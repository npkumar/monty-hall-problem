import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubmitButton from "./SubmitButton";
import { ApplicationContext } from "../services/Application/ApplicationProvider";

const value = {
  application: {
    isSimulationRunning: false,
    simulations: 4000,
    isChangeDoor: true,
  },
};

describe("SubmitButton", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <SubmitButton />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have simulations and slider", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <SubmitButton />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByTestId("button")).toHaveTextContent("Run Simulation");
  });
});
