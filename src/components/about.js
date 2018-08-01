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
          <h3 className="title is-3 has-text-centered">Testimonials</h3>


        </div>
      </section>
    </div>
  )
}

export default About;