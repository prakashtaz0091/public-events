import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./events.css"
import { Card,Modal } from '../muiComponents/muiExports'




const Events = () => {

  const { location } = useParams()
  const [newlocation, setNewLocation] = React.useState(location)


  // modal open
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className='eventsSection'>
      <div className="top">
        <input type="text" placeholder='search location' value={location} onChange={e => setNewLocation(e.currentTarget.value)} />

        {
          location.length !== 0 && <Link to={``}>GO</Link>
        }
      </div>

      <div className="events">
        <Card handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>
      
      </div>

      <Modal modalOpen={modalOpen} handleModalClose={handleModalClose}/>
      

   

    </div>

  )
}

export default Events
