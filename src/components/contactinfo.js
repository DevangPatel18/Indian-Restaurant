import React from 'react';
import './contactinfo.css';
import {Row, Col} from 'antd';

const Contactinfo = () => {

  return (
    <div className="contactinfo">
        
      <div className="contactinfo-hours">
        <Row>
          <Col className="contactinfo-hours-header has-text-centered has-text-weight-bold is-size-5">Hours</Col>
        </Row>
        <Row>
          <Col>
            <Row gutter={18}>
              <Col span={12} className="has-text-right"><p>Monday - Friday</p></Col>
              <Col span={12} className="has-text-left"><p>10am-11pm</p></Col>
            </Row>
            <Row gutter={18}>
              <Col span={12} className="has-text-right"><p>Saturday</p></Col>
              <Col span={12} className="has-text-left"><p>11am-9pm</p></Col>
            </Row>
            <Row gutter={18}>
              <Col span={12} className="has-text-right"><p>Sunday & Holidays</p></Col>
              <Col span={12} className="has-text-left"><p>12pm-8pm</p></Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col className="has-text-centered has-text-weight-bold is-size-5">Contact info</Col>
        </Row>
        <Row gutter={24}>
          <Col className="has-text-left">
            <p><i className="is-size-3 fas fa-map-marked-alt"></i> 542 Nowaresville, Toronto, ON</p>
            <p><i className="is-size-3 fas fa-phone"></i> 999-999-999</p>
            <p><i className="is-size-3 far fa-envelope"></i> support@indianrest.com</p>
          </Col>
        </Row>
      </div>  

    </div>
  )
}

export default Contactinfo;