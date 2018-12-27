import React, { Component } from 'react';
import "./reservations.css";
import { DatePicker, TimePicker, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import SectionDivider from './SectionDivider'
import PageHeader from './pageHeader.js'
import imgLinks from '../assets/imgLinks.js'

class Reservations extends Component {
  componentDidMount() {
    document.title = "Reserve a spot as early as today!"
    document.querySelector('meta[name="Description"]')
      .setAttribute("content", "Make a reservation through our simple automated system. If further accommodations are needed we'll do our best to improve your visit.")
  }

  render() {

    return (
      <div>
        <PageHeader
          sectionName="Reservations"
          images={imgLinks.reservations}
          height='40vh'
          credit={"Photo by Sasha • Stories on Unsplash"}
        />

        <section className="reservations-form">

          <div className="columns is-gapless">
            <div className="column is-two-fifths reservations-form-padding">
              <h3 className="title is-3 is-size-4-touch">
                Need further Accommodations?
                <SectionDivider type="section" />
              </h3>
              <p>Occaecat voluptate mollit officia consectetur aliqua ullamco officia ad sit sit elit. Ex reprehenderit ut commodo laboris sunt sint nulla qui reprehenderit aute.</p>
              <p>Elit ullamco ex esse amet velit ex sunt sint adipisicing nulla qui velit adipisicing nostrud id officia cillum.</p>
            </div>

            <div className="column reservations-form-padding">
              <form action="post">
                <div className="columns is-mobile is-multiline">
                  <div className="column">
                    <label>Reservation Date
                      <div className="rInput"><DatePicker /></div>
                    </label>
                  </div>

                  <div className="column">
                    <label>Reservation Time
                      <div className="rInput"><TimePicker use12Hours format="h:mm a" /></div>
                    </label>
                  </div>

                  <div className="column">
                    <label>Number of guests
                      <div className="rInput"><InputNumber min={1} max={12} defaultValue={2} /></div>
                    </label>
                  </div>

                  <div className="column" style={{minWidth: "150px"}}>
                    <label>Phone Number
                      <div className="rInput"><Input placeholder="(XXX) XXX-XXXX" /></div>
                    </label>
                  </div>

                  <div className="column " style={{minWidth: "280px"}}>
                    <label>Name
                      <div className="rInput"><Input placeholder="--" /></div>
                    </label>
                  </div>

                  <div className="column " style={{minWidth: "280px"}}>
                    <label>Email
                      <div className="rInput"><Input type="email" placeholder="--" /></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label>Comments
                    <div className="rInput"><Input /></div>
                  </label>
                </div>

                <button type="submit" className="button is-primary is-medium is-outlined">Submit</button>
              </form>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default Reservations;