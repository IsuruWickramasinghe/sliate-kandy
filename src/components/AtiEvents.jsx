import React from 'react'
import '../styles/events.css'
import { useStateContext } from '../context/StateContext'
import { Link } from 'react-router-dom'


function AtiEvents() {

  const {events} = useStateContext()

  return (
    <div className='events container'>
      <h2 className='section-title'>Events</h2>
      <div className="events-wrapper">
        {
          events && events.map(evn => (
            <Link to={`/event/${evn.department}/${evn._id}`} className="event-card" key={evn._id}>
              <h4 className="event-title">{evn.title}</h4>
              <span className="dep-date">{evn.department} : {evn.date} </span>
              <p className="evn-desc">
                {evn.description
                  ? evn.description.length > 100
                    ? `${evn.description.substring(0, 150)}...`
                    : evn.description
                  : "No description available"}
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default AtiEvents