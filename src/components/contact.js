import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <header className="contact centercontent">
        <h1 className="has-text-light">Contact</h1>
      </header>

      <section className="contact-intro">
        <h3 className="title is-3 has-text-centered">Have a question? Feel free to ask!</h3>
        
        <p>Nisi aute eiusmod veniam laboris commodo veniam eu incididunt excepteur nisi esse tempor veniam. Pariatur exercitation nulla amet esse voluptate et anim excepteur veniam quis eiusmod.</p>

        <form action="">
        <div className="contact-form columns">

          <div className="column">
            <label className="label" htmlFor="name">
              Name
              <input className="input" type="text" id="name" required/>
            </label>

            <label className="label" htmlFor="email">
              Email
              <input className="input" type="email" id="email" required/>
            </label>

            <label className="label" htmlFor="phone">
              Phone
              <input className="input" type="text" id="phone" required/>
            </label>
          </div>

          <div className="column">
            <label className="label" htmlFor="subject">
              Subject
              <input className="input" type="text" id="subject" required/>
            </label>

            <label className="label" htmlFor="message">
              Message
              <textarea className="textarea" id="message"></textarea>
            </label>
          </div>

        </div>

        <div className="contact-form columns">
          <div className="column">
            <button className="button is-primary is-outlined">Submit</button>
          </div>
        </div>
        </form>

      </section>

      <section className="has-background-light">
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

      </section>

    </div>
  )
}

export default Contact;