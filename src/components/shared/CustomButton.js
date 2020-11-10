import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    width: props => props.width,
    margin: "0px auto",
    color: props => props.color,
    backgroundColor: props => props.backgroundColor
  }
}));

const CustomButton = ({ width, title, color, backgroundColor }) => {
  const classes = useStyles({
    width,
    color,
    backgroundColor
  });

  return <Button className={classes.button}>{title}</Button>;
};

CustomButton.propTypes = {};

export default CustomButton;
