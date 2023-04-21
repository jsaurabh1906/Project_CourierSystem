import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";

import "../CSS/Portfolio.css";
import Review from "./Review";

function Portfolio() {
  return (
    <Layout>
      <div className="portfolio-section">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p className="text-justify">
                ASP Couriers is a leading courier service provider, offering
                reliable and efficient delivery solutions for individuals and
                businesses. We have a team of experienced professionals who are
                committed to delivering your packages on time and with the
                highest level of care.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Our Services</h2>
              <p>We offer a range of delivery services to meet your needs:</p>
              <ul>
                <li>Same-day delivery</li>
                <li>Next-day delivery</li>
                <li>Express delivery</li>
                <li>International delivery</li>
                <li>Tracking and proof of delivery</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Why Choose Us</h2>
              <ul>
                <li>Reliable and efficient service</li>
                <li>
                  Affordable pricing without compromising on quality or speed of
                  delivery
                </li>
                <li>Experienced team of professionals</li>
                <li>
                  Technology-driven for improved delivery times and a seamless
                  delivery experience
                </li>
                <li>
                  Exceptional customer service with friendly and helpful staff
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>For all your courier needs, contact ASP Couriers today.</p>
             
              <Button
          className="sersubmitBtn"
          variant="contained"
          color="primary"
         >
          Get in touch
        </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Review />
        </Container>
      </div>
    </Layout>
  );
}

export default Portfolio;
