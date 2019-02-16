import React from 'react';
import { Button, Col, Row } from 'reactstrap';

export default () => (
  <div className="lab-con pt-4 pb-4 text-center d-flex justify-content-center">
    <Row>
      <Col xs={12}>
        <h2 className="reflect-white">Check Out the Labs</h2>
        <i className="fas fa-5x fa-flask pt-4 pb-4" />
        <p>
        Our lab is our place to test, experiment, and showcase. It contains everything from unfinished Hackathon projects to completed open-source projects.
        </p>
        <div className="d-flex justify-content-center">
        <Button className="m-2" type="primary" tag="a">
          Github
        </Button>
        <Button className="m-2" type="primary" tag="a">
        2λ Labs
        </Button>
        </div>
      </Col>
    </Row>
  </div>
);
