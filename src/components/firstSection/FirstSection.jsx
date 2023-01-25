import React from 'react'
import { Link } from 'react-router-dom'
import './firstSection.css'

const FirstSection = () => {




  return (
    <div className="firstSection">
      <div className="heading">
        Public <br /> Gatherings
      </div>
      <p>
        Your gateway to well planned public events !!!
      </p>

        

       <Link className='yellowBtn' style={{marginTop:"30px"}} to={`/events`}>Events</Link>
       

    </div>
  )
}

export default FirstSection