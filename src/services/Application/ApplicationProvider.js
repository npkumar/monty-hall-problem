import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Actions
const SET_SIMULATIONS = "SET_SIMULATIONS";
const SET_IS_CHANGE_DOOR = "SET_IS_CHANGE_DOOR";
const SET_WIN_PERCENTAGE = "SET_WIN_PERCENTAGE";
const SET_IS_SIMULATION_RUNNING = "SET_IS_SIMULATION_RUNNING";

export const ApplicationContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case SET_SIMULATIONS: {
      return { ...state, simulations: action.payload, winPercentage: null };
    }
    case SET_IS_CHANGE_DOOR: {
      return { ...state, isChangeDoor: action.payload, winPercentage: null };
    }
    case SET_WIN_PERCENTAGE: {
      return { ...state, winPercentage: action.payload };
    }
    case SET_IS_SIMULATION_RUNNING: {
      return { ...state, isSimulationRunning: action.payload };
    }
    default:
      throw new Error();
  }
}
const ApplicationProvider = ({ children }) => {
  const initialState = {
    simulations: 4000,
    isChangeDoor: true,
    winPercentage: null,
    isSimulationRunning: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    application: state,
    setSimulations: (simulations) =>
      dispatch({ type: SET_SIMULATIONS, payload: simulations }),
    setIsChangeDoor: (isChangeDoor) =>
      dispatch({ type: SET_IS_CHANGE_DOOR, payload: isChangeDoor }),
    setWinPercentage: (winPercentage) =>
      dispatch({ type: SET_WIN_PERCENTAGE, payload: winPercentage }),
    setIsSimulationRunning: (isSimulationRunning) =>
      dispatch({
        type: SET_IS_SIMULATION_RUNNING,
        payload: isSimulationRunning,
      }),
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
