import React from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
 Footer:{
  width: '100vw',
  background: "linear-gradient(45deg, #03989e 10%, #00c2cb 50%)",
  backgroundColor: '#00C2CB',
  height: '3rem',
  fontSize:'0.8rem',
  bottom: '0',
  fontFamily: 'Lato',
  position: 'absolute',
  display: 'flex',
  color: 'white',
  alignItems: 'flex-end',
  justifyContent: 'center',
 
 },
 

 }));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.Footer}>
      @Social Awareness Developed by project Team 2
    </div>
  )
}



export default Footer
