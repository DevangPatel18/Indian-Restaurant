import React, { Component } from 'react';
import Contactinfo from './contactinfo.js';
import "./contact.css";
import PageHeader from './pageHeader.js'
import imgLinks from '../assets/imgLinks.js'

class Contact extends Component {
  componentDidMount() {
    document.title = "Get in touch with us!"
    document.querySelector('meta[name="Description"]')
      .setAttribute("content", "Contact us via phone, email, message from the website, or drop by if near downtown Toronto.")
  }
  
  render() {
    return (
    <div>
      <PageHeader
        sectionName="Contact"
        images={imgLinks.contact}
        height='40vh'
        credit={"Photo by rawpixel.com from Pexels"}
      />

      <section className="contact-intro">
        <h3 className="title is-3 is-size-4-mobile has-text-centered">Have a question? Feel free to ask!</h3>
        
        <p>Nisi aute eiusmod veniam laboris commodo veniam eu incididunt excepteur nisi esse tempor veniam. Pariatur exercitation nulla amet esse voluptate et anim excepteur veniam quis eiusmod.</p>

        <form action="">
        <div className="contact-form columns is-mobile">

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
            <button className="button is-primary is-medium is-outlined">Submit</button>
          </div>
        </div>
        </form>

      </section>

      <section className="has-background-light">
        <Contactinfo/>
      </section>

    </div>
  )
  }
}

export default Contact;