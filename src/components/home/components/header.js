import { makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
header:{
    width: '100%',
    backgroundColor: 'grey',
    height: '7rem',
    fontSize:'1.5rem'
}
}));

const Header = props => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      Header
    </div>
  )
}


export default Header



// use this to set up for every file to use CSS
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({

// }));
