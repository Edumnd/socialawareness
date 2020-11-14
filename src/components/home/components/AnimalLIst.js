// import { makeStyles } from '@material-ui/core';
// import React, { Fragment } from 'react'

// const listOfHeadings = [
//   {name: 'Dog', link: '/campaigns', legs: 4},
//   {name: 'Cat', link: '/cat', legs: 4},
//   {name: 'Frog', link: '/frog', legs: 4}
// ];

// const useStyles = makeStyles((themes) => ({
//  animalListContainer: {
//    display: 'flex',
//  },
//  title:{
//    margin: '1rem'
//  }
// }));

// const AnimalList = props => {
//   const classes = useStyles();
//   return (
//     <div className={classes.animalListContainer}>
//       {/* <h2 className={classes.title}>{listOfHeadings[0].name}</h2>
//       <h2 className={classes.title}>{listOfHeadings[1].name}</h2>
//       <h2 className={classes.title}>{listOfHeadings[2].name}</h2> */}
//       { 
//         listOfHeadings.map((titleObject) => {
//           return <h2 className={classes.title}>{titleObject.name}</h2>
//         })
//       }
//     </div>
//   )
// }


// export default AnimalList;
