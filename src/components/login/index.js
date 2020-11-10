import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CustomButton from "../shared/CustomButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "50px",
    fontWeight: "bold"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  form: {
    width: "50%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#66cdaa",
    textAlign: "center"
  },
  button: {
    width: "300px",
    margin: "2rem auto"
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <p className={classes.title}>Login Page</p>
        <Link to="/">
          <CustomButton
            color="dark"
            title="Login"
            width="40%"
            backgroundColor="white"
          ></CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Login;
