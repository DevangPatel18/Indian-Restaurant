import React from 'react';
import { NavLink } from 'react-router-dom';
// import Map from './map.js';
import './home.css';

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
    <div key={i} style={{margin:"1rem"}}>
      <i className={service.class + ' is-size-1'}></i>
      <p style={{width: "8rem", paddingTop: "1rem"}}>{service.text}</p>
    </div>
  );

  return (
    <div>

      <header className="main centercontent">
          <h1 className="has-text-light">Indian Restaurant</h1>
      </header>

      <section className="food-intro container">
        <div className="columns" style={{height:'600px'}}>

          <div className="food-intro-text column is-4">
            <h2 className="title is-2">Experience Indian cuisine!</h2>
            <p>Adipisicing elit et ea excepteur exercitation sunt culpa officia deserunt dolore cillum anim. Ad culpa aliqua aute magna proident culpa esse dolor ut irure cupidatat culpa. Lorem ipsum et aute ea dolor aliquip magna non aliquip sint sit ut occaecat.</p>
          </div>

          <div className="column">
            <div className="grid-container">
              <div className="a">
              </div>
              <div className="b">
              </div>
              <div className="c">
              </div>
              <div className="e">
              </div>
              <div className="d">
              </div>
            </div>           
          </div>

        </div>
      </section>

      <section className="reservations has-text-centered">
        <h2 className="title is-2 has-text-centered has-text-light">Book a table to reserve a spot!</h2>
        <NavLink className="button is-outlined is-white is-medium is-rounded" to="/reservations">Make a Reservation</NavLink>
      </section>

      <section className="location centercontent container">
        <div className="location-intro">
          <div className="location-intro-left">
          </div>
          <div className="location-intro-right">
            <div>
              <h2 className="title is-2">Located in downtown Toronto</h2>
              <p>Dolor duis commodo cupidatat cillum voluptate ex dolor nulla id in aute laboris magna sint do occaecat non. Reprehenderit pariatur do esse dolore duis est eu esse voluptate aliquip proident ea esse.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services has-text-centered">
        <div className="container">
          <h2 className="title is-2 has-text-centered has-text-light">Our full services</h2>
          <div className="services-tiles has-text-light">
            {service_html}
          </div>
        </div>
      </section>

      {/*<Map></Map>*/}
      <section className="contact">

        <div className="container">
          <h2 className="title is-2 has-text-centered">We hope to see you soon!</h2>
            <div className="contact-container centercontent">
              <table className="table contact-schedule">
                <thead><tr><th colSpan="2">Hours</th></tr></thead>
                <tbody>
                  <tr>
                    <td>Monday - Friday</td>
                    <td>10am-11pm</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>11am-9pm</td>
                  </tr>
                  <tr>
                    <td>Sunday & Holidays</td>
                    <td>12pm-8pm</td>
                  </tr>
                </tbody>
              </table>

              <table className="table contact-info">
                <thead><tr><th colSpan="2">Contact info</th></tr></thead>
                <tbody>
                  <tr>
                    <td><i className="fas fa-map-marked-alt"></i></td>
                    <td>542 Nowaresville, Toronto, ON</td>
                  </tr>

                  <tr>
                    <td><i className="fas fa-phone"></i></td>
                    <td>999-999-999</td>
                  </tr>

                  <tr>
                    <td><i className="far fa-envelope"></i></td>
                    <td>support@indianrest.com</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>

              </table>
            </div>
            {/*<Map></Map>*/}

        </div>
      </section>


    </div>
  )
}

export default Home;