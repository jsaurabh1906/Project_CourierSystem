import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ECommerceIntigration.css";
export default function ECommerceIntigration(props) {
  return (
    <>
      <div className="top">
        <div className="main-section3">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="content-box">
                  <h1>E-Commerce Intigration</h1>
                </div>
              </Col>

              <div className="img1">
                <img
                  src="ecom.gif"
                  alt="Flowers in Chania"
                  width="800"
                  height="300"
                ></img>{" "}
              </div>
            </Row>
          </Container>
        </div>{" "}
      </div>
      <div className="list-style2">
        <div className="App-header4">
          <div className="A1">
            <div className="A2">
              <h2>Adding value to business</h2>
              <p>
                ASP Service is a complete eCommerce operating system for brands
                that want to ensure control and efficiency throughout their
                business processes. It is a platform that connects, manages, and
                automates ecommerce operations cycles. Time to digitize your
                service and get one step ahead of your costumer experience
                solution.
              </p>
            </div>
          </div>
          <h3>Best Integrations Are A Click Away</h3>
          <h4>
            We’ve partnered with the most prominent marketplaces, eCommerce
            channels, and courier partners to offer you comprehensive business
            assistance.
          </h4>
        </div>
        <div className="pack6">
          <h3>Accelerate your sales</h3>
          <div className="p2">
            <p>
              Eshopbox helps you boost your conversions across sales channels
              with tools and techniques that give you the competitive advantage
              to become a fast-growing ecommerce business.
            </p>
          </div>
          <div className="p1">
            <ul>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "Increase your sales velocity by selling on multiple sales channels."}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "Boost your product visibility with Amazon Prime and Flipkart Assured badges."}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "Convert website visitors to shoppers with free express shipping."}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "Sell more by becoming a top-rated marketplace seller."}
              <br></br>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img
          src="EC.png"
          alt="Flowers in Chania"
          width="1350"
          height="300"
        ></img>{" "}
      </div>
    </>
  );
}
