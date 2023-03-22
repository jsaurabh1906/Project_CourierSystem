import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../CSS/Hyperlocal.css";
import hyperlocal from "../images/hyperlocal.png";
import LowShippingRates2X from "../images/LowShippingRates2X.png";
import LiveOrderTracking2x from "../images/LiveOrderTracking2x.png";
import SameDayDelivery2x from "../images/SameDayDelivery2x.png";
import ImprovedCustomerExperience2x from "../images/ImprovedCustomerExperience2x.png";
import MultiplePaymentModes2x from "../images/MultiplePaymentModes2x.png";
import Layout from "../../components/Layout/Layout";
//import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Hyperlocal() {
  return (
    <Layout>
      <div className="top">
        <div className="main-section">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="content-box">
                  <h1>Ultra-Fast</h1>
                  <h1>Hyperlocal Delivery</h1>
                  <p>
                    Affordable & easy intracity deliveries, done within hours.
                  </p>
                  <div className="btn-box">
                    <Button variant="primary" href="#">
                      Start Shipping
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="hyperlocal-img-container">
                  <img src={hyperlocal} alt="aboutimg" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>{" "}
        <Container>
          <Row>
            <Col>
              <div className="c1">
                <p id="p1">Drive Growth For Your Local Business</p>
                <p id="p2">
                  Generate more sales by offering same-day delivery.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={5}>
              <div className="myimage">
                <img src={LowShippingRates2X} alt="LowShippingRates2X" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3>Low Shipping Rates</h3>
                <p>
                  Ship at reasonable rates & save big for your small business.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3>Same-Day Delivery</h3>
                <p>Deliver orders in just a few hours of receiving them.</p>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="myimage">
                <img src={SameDayDelivery2x} alt="SameDayDelivery2x" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={5}>
              <div className="myimage">
                <img
                  src={MultiplePaymentModes2x}
                  alt="MultiplePaymentModes2x"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3>Multiple Payment Modes</h3>
                <p>
                  Allow your buyers the freedom to choose between COD & prepaid
                  options.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3>Live Order Tracking</h3>
                <p>
                  Always keep your buyers in the loop with real-time SMS & email
                  updates.
                </p>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="myimage">
                <img src={LiveOrderTracking2x} alt="LiveOrderTracking2x" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={5}>
              <div className="myimage">
                <img
                  src={ImprovedCustomerExperience2x}
                  alt="ImprovedCustomerExperience2x"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3>Improved Customer Experience</h3>
                <p>
                  Enhance your delivery experience & become the local favourite.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="bottom">
          <Row>
            <Col xs={12} md={5}>
              <div className="myimage"></div>
            </Col>
            <Col xs={12} md={7}>
              <div className="myclass">
                <h3> </h3>
                <p></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
