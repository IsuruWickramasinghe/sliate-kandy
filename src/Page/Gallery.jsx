import React from 'react'
import '../styles/gallery.css'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../config/sanity_config'
import { Link } from 'react-router-dom'



function Gallery() {

  const {gallery} = useStateContext()

  return (
    <div className='gallery-page container'>
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-wrapper">
        {
          gallery && gallery.map(gal => (
            <Link to={`/gallery/${gal.department}/${gal._id}`} className="gal-card" key={gal._id}>
              <div className="img-wrapper">
                <img src={urlFor(gal.title_image)} alt={gal._id} />
              </div>
              <div className="gal-desc">
                <h4>{gal.title} / {gal.date}</h4>
                <p>
                {gal.short_desc
                  ? gal.short_desc.length > 100
                    ? `${gal.short_desc.substring(0, 45)}...`
                    : gal.short_desc
                  : "No description available"}
                </p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery