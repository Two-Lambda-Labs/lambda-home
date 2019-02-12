import React from 'react';
import { Col, Row } from 'reactstrap';

interface IContactCardProps {
  name: string;
  picture: string;
  description: string;
  githubUrl: string;
  linkedInUrl: string;
  emailUrl: string;
  website: string;
}

const ContactCard = ({ name, picture, description, githubUrl, linkedInUrl, emailUrl, website }: IContactCardProps) => (
  <div className="contact-card d-flex flex-column align-items-center text-center m-5">
    <img alt="" src={picture} />
    <span className="pt-3 font-weight-bold">{name}</span>
    <a target="_blank" rel="noopener noreferrer" className="pt-0" href={website}>
      {website}
    </a>
    <span className="description-con p-4 mb-2">{description}</span>
    <div className="icon-links d-flex flex-row justify-content-between border-top p-2">
      <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
        <i className="fab fa-2x fa-github" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={emailUrl}>
        <i className="fa fa-2x fa-envelope" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={linkedInUrl}>
        <i className="fab fa-2x fa-linkedin" />
      </a>
    </div>
  </div>
);

export default () => (
  <div className="about-con pt-4 pb-4 text-center">
    <Row>
      <Col xs={12}>
        <h2 className="fon">Who we are</h2>
        <div className="d-flex justify-content-center">
          <ContactCard
            name="Kyle Gray"
            picture="https://media.licdn.com/dms/image/C4E03AQEKBsbE7EM55Q/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=ORXEeRuzScZROkfPaWuk1v9Bjaj5i1J6EVMoW7Bzofg"
            description="Passionate Fullstack Developer always looking for the next big thing in tech."
            website="https://volleycode.com"
            linkedInUrl="https://www.linkedin.com/in/kyle-gray16/"
            githubUrl="https://github.com/GoPro16"
            emailUrl="mailto:kyle@volleycode.com"
          />
          <ContactCard
            name="Jonathan Danek"
            picture="https://media.licdn.com/dms/image/C4D03AQGf9EVwjTVj2A/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=v85zcDztFsjQYUISDaMgi57aHYfE8CmHY6pYKCi6Z6Q"
            description="Experienced iOS Developer with a demonstrated history of working in the computer software industry."
            website="https://danek.me"
            linkedInUrl="https://www.linkedin.com/in/jonathandanek/"
            githubUrl="https://github.com/jdanek4"
            emailUrl="mailto:jdanek1@gmail.com"
          />
        </div>
      </Col>
    </Row>
  </div>
);
