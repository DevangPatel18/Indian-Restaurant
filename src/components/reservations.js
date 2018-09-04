import React, { Component } from 'react';
import "./reservations.css";
import { DatePicker, TimePicker, Input, InputNumber, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import SectionHeader from './sectionHeader.js'
import rsvImage from '../assets/wine-glass-dinner.jpg'

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
          url={rsvImage}
          height='40vh'
          credit={"Photo by Sasha • Stories on Unsplash"}
        />

        <section className="reservations-form">
          <Row gutter={16} type="flex" align="middle">
            <Col span={8} className="reservations-form-contact">
              <h3 className="title is-3">
                Need further Accomodations?
              </h3>
              <p>Occaecat voluptate mollit officia consectetur aliqua ullamco officia ad sit sit elit. Ex reprehenderit ut commodo laboris sunt sint nulla qui reprehenderit aute.</p>
              <p>Elit ullamco ex esse amet velit ex sunt sint adipisicing nulla qui velit adipisicing nostrud id officia cillum.</p>

            </Col>

            <Col span={16}>
              <form action="post">
                <Row gutter={16}>
                  <Col span={8}>
                    <p>Reservation Date</p>
                    <DatePicker/>
                  </Col>

                  <Col span={8}>
                    <p>Reservation Time</p>
                    <TimePicker use12Hours format="h:mm a"/>
                  </Col>

                  <Col span={8}>
                    <p>Number of guests</p>
                    <InputNumber min={1} max={12} defaultValue={2}/>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={8}>
                    <p>Name</p>
                    <Input placeholder="--"/>
                  </Col>

                  <Col span={8}>
                    <p>Phone Number</p>
                    <Input placeholder="(XXX) XXX-XXXX"/>
                  </Col>

                  <Col span={8}>
                    <p>Email</p>
                    <Input type="email" placeholder="--"/>
                  </Col>
                </Row>

                <div>
                  <p>Comments</p>
                  <Input/>
                </div>

                <button type="submit" className="custom-submit">Submit</button>
              </form>
            </Col>

          </Row>

        </section>
      </div>
    )
  }
}

export default Reservations;