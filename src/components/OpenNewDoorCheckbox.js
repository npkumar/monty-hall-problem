import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useApplication } from "../services/Application";

const GreenCheckbox = withStyles({
  root: {
    color: "#52af77",
    "&$checked": {
      color: green[600],
    },
  },
})((props) => <Checkbox color="default" {...props} />);

export default function OpenNewDoorCheckbox() {
  const {
    application: { isSimulationRunning, isChangeDoor },
    setIsChangeDoor,
  } = useApplication();

  const handleChange = (event) => {
    setIsChangeDoor(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        data-testid="formControlLabel"
        control={
          <GreenCheckbox
            checked={isChangeDoor}
            onChange={handleChange}
            name="openagain"
            disabled={isSimulationRunning}
          />
        }
        label="Player chooses to change door"
      />
    </FormGroup>
  );
}
