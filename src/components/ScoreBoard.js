import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useApplication } from "../services/Application";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  card: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "6rem",
  },
});

const ScoreBoard = () => {
  const classes = useStyles();
  const {
    application: { isSimulationRunning, winPercentage },
  } = useApplication();

  return (
    <Typography component="div" className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Win Percentage</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card} style={{ marginLeft: 20 }}>
        <CardContent>
          <Typography variant="h4" data-testid="percentage">
            {isSimulationRunning ? (
              <CircularProgress color="secondary" />
            ) : winPercentage ? (
              `${winPercentage}%`
            ) : (
              <HelpOutlineOutlinedIcon />
            )}
          </Typography>
        </CardContent>
      </Card>
    </Typography>
  );
};

export default ScoreBoard;
