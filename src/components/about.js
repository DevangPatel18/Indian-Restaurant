import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="about-head">
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-light">Our Story</h1>
        </div>        
      </section>

      <section className="about-story">
        <div className="container">
          <div className="columns is-6">

            <div className="column is-three-fifths">
              <h3 className="title is-3">
                Humble beginnings
              </h3>
              <p>Consectetur sint ut ex nostrud nisi et minim irure. Sed mollit commodo amet ullamco dolor exercitation id aliquip officia irure in excepteur ea. Consequat non do exercitation dolore excepteur amet in adipisicing nulla.</p>
              <div style={{background: 'lavender', height:'400px'}}></div>
            </div>

            <div className="column is-two-fifths">
              <div style={{background: 'thistle', height:'400px'}}></div>
              <p>Est laboris incididunt sit amet exercitation sed consequat reprehenderit dolor dolore anim elit cupidatat sit ea. Dolor tempor nulla velit veniam velit nulla elit exercitation amet quis dolore velit. </p>

            </div>

          </div>

        </div>
      </section>

      <section className="about-specialty" style={{background: 'maroon'}}>
        <div className="container">
          <h3 className="title is-3 has-text-centered has-text-light">Our specialty</h3>
          <p className="has-text-centered has-text-light" style={{maxWidth: '40em', margin: '0 auto'}}>Ex laborum aute velit elit consequat tempor duis occaecat quis ad adipisicing quis irure in ullamco non in. Ut id dolor eiusmod proident labore consectetur aliqua velit dolor labore elit ex reprehenderit nulla anim. Aute excepteur aliqua laboris sit id nisi dolore exercitation eu est proident excepteur.</p>
        </div>
      </section>

      <section className="about-testimonials">
        <div className="container">
          <h3 className="title is-3 has-text-centered">What our customers say</h3>

<div className='carousel carousel-animated carousel-animate-slide'>
  <div className='carousel-container'>

    <div className='carousel-item content is-active'>
      <p className="has-text-centered is-italic about-quote">Commodo aliqua cillum excepteur in do et veniam pariatur proident in laborum excepteur dolore nostrud sit qui.</p>

      <p className="has-text-centered has-text-weight-bold">Customer 90</p>
    </div>

    <div className='carousel-item content'>
      <p className='has-text-centered about-quote'>In ut tempor sit in in esse ea minim minim sunt consequat aliquip enim in voluptate nisi anim. Pariatur in voluptate fugiat duis amet aute et labore incididunt in aute est consectetur occaecat do.</p>
      
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

export default About;