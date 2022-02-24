import React from 'react';
import {Carousel as BootCarousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/carousel.css'
import img1 from './images/hero-image1.jpg'
import img2 from './images/hero-image2.jpg'
import img3 from './images/hero-image3.jpg'


function Carousel() {
  return (
  <div className='main-carousel'>
      <BootCarousel interval={1000} controls={false} indicators={false} pause={false}>
        <BootCarousel.Item>
          <img src={img1} alt="carouselImg1"  className='slider-img'   interval={1000}/>
        </BootCarousel.Item>
          <BootCarousel.Item>
          <img src={img2} alt="carouselImg2"  className='slider-img'  interval={1000}/>
        </BootCarousel.Item>
          <BootCarousel.Item>
          <img src={img3} alt="carouselImg3"  className='slider-img'  interval={1000}/>
        </BootCarousel.Item>
      </BootCarousel>
  </div>);
}

export default Carousel;

