import React from 'react'
import { makeStyles } from '@material-ui/core';

 const useStyles = makeStyles((theme) => ({
   BlogContainer: {
    width: '17rem',
    height: '15rem',
    backgroundColor: 'grey',
    marginLeft: '5rem',
    padding: '2rem',
    color: 'white'
    

   }

}));

const BlogPost = props => {
  const classes = useStyles();
  return (
    <div className={classes.BlogContainer}>
      Hey, this is a blog post test
    
    </div>
  )
}


export default BlogPost
