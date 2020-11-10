import React from 'react'



const useStyles = makeStyles((theme) => ({
 Footer:{
  width: '100%',
  backgroundColor: 'grey',
  height: '7rem',
  fontSize:'1.5rem'
 }

 }));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.Footer}>
      
    </div>
  )
}



export default Footer
