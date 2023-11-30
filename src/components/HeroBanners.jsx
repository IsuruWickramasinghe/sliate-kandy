import React from 'react'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../config/sanity_config';
import { Carousel } from 'react-responsive-carousel';

function HeroBanners() {

  const {heroBanners} = useStateContext(); 
  return (
    <div className='hero-banners'>
      <Carousel 
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}>
        {heroBanners[0] && heroBanners[0].banner.map((bnr, i) => (
          <div key={i}>
            <img src={urlFor(bnr)} alt="herobanner" className="hero-banner" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroBanners