import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { useApplication } from "../services/Application";
import api from "../utils/api";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: "#52af77",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const SubmitButton = () => {
  const {
    application: { isSimulationRunning, simulations, isChangeDoor },
    setWinPercentage,
    setIsSimulationRunning,
  } = useApplication();

  const handleSubmit = async () => {
    try {
      setIsSimulationRunning(true);
      const { data } = await api.post(
        "https://mhpnpk-server.herokuapp.com/simulate",
        {
          simulations,
        }
      );
      const { winPercentageWithoutSwitch, winPercentageAfterSwitch } = data;
      setWinPercentage(
        isChangeDoor ? winPercentageAfterSwitch : winPercentageWithoutSwitch
      );
      setIsSimulationRunning(false);
    } catch (err) {
      setIsSimulationRunning(false);
      setWinPercentage(null);
      console.log(err);
    }
  };

  return (
    <ColorButton
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      disabled={isSimulationRunning}
      data-testid="button"
    >
      Run Simulation
    </ColorButton>
  );
};

export default SubmitButton;
