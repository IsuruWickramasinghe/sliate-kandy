import React, { useEffect, useState } from 'react';
import '../../styles/sub-style/gal.css';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../config/sanity_config';

function Gal() {
  const { gal_id } = useParams();
  const { getGal } = useStateContext();
  const [gal, setGal] = useState([]);

  useEffect(() => {
    const fetchGal = async () => {
      try {
        const galData = await getGal(gal_id);
        setGal(galData);
      } catch (error) {
        console.error(error.message);
        // Handle the error as needed
      }
    };

    fetchGal();
  }, [getGal, gal_id]);

  return (
    <div className='gal-page'>
      <div className="gal container">
        {gal && gal[0] ? (
          <>
            <h3 className='section-title'>{gal[0].title} - {gal[0].department}</h3>
            <p className='gal-desc'>{gal[0].short_desc}</p>
            <p className='gal-date'>Date: {gal[0].date}</p>
            <div className="gal-imgs">
              {gal[0].images.map(img => (
                <img className='gal-img' key={img._key} src={urlFor(img).url()} alt={img._key} />
              ))}
            </div>
          </>
        ) : (
          <p>No event data available</p>
        )}
      </div>
    </div>
  );
}

export default Gal;
