import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scoreboard from "./Scoreboard";
import { ApplicationContext } from "../services/Application/ApplicationProvider";

const value = {
  application: { isSimulationRunning: false, winPercentage: 10 },
};

describe("Scoreboard", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <Scoreboard />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should a scoreboard percentage", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <Scoreboard />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("percentage")).toBeInTheDocument();
    expect(getByTestId("percentage")).toHaveTextContent("10%");
  });
});
