import React, { useEffect, useState } from 'react';
import '../../styles/sub-style/event.css';
import { useStateContext } from '../../context/StateContext';
import { useParams } from 'react-router-dom';
import AtiEvents from '../AtiEvents';

function AtiEvent() {
  const { event_id } = useParams();
  const { getEvent } = useStateContext();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEvent(event_id);
        setEvent(eventData);
      } catch (error) {
        console.error(error.message);
        // Handle the error as needed
      }
    };

    fetchEvent();
  }, [getEvent, event_id]);

  return (
    <div className='event-page'>
      <div className="event container">
        {event && event[0] ? (
          <>
            <h3 className='section-title'>{event[0].title} - {event[0].department}</h3>
            <p className='event-desc'>{event[0].description}</p>
            <p className='event-date'>Date : {event[0].date}</p>
            <p className='event-date'>Location : {event[0].date}</p>
          </>
        ) : (
          <p>No event data available</p>
          )}
      </div>
      <AtiEvents />
    </div>
  );
}

export default AtiEvent;
