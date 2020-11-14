import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import myLogo from "../../assets/logoFinal.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Lato",
    color: "#00C2CB",
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
  },
  form: {
    width: "50%",
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(130deg, #03989e 10%, #00c2cb 50%)",
    backgroundColor: "#00C2CB",
    textAlign: "center",
    borderRadius: "10px",
    margin: "2rem",
  },

  formContainer: {
    width: "80%",
    height: "90%",
    justifyContent: "center",
    backgroundColor: "white",
    textAlign: "center",
    margin: "2rem auto",
    borderRadius: "10px",
    position: "relative",
    bottom: "35px",
  },

  buttonTest: {
    fontSize: "15px",
    fontWeight: "bold",
    width: "40%",
    height: "50px",
    alignItems: "center",
    border: "1px solid #00C2CB",
    backgroundColor: "white",
    color: "#00C2CB",
    margin: "1.5rem",
    borderRadius: "20px",
    "&:hover": {
      fontSize: "15px",
      background: "linear-gradient(45deg, #03989e 10%, #00c2cb 50%)",
      color: "white",
    },
  },

  logo: {
    display: "flex",
    width: "8rem",
    position: "relative",
    bottom: "10px",
  },
}));

const home = "/home";
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <img className={classes.logo} src={myLogo} />
        <div className={classes.formContainer}>
          <p className={classes.title}>Welcome</p>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="" label="Username " variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="pa`s`sword"
            />
            <Link to={"/home"}>
              <button className={classes.buttonTest}> Login </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
