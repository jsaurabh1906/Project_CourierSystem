import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import "../CSS/Postship.css";
import laptop from "../images/laptop.png";
export default function Postship() {
  return (
    <Layout>
      <div className="top">
        <div className="main-section">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="PostShip-content-box">
                  <h1>Post Ship: An Unparalleled Post-Purchase Experience</h1>

                  <p>
                    Give your buyers a seamless post-purchase experience with
                    customized tracking pages, marketing banners and regular
                    SMS, Email notifications.
                  </p>
                  <div className="btn-box">
                    
                    <Button
                      className="hypsubmitBtn"
                      variant="contained"
                      color="primary"
                      href="/register"
                    >
                      SignUp Now
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="Postship-img-container">
                  <img src={laptop} alt="laptop" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>{" "}
      </div>
      <div class="data">
        <div class="inner-list">
          <p>
            <figure class="wp-block-image">
              <img
                width="82"
                height="67"
                decoding="async"
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Tracking-page.png"
                alt=""
                class="wp-image-12502 entered lazyloaded"
                data-lazy-src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Tracking-page.png"
                data-ll-status="loaded"
              />
              <noscript>
                <img
                  width="82"
                  height="67"
                  decoding="async"
                  src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Tracking-page.png"
                  alt=""
                  class="wp-image-12502"
                />
              </noscript>
            </figure>
            <h3>Tracking page with complete Information</h3>
            <p>
              Find all order details like order id, product details, name, and
              phone number on this tracking page
            </p>

            <figure class="wp-block-image">
              <img
                width="57"
                height="73"
                decoding="async"
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Real-time-tracking.png"
                alt=""
                class="wp-image-12502 entered lazyloaded"
              />
              <noscript>
                <img
                  width="57"
                  height="73"
                  decoding="async"
                  src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Real-time-tracking.png"
                  alt=""
                  class="wp-image-12502"
                />
              </noscript>
            </figure>
            <h3>Real time order tracking</h3>
            <p>
              Inform buyers as and when their order moves. Make every detail
              available to them!
            </p>

            <figure class="wp-block-image">
              <img
                width="86"
                height="73"
                decoding="async"
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/EDD.png"
                alt="Estimated Delivery Date"
                class="wp-image-12502 entered lazyloaded"
              />
              <noscript>
                <img
                  width="86"
                  height="73"
                  decoding="async"
                  src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/EDD.png"
                  alt="Estimated Delivery Date"
                  class="wp-image-12502"
                />
              </noscript>
            </figure>
            <h3>Estimated date of delivery</h3>
            <p>
              Give your customers an approximate delivery date with the help of
              our Machine0 Learning backed technology
            </p>
            <figure class="wp-block-image">
              <img
                width="92"
                height="65"
                decoding="async"
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Email-and-sms.png"
                alt="Email and SMS Notifications"
                class="wp-image-12502 entered lazyloaded"
              />
              <noscript>
                <img
                  width="92"
                  height="65"
                  decoding="async"
                  src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Email-and-sms.png"
                  alt="Email and SMS Notifications"
                  class="wp-image-12502"
                />
              </noscript>
            </figure>
            <h3>Regular email &amp; SMS updates</h3>
            <p>
              Utilize our API integrated platform to keep your buyer updated
              with SMS and Email updates about their package
            </p>

            <figure class="wp-block-image">
              <img
                width="86"
                height="69"
                decoding="async"
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Brand.png"
                alt="Whitelabel Tracking Page"
                class="wp-image-12502 entered lazyloaded"
              />
              <noscript>
                <img
                  width="86"
                  height="69"
                  decoding="async"
                  src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2019/04/Brand.png"
                  alt="Whitelabel Tracking Page"
                  class="wp-image-12502"
                />
              </noscript>
            </figure>
            <h3>White labeled tracking pages</h3>
            <p>
              Customize the tracking page with your brand logo, name, and
              support details
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
}
