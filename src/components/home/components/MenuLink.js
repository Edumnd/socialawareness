import { makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Login from '../../login';

const listOfHeadings = [
  {name: 'Campaigns', link: '/campaigns', legs: 4},
  {name: 'SignUp', link: '/cat', legs: 4},
  {name: 'Login', link: '../../login', legs: 4}
];

const useStyles = makeStyles((themes) => ({
 menuListContainer: {
   display: 'flex',
   alignContent: 'space-between',
   fontSize: '11px',
   height: '8rem',
   
 },
 title:{
   margin: '4rem',
   fontSize: '16px',
   height: '2rem',
   textDecoration: 'none',
   fontWeight: 'bold',
   fontFamily: 'Lato',
   background: 'lineargradient(to right, midnightblue, midnightblue 50%, royalblue 50%)',
   color: 'white',
   '&:hover':{
  textDecoration: 'underline',
 
  }    
 }
}));

const MenuList = props => {
  const classes = useStyles();
  return (
    <div className={classes.menuListContainer}>
      {/* <h2 className={classes.title}>{listOfHeadings[0].name}</h2>
      <h2 className={classes.title}>{listOfHeadings[1].name}</h2>
      <h2 className={classes.title}>{listOfHeadings[2].name}</h2> */}
      { 
        listOfHeadings.map((titleObject) => {
          return  <Fragment>
          <Link to={titleObject.link} className={classes.title}>{titleObject.name}</Link>
          {/* { titleObject.link} */}
          </Fragment>
        })
      }
    </div>
  )
}


export default MenuList;
