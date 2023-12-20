import React, { useEffect, useState } from 'react';
import '../../styles/sub-style/announcement.css'
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import Timer from '../Timer';
import Announcements from '../Announcements';

function Announcement() {
  const { announcements_id } = useParams();
  const { getAnn } = useStateContext();
  const [ann, setAnn] = useState([]);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const announcementData = await getAnn(announcements_id);
      setAnn(announcementData);
    };

    fetchAnnouncement();
  }, [getAnn, announcements_id]); 

  return (
    <div className='ann-page'>
      <Announcements />
      <div className="ann container">
        {ann && ann[0] && (
          <>
            <h3 className='section-title'>{ann[0].title} - {ann[0].department}</h3>
            <p className='ann-desc'>{ann[0].description}</p>
            <p className='ann-dead'><Timer type={"Dead Line: "} targetDate={new Date(ann[0].end_date)} /></p>
          </>
        )}
      </div>
    </div>
  );
}

export default Announcement;
