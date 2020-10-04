import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimulationSlider from "./SimulationSlider";
import { ApplicationContext } from "../services/Application/ApplicationProvider";

const value = {
  application: { isSimulationRunning: false, simulations: 4000 },
};

describe("SimulationSlider", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <SimulationSlider />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have simulations and slider", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <SimulationSlider />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("simulations")).toBeInTheDocument();
    expect(getByTestId("slider")).toBeInTheDocument();
    expect(getByTestId("simulations")).toHaveTextContent(4000);
  });
});
