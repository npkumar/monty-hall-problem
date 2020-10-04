import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApplicationContext } from "../services/Application/ApplicationProvider";
import OpenNewDoorCheckbox from "./OpenNewDoorCheckbox";

const value = {
  application: {
    application: { isSimulationRunning: false, isChangeDoor: true },
  },
};

describe("OpenNewDoorCheckbox", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <OpenNewDoorCheckbox />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have checkbox button", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <OpenNewDoorCheckbox />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("formControlLabel")).toBeInTheDocument();
    expect(getByTestId("formControlLabel")).toHaveTextContent(
      "Player chooses to change door"
    );
  });
});
