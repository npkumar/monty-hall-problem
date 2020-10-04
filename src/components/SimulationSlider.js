import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useApplication } from "../services/Application";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    margin: "0 1rem",
  },
  banner: {
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 36,
  },
  label: {
    fontSize: 32,
    display: "inline-flex",
    border: "8px solid #52af77",
    textAlign: "center",
    minHeight: "10rem",
    minWidth: "10rem",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  labelText: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "normal",
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    "&.MuiSlider-thumb": {
      marginTop: -8,
      marginLeft: -12,
      height: 24,
      width: 24,
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function SimulationSlider() {
  const classes = useStyles();
  const {
    application: { isSimulationRunning, simulations },
    setSimulations,
  } = useApplication();

  const handleSliderChange = (event, newValue) => {
    setSimulations(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography component="div" className={classes.banner}>
        <div className={classes.label}>
          <div className={classes.labelText} data-testid="simulations">
            {simulations}
          </div>
          <div className={classes.subtitle}>#simulations</div>
        </div>
      </Typography>
      <PrettoSlider
        data-testid="slider"
        valueLabelDisplay="off"
        aria-label="pretto slider"
        value={simulations}
        onChange={handleSliderChange}
        min={1}
        max={10000000}
        disabled={isSimulationRunning}
      />
    </div>
  );
}
