import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./events.css"
import { Card,Modal } from '../muiComponents/muiExports'
import axios from "axios";





const Events = () => {

  const { location } = useParams()
  const [newlocation, setNewLocation] = React.useState(location)


  // modal open
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);


  const [events, setEvents] = React.useState(null)
  


  React.useEffect(()=>{
    const options = {method: 'GET', url: 'http://127.0.0.1:8000/api/events/'};
  
    axios.request(options).then(function (response) {
      console.log(response.data);
      setEvents(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  },[])


  return (
    <div className='eventsSection'>
      <div className="top">
        <input type="text" placeholder='search location' value={newlocation} onChange={e => setNewLocation(e.currentTarget.value)} />

        {
          location.length !== 0 && <Link className='yellowBtn' to={`/events/${newlocation}`}>GO</Link>
        }
      </div>

      <div className="events">

        {
          events && events.map(event =>{
            return(
              <Card key={event.id} event = {event} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>
              
            )
          })
        }
      </div>

      

   

    </div>

  )
}

export default Events
