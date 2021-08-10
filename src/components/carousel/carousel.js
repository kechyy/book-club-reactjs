import React from 'react';

// Or for ES2015 module
import Flickity from 'react-flickity-component';
import { slide1, slide2, slide3, slide4, slide5 } from '../../assets';
import '../../assets/css/flickity.css';



const Carousel = () => {
 
 const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    freeScroll: true,
    percentPosition: true,
 }

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={slide1} alt="" />
      <img src={slide2} alt="" />
      <img src={slide3} alt="" />
      <img src={slide4} alt="" />
      <img src={slide5} alt="" />
    </Flickity>
    
  )
}

export default Carousel;