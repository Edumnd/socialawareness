import { makeStyles } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import React from "react";

import myLogo from "../../../assets/logoFinal.png";
// import AnimalList from './AnimalLIst';
import MenuLink from "./MenuLink";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    background: "linear-gradient(45deg, #03989e 10%, #00c2cb 50%)",
    backgroundColor: "#00C2CB",
    height: "8rem",
    fontSize: "1.5rem",
    fontFamily: "Lato",
    color: "white",
  },

  logo: {
    margin: "5rem",
    width: "8rem",
    display: "block",
  },

  links: {
    margin: "8rem",
  },
}));

// TODO: Make own list component which returns links!
const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={myLogo} />
      {/* <div className={classes.links}>
       Campaigns, Sign up, Login
      </div> */}
      <MenuLink />
    </div>
  );
};

export default Header;

// use this to set up for every file to use CSS
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({

// }));
