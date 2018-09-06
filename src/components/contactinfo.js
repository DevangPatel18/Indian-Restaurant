import React from 'react';
import './contactinfo.css';

const Contactinfo = () => {

  return (
    <div className="contactinfo">
        
      <div className="contactinfo-hours">
        <div className="columns is-multiline is-mobile">
          <div className="column is-full contactinfo-hours-header has-text-centered has-text-weight-bold is-size-5">Hours</div>
          <div className="column is-half has-text-right"><p>Monday - Friday</p></div>
          <div className="column is-half has-text-left"><p>10am-11pm</p></div>
          <div className="column is-half has-text-right"><p>Saturday</p></div>
          <div className="column is-half has-text-left"><p>11am-9pm</p></div>
          <div className="column is-half has-text-right"><p>Sunday & Holidays</p></div>
          <div className="column is-half has-text-left"><p>12pm-8pm</p></div>
        </div>
      </div>

      <div className="contactinfo-contact">
        <div className="columns is-multiline is-mobile">
          <div className="column is-full has-text-centered has-text-weight-bold is-size-5">Contact info</div>
            <div className="column is-full"><p><i className="is-size-3 fas fa-map-marked-alt"></i> 542 street, Toronto, ON</p></div>
            <div className="column is-full"><p><i className="is-size-3 fas fa-phone"></i> 999-999-999</p></div>
            <div className="column is-full"><p><i className="is-size-3 far fa-envelope"></i> support@indianrest.com</p></div>
        </div>
      </div>
    </div>
  )
}

export default Contactinfo;