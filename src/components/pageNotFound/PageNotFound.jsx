import React from 'react'
import { Link } from 'react-router-dom'
import "./pageNotFound.css"
const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      Page Not Found <br />(404 error)


      <br />
      The page you are searching for doesnot exist in our website
      <br />
      You may try: <br />
      <br />
      <Link to={"/"}>Home page</Link>
    </div>
  )
}

export default PageNotFound