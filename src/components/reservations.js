import React, { Component } from 'react';
import "./reservations.css";
import { DatePicker, TimePicker, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import SectionHeader from './sectionHeader.js'
import imgLinks from '../assets/imgLinks.js'

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div>
        <SectionHeader
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
              </h3>
              <p>Occaecat voluptate mollit officia consectetur aliqua ullamco officia ad sit sit elit. Ex reprehenderit ut commodo laboris sunt sint nulla qui reprehenderit aute.</p>
              <p>Elit ullamco ex esse amet velit ex sunt sint adipisicing nulla qui velit adipisicing nostrud id officia cillum.</p>
            </div>

            <div className="column reservations-form-padding">
              <form action="post">
                <div className="columns is-mobile is-multiline">
                  <div className="column">
                    <p>Reservation Date</p>
                    <DatePicker/>
                  </div>

                  <div className="column">
                    <p>Reservation Time</p>
                    <TimePicker use12Hours format="h:mm a"/>
                  </div>

                  <div className="column">
                    <p>Number of guests</p>
                    <InputNumber min={1} max={12} defaultValue={2}/>
                  </div>

                  <div className="column" style={{minWidth: "150px"}}>
                    <p>Phone Number</p>
                    <Input placeholder="(XXX) XXX-XXXX"/>
                  </div>

                  <div className="column " style={{minWidth: "280px"}}>
                    <p>Name</p>
                    <Input placeholder="--"/>
                  </div>

                  <div className="column " style={{minWidth: "280px"}}>
                    <p>Email</p>
                    <Input type="email" placeholder="--"/>
                  </div>
                </div>

                <div>
                  <p>Comments</p>
                  <Input/>
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