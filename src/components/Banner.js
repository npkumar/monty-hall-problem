import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#52af77",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.root}>
      <NoMeetingRoomIcon fontSize="large" color="secondary" />
      <MeetingRoomIcon fontSize="large" />
      <NoMeetingRoomIcon fontSize="large" color="secondary" />
    </Typography>
  );
};

export default Banner;
