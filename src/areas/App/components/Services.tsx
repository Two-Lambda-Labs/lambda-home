import React from 'react';
import { Row, Col } from 'reactstrap';

interface IServiceProps {
  name: string;
  description: string;
  iconClass: string;
}

const Service: React.FunctionComponent<IServiceProps> = ({ iconClass, name, description }) => (
  <Col md={4} sm={6} xs={12} className="d-flex flex-column align-items-center">
    <i className={`${iconClass} fa-3x pb-4`} />
    <h5>{name}</h5>
    <p>{description}</p>
  </Col>
);

export default () => (
  <div className="services-con">
    <h2 className="text-center p-4"><span className="reflect-black">Services</span></h2>
    <Row className="p-5">
      <Service
        name="Native Mobile Apps"
        description="We have extensive backgrounds in building cross platform native mobile apps using React Native, and native iOS Apps using Swift."
        iconClass="fas fa-mobile-alt"
      />
      <Service
        name="Custom CRM's"
        description="There are a plethera of generic CRM apps out there, and in almost every case there are some features that don't 
       fit a business's use case. We specialize in builing web based CRM's that can be acceisble from any device."
        iconClass="fas fa-rss-square"
      />
      <Service
        name="Custom Websites"
        description="Simple landing pages with stylistic value to your audience is key in capturing customer attention. We
            specialize in creating responsive websites for any use case."
        iconClass="fab fa-safari"
      />
      <Col xs={12} className="text-center p-4">Don't see the service you are looking for? Reach out to us below.</Col>
    </Row>
  </div>
);
