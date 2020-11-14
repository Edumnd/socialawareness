// fragment is used to handle more than one elements
// as each component can return only 1 element 
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';


 const useStyles = makeStyles((theme) => ({
    BlogSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '2rem',
    },
   
    BlogContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40rem',
    height: '15rem',
    backgroundColor: 'grey',
    fontSize: '18px',
    color: 'white',
 },

   ImgContainer: {
    display: 'flex',
    width: '20rem',
    height: '15rem',
    backgroundColor: 'grey',
    color: 'white',
   },

   CampaingHeader: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '18px',
    marginLeft: '6rem',
    marginTop: '2rem',
    marginBottom: '0rem',
    color: '#00C2CB',
    fontFamily: 'Lato',
    fontStyle: 'bold',
    
   }

}));

const BlogPost = props => {
  const classes = useStyles();
  return (
<Fragment>
  <h2 className={classes.CampaingHeader}> Campaigns</h2>
  <div className={classes.BlogSection}>
      <div className={classes.BlogContainer}>
        Hey, this is a blog post test

      </div>
        <div className={classes.ImgContainer}>
        image
        </div>
   </div>
</Fragment>
  )
}


export default BlogPost
