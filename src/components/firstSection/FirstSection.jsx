import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import './firstSection.css'

const FirstSection = () => {

  const [location, setLocation] = React.useState("")



  return (
    <div className="firstSection">
      <div className="heading">
        Public <br /> Gatherings
      </div>
      <p>
        Your gateway to well planned public events !!!
      </p>

        <input type="text" placeholder='search location' value={location} onChange={e => setLocation(e.currentTarget.value)} />

        {
          location.length !== 0 && <Link to={`/events/${location}`}>GO</Link>
        }

    </div>
  )
}

export default FirstSection