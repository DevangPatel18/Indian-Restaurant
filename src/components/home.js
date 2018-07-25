import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>

      <section className="main">
        <div className="container">
          <h1 className="title is-1">Indian Restaurant</h1>
        </div>
      </section>

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

      <section className="reservations">
        <h2 className="title is-2 white">Book a table to reserve a spot!</h2>
        <NavLink className="button is-outlined is-white is-medium is-rounded" to="/reservations">Make a Reservation</NavLink>
      </section>

      <section className="location container">
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
    </div>
  )
}

export default Home;