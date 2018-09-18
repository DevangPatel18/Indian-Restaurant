import React, { Component } from 'react';
import "./about.css";
import SectionHeader from './sectionHeader.js'
import imgLinks from '../assets/imgLinks.js'
const indianBuffet = 'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1536889150/Indian%20Restaurant/buffet-315691.jpg';
const indianPlace = 'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1536889150/Indian%20Restaurant/delhi-1845004_640.jpg';

class About extends Component {
  componentDidMount() {
    // carousels now contains an array of all Carousel instances
    var bulmaCarousel = require('bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js');
    bulmaCarousel.attach();

    document.title = "Story from Delhi to TO, and our customers"
    document.querySelector('meta[name="Description"]')
      .setAttribute("content", "A brief passage on how we started, where we are today, and what our customers think about us.");
  }

  render() {
    return (
    <div>
      <SectionHeader
        sectionName="About"
        images={imgLinks.about}
        height='40vh'
        credit={"Photo by Marta Branco from Pexels"}
      />
      <section className="about-story" style={{overflowX: "hidden"}}>
        <div className="container">
          <div className="columns is-6">

            <div className="column is-three-fifths">
              <h3 className="title is-3 is-size-4-mobile">
                Journey from India
              </h3>
              <p>Consectetur sint ut ex nostrud nisi et minim irure. Sed mollit commodo amet ullamco dolor exercitation id aliquip officia irure in excepteur ea. Consequat non do exercitation dolore excepteur amet in adipisicing nulla.</p>
              <img src={indianPlace} className="about-location-intro-left-image" alt="India location" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"/>
            </div>

            <div className="column is-two-fifths">
              <img src={indianBuffet} className="about-location-intro-left-image" alt="Indian buffet" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"/>
              <p>Est laboris incididunt sit amet exercitation sed consequat reprehenderit dolor dolore anim elit cupidatat sit ea. Dolor tempor nulla velit veniam velit nulla elit exercitation amet quis dolore velit. </p>
            </div>

          </div>

        </div>
      </section>

      <section className="about-specialty">
        <div className="container">
          <h3 className="title is-3 is-size-4-mobile has-text-centered has-text-light">Our specialty</h3>
          <p className="has-text-centered has-text-light" style={{maxWidth: '40em', margin: '0 auto'}}>Ex laborum aute velit elit consequat tempor duis occaecat quis ad adipisicing quis irure in ullamco non in. Ut id dolor eiusmod proident labore consectetur aliqua velit dolor labore elit ex reprehenderit nulla anim. Aute excepteur aliqua laboris sit id nisi dolore exercitation eu est proident excepteur.</p>
        </div>
      </section>

      <section className="about-testimonials">
        <div className="container">
          <h3 className="title is-3 is-size-4-mobile has-text-centered">What our customers say</h3>

          <div className='carousel carousel-animated carousel-animate-slide about-carousel'>
            <div className='carousel-container'>

              <div className='carousel-item content is-active'>
                <p className="has-text-centered is-italic about-quote">Commodo aliqua cillum excepteur in do et veniam pariatur proident in laborum excepteur dolore nostrud sit qui.</p>

                <p className="has-text-centered has-text-weight-bold">Customer 90</p>
              </div>

              <div className='carousel-item content'>
                <p className="has-text-centered is-italic about-quote">In ut tempor sit in in esse ea minim minim sunt consequat aliquip enim in voluptate nisi anim. Pariatur in voluptate fugiat duis amet aute et labore incididunt in aute est consectetur occaecat do.</p>
                
                <p className="has-text-centered has-text-weight-bold">Customer 52</p>
              </div>

              <div className='carousel-item content'>
                <p className="has-text-centered is-italic about-quote">Ad ut commodo consectetur nisi ut minim sint adipisicing minim laborum do. Deserunt aliquip amet amet dolore velit non ex tempor dolore qui esse ullamco reprehenderit consectetur duis occaecat cupidatat excepteur.</p>

                <p className="has-text-centered has-text-weight-bold">Customer 17</p>      
              </div>

              <div className='carousel-item content'>
                <p className="has-text-centered is-italic about-quote">Reprehenderit nisi sint velit excepteur eiusmod do occaecat in nostrud nulla amet deserunt ut fugiat occaecat.</p>
                
                <p className="has-text-centered has-text-weight-bold">Customer 4</p>
              </div>

            </div>

            <div className="carousel-navigation is-overlay">
              <div className="carousel-nav-left">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className="carousel-nav-right">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
}

export default About;