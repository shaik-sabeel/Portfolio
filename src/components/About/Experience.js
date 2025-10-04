import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={10} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>
              Web Developer Intern
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              GrowAthlete
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "justify" }}>
              As a Web Developer Intern, I contributed to the development and maintenance of web applications. 
              My responsibilities included working with modern frontend technologies and backend technologies to build responsive,user-friendly interfaces and full working websites.
            </Card.Text>
            <ul>
              <li className="about-activity">
                Developed and styled the websites using React.js and other tech stacks.
              </li>
              <li className="about-activity">
                Collaborated with the team to implement new features and fix bugs.
              </li>
              <li className="about-activity">
                Gained hands-on experience with the full software development lifecycle.
              </li>
            </ul>
            <Card.Footer>
              <small className="text-muted">August 2025 - Present</small>
            </Card.Footer>
          </Card.Body>
          <Card.Body>
            <Card.Title>
              Web Developer & Web Extension Intern
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              SA Solutions
            </Card.Subtitle>
            <Card.Text style={{ textAlign: "justify" }}>
              As a Web Developer & Web Extension Intern, I contributed to the development and maintenance of web applications and browser extensions. My responsibilities included working with full working websites and web extensions.
            </Card.Text>
            <ul>
              <li className="about-activity">
                Developed the web extensions.
              </li>
              <li className="about-activity">
                Collaborated with the team to implement new features and fix bugs.
              </li>
              {/* <li className="about-activity">
                Gained hands-on experience with the full software development lifecycle.
              </li> */}
            </ul>
            <Card.Footer>
              <small className="text-muted">July 2025 - August 2025</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;