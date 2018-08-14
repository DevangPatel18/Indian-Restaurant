import React from 'react';
import './contactinfo.css';

const Contactinfo = () => {
  return (
    <div className="home-contact-container centercontent">
      <table className="table home-contact-schedule">
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

      <table className="table home-contact-info">
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
  )
}

export default Contactinfo;