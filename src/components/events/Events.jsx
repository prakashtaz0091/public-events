import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./events.css"
import { Card, Modal } from '../muiComponents/muiExports'
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import MaybeTomorrow from "../../static/images/maybe.jpg"



const Events = () => {

  const [filterBy, setFilterBy] = React.useState(null);
  const [address, setAddress] = React.useState(null);

  const baseUrl = "http://127.0.0.1:8000"

  const handleFilter = ()=>{
    const options = { method: 'GET', url: `${baseUrl}/api/events/${filterBy}/${address}` };

    axios.request(options).then(function (response) {
      setEvents(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }


  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };




  const [events, setEvents] = React.useState(null)



  React.useEffect(() => {
    const options = { method: 'GET', url: `${baseUrl}/api/events/` };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setEvents(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }, [])


  return (
    <div className='eventsSection'>
      <div className="top">

        <h1>Filter Events</h1>
        <div className="filters" >
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
            <Select
              labelId="location-filter-select-label"
              id="location-filter-select"
              value={filterBy}
              label="filter by"
              onChange={handleChange}

            >
              <MenuItem value={"district"} onClick={e => setFilterBy(e.currentTarget.value)} >District</MenuItem>
              <MenuItem value={"municipality"}>Municipality</MenuItem>
              <MenuItem value={"local-address"}>Local Address</MenuItem>
            </Select>
          </FormControl>
          <input type="text" id='address' placeholder='address ---- optional' value={address} onChange={e=>setAddress(e.currentTarget.value)} />

        </div>


        {
          <Link className='yellowBtn' onClick={handleFilter} >Filter</Link>
        }
      </div>

      <div className="events">

        {
          events!==null && events.length>0 ? events.map(event => {
            return (
              <Card key={event.id} event={event}  />

            )
          }) : <img src={MaybeTomorrow} alt="maybe tomorrow"  className='maybe' />
        }
      </div>





    </div>

  )
}

export default Events
