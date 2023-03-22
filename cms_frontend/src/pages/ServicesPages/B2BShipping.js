import React from "react";
import "../CSS/B2BShipping.css";
import bulk2 from "../images/bulk2.jpg";

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
//import B2BShipping from "./B2BShipping";

function B2BShipping() {
  return (
    <Layout>
      {" "}
      <div className="b2b-shipping">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <h2 className="mb-4">B2B & BulkShipping</h2>
              <p className="lead">
                Your reliable partner for all your bulk shipping needs.
              </p>
            </Col>
            <Col md={6} className="imgcol">
              <img src={bulk2} alt="Bulk Shipping" className="img-fluid" />
            </Col>
          </Row>
          <hr />
          <Row className="mb-5">
            <Col md={6}>
              <h3>Our Services</h3>
              <ul>
                <li>Bulk shipping for businesses</li>
                <li>Fast and efficient delivery</li>
                <li>Customized solutions for your needs</li>
                <li>Tracking and proof of delivery</li>
                <li>Competitive pricing</li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>Why Choose Us</h3>
              <ul>
                <li>Reliable and efficient</li>
                <li>Experienced team</li>
                <li>Customized solutions for your needs</li>
                <li>Technology-driven</li>
                <li>Exceptional customer service</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Contact Us</h3>
              <p id="p">
                For all your bulk shipping needs, contact us today. You can
                reach us by phone, email, or through our website. We look
                forward to being your reliable partner for all your shipping
                needs.
              </p>
            </Col>
            <Col md={6}>
              <h3>Location</h3>
              <p id="p">Model Colony, ShivajiNagar</p>
              <p id="p">Pune, MH, India 411019</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default B2BShipping;
