import React from 'react';
import { NavLink } from 'react-router-dom';
// import Map from './map.js';
import './home.css';
import downtown_to from '../assets/mark-jefferson-paraan-252931-unsplash.jpg';
import Contactinfo from './contactinfo.js';
import SectionHeader from './sectionHeader.js'
import homeimage from '../assets/home-background.jpg'

const Home = () => {
  const serviceslist = [
    {
      type:"wifi",
      class:"fas fa-wifi",
      text:"Free wifi"
    },
    {
      type:"cash",
      class:"fas fa-money-bill",
      text:"Accept cash and debit"
    },
    {
      type:"credit",
      class:"far fa-credit-card",
      text:"Accept most credit cards (Visa/Mastercard)"
    },
    {
      type:"parking",
      class:"fas fa-parking",
      text:"Nearby parking available"
    },
    {
      type:"subway",
      class:"fas fa-subway",
      text:"Close to the subway"
    }
  ]

  let service_html = serviceslist.map((service, i) =>
    <div key={i} className="service-div">
      <i className={service.class + ' is-size-1 is-size-3-mobile service-icon'}></i>
      <p className="service-text" style={{width: "8rem", paddingTop: "1rem"}}>{service.text}</p>
    </div>
  );

  return (
    <div>

      <SectionHeader
        sectionName="Indian Restaurant"
        url={homeimage}
        height='70vh'
        credit={<div>By Mohans1995 [<a href='https://creativecommons.org/licenses/by-sa/4.0'>CC BY-SA 4.0 </a>] <a href='https://commons.wikimedia.org/wiki/File:Indian-Food-wikicont.jpg'>from Wikimedia Commons</a></div>}
      />

      <section className="food-intro container">
        <div className="columns" style={{height:'auto'}}>

          <div className="food-intro-text column is-4">
            <h2 className="title is-2 is-size-4-mobile">A Taste of Indian cuisine!</h2>
            <p>Adipisicing elit et ea excepteur exercitation sunt culpa officia deserunt dolore cillum anim. Ad culpa aliqua aute magna proident culpa esse dolor ut irure cupidatat culpa.</p>
            <p>Lorem ipsum et aute ea dolor aliquip magna non aliquip sint sit ut occaecat. Consectetur mollit duis magna eiusmod deserunt et proident commodo dolore ut et minim non consequat in.</p>
          </div>

          <div className="column">
            <div className="grid-container">
              <div className="a">
              <p className="image-credit">By Sriyarao22 [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:Chicken_Tikka_Masala_Curry.png">from Wikimedia Commons</a></p>
              </div>
              <div className="b">
              <p className="image-credit">By Monali.mishra [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:Chanamasala.jpg">from Wikimedia Commons</a></p>
              </div>
              <div className="c">
              </div>
              <div className="d">
              <p className="image-credit">By Rupamdas75 [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:Chicken_Biryani_in_Chennai.jpg">from Wikimedia Commons</a></p>
              </div>
              <div className="e">
              <p className="image-credit">By Dhananjai11 [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0 </a>], <a href="https://commons.wikimedia.org/wiki/File:Marro_Dhokla.jpg">from Wikimedia Commons</a></p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="home-reservations has-text-centered">
        <div className="home-reservations-text">
          
        <h2 className="title is-2 is-size-4-mobile has-text-centered has-text-light">Book a table to reserve a spot!</h2>
        <NavLink className="button is-outlined is-white is-medium is-rounded is-size-6-mobile" to="/reservations">Make a Reservation</NavLink>
        </div>
      </section>

      <section className="location container">
        <div className="location-intro">
          <div className="location-intro-left"
            data-aos="slide-right"
            data-aos-duration="700"
            data-aos-once="true"
          >
              <img src={downtown_to} className="location-intro-left-image" alt="Downtown Toronto"/>
              <figcaption className="image-credit">Photo by Mark Jefferson Paraan on Unsplash</figcaption>
          </div>
          <div className="location-intro-right"
            data-aos="slide-up"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div>
              <h2 className="title is-2 is-size-4-mobile">Located in downtown Toronto</h2>
              <p>Dolor duis commodo cupidatat cillum voluptate ex dolor nulla id in aute laboris magna sint do occaecat non. Reprehenderit pariatur do esse dolore duis est eu esse voluptate aliquip proident ea esse.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services has-text-centered">
        <div className="container">
          <h2 className="title is-2 is-size-4-mobile has-text-centered has-text-light">Our full services</h2>
          <div className="services-tiles has-text-light">
            {service_html}
          </div>
        </div>
      </section>

      {/*<Map></Map>*/}
      <section className="home-contact">

        <div className="container">
          <h2 className="title is-2 is-size-4-mobile has-text-centered">We hope to see you soon!</h2>
            <Contactinfo/>

            {/*<Map></Map>*/}

        </div>
      </section>


    </div>
  )
}

export default Home;