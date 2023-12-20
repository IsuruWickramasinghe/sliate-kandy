import React from 'react'
import '../styles/announcements.css'
import { useStateContext } from '../context/StateContext'
import Timer from './Timer'
import { Link } from 'react-router-dom'

function Announcements() {

  const {announcements} = useStateContext()

  return (
    <div className='announcements container'>
      <h2 className='section-title'>Announcements</h2>
      <div className="announcements-wrapper">
        {
          announcements && announcements.map(ann => (
            <Link to={`/announcement/${ann.department}/${ann._id}`} 
              className={
                (ann.is_important)? 
                "announcements-card announcements-important" 
                : "announcements-card"} 
              key={ann._id}>
              <h4>
                {ann.title
                  ? ann.title.length > 20
                    ? `${ann.title.substring(0, 30)} - ${ann.department}`
                    : `${ann.title} - ${ann.department}`
                  : "No title available"}
              </h4>
              <p>
                {ann.description
                  ? ann.description.length > 100
                    ? `${ann.description.substring(0, 100)}...`
                    : ann.description
                  : "No description available"}
              </p>
               <Timer type={"dead-line : "} targetDate={new Date(ann.end_date)}/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Announcements