import React from "react";
import ReactPlayer from "react-player";
import heroVideo from "../assets/heroVideo.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Jumbotron, Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: "4.5em",
    color: "white",
    textShadow: "0px 0px 4px",
  },
  jumbotron: {
    color: "white",
    backgroundColor: "transparent",
    maxWidth: "100%",
    textAlign: "center",
    textShadow: "0px 0px 4px",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Jumbotron className={classes.jumbotron}>
            <h1 className={classes.title}>Fit-Forward</h1>
            <hr className="my-2" />
            <p className="lead">
              The best inventment you can ever make is your own health.
            </p>
            <p classname="lead"> Your Fitness Journey Begins Here.</p>
            <Button className="button" color="primary">
              Register
            </Button>
          </Jumbotron>
        </Box>
      </div>
    </section>
  );
};

export default Hero;
