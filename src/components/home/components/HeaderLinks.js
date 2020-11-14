import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const listOfHeadings = [
  {name: 'campaigns', link: '/campaigns', legs: 4},
  {name: 'Cat', link: '/cat', legs: 4},
  {name: 'Frog', link: '/frog', legs: 4}
];

const test = props => {
  return (
    <div>
      { 
        listOfHeadings.map((titleObject) => {
          return <Fragment>
          <Link to={} className={classes.title}>{titleObject.name}</Link>
          { titleObject.link}
          </Fragment>
         })
      }
    </div>
  )
}

export default test
