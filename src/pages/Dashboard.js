import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimulationSlider from "../components/SimulationSlider";
import OpenNewDoorCheckbox from "../components/OpenNewDoorCheckbox";
import SubmitButton from "../components/SubmitButton";
import Banner from "../components/Banner";
import ScoreBoard from "../components/ScoreBoard";

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 32,
  },
  controls: {
    marginTop: 16,
    textAlign: "center",
  },
  pos: {
    marginTop: 16,
  },
  scoreBox: {
    display: "flex",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography component="div" className={classes.title}>
        Monty Hall Problem
      </Typography>

      <Typography component="div" className={classes.pos}>
        <Banner />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <SimulationSlider />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <ScoreBoard />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <OpenNewDoorCheckbox />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <SubmitButton />
      </Typography>
    </Container>
  );
};

export default Dashboard;
