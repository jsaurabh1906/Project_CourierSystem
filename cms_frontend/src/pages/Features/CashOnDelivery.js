import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import "./CashOnDelivery.css";

export default function CashOnDelivery(props) {
  return (
    <Layout>
      <div className="top">
        <div className="main-section">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="content-box">
                  <h1>Cash On Delivery</h1>

                  <p>
                    We Offer Possibilities in Every Direction. Provide both
                    prepaid & cash on delivery payment options.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="img4">
                  <img
                    src="Cash.jpg"
                    alt="Flowers in Chania"
                    width="800"
                    height="300"
                  ></img>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </div>{" "}
      </div>
      <div className="list-style2">
        <div className="list-style">
          <h4>Cash On Delivery</h4>
          <div className="ls">
            <ul>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Cash Payment"}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Pay with UPI/Net Banking"}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Pay using Debit Card/Credit Card/ATM card"}
            </ul>
          </div>
        </div>

        <div className="list-style4">
          <div className="ls">
            <img src="cod.jpg" alt="thumb" width="300" height="200"></img>{" "}
          </div>

          <h3>Reason to Accept Multiple Payment Methods</h3>
          <div className="list-style5">
            <img src="1.png" alt="thumb" width="100" height="60"></img>{" "}
            <h4>Improved trust</h4>
            <p>
              For many customers, making a payment online is still seen as a
              risk and because of this they may have a preferred way to pay.
              Offering a range of different payment methods makes your service
              store appear more trustworthy, as you are taking the customers
              needs, preferences and security into consideration. When you
              provide multiple payment options it gives customers the green
              light to trust you. The more options you offer the more
              professionalism and legitimacy you show.
            </p>
            <img src="2.png" alt="grow" width="100" height="60"></img>{" "}
            <h4>Attract new customers</h4>
            <p>
              The best way to attract customers is to convey that your company
              uses traditional methods of payment processing, as well as
              embracing new technology to appeal to a new generation of
              customers. As a result, your business will not only continue to
              bring in service for your regular customers, but will attract new
              customers who choose to pay via certain payment methods, such as a
              smartphone, where card details may not be required or pay after
              delivery methods.
            </p>
            <img src="3.png" alt="coin" width="100" height="60"></img>{" "}
            <h4>More conversions</h4>
            <p>
              The biggest reason for offering multiple payment options is that
              it will help maximise your conversion rate. If you have a customer
              who wants to do business with you after they visit your site and
              add a product to their cart, then the last thing you want to do is
              put them off by only allowing a limited choice of payment methods.
            </p>
            <img src="4.png" alt="cart" width="100" height="60"></img>{" "}
            <h4>Reduced cart abandonment</h4>
            <p>
              Many customers will abandon a purchase if they are not able to pay
              in their preferred way. Offering a range of payment methods can
              reduce friction at the checkout process and encourages the
              customer to complete their transaction. Reducing cart abandonment
              can increase your conversion rate and revenue.{" "}
            </p>
          </div>
        </div>

        <div className="list-style7">
          <div className="ls">
            <img src="cd.jpg" alt="thumb" width="300" height="200"></img>{" "}
          </div>
          <h4>What Makes Us Your Best Choice?</h4>
          <div className="list-style8">
            <p>
              We creates innovative and advanced solutions to accomplish your
              business and customer needs. With a single point of contact and a
              robust lineup of tech-enabled assets, we offer end-to-end
              solutions to fulfill B2B and B2C business needs.
            </p>
          </div>

          <div className="list-style9">
            <img src="31.png" alt="thumb" width="100" height="60"></img>{" "}
            <h4>Edge Over Competitors</h4>
            <p>
              Offer same-day deliveries, customer experience strategy support,
              and an exceptional shopping experience to stay ahead of the
              competition.
            </p>
            <img src="32.png" alt="thumb" width="100" height="60"></img>{" "}
            <h4>Uplift Customer Experience</h4>
            <p>
              Offer your customers a branded tracking experience and real-time
              delivery updates to ensure lesser escalations and an upgraded
              customer experience.
            </p>
            <img src="33.png" alt="thumb" width="100" height="60"></img>{" "}
            <h4>Business Advantages</h4>
            <p>
              Lower your cart abandonment rate and enjoy a higher revenue
              potential. Experience ease of business through the fastest customs
              clearance across the world.
            </p>
            <img src="34.png" alt="thumb" width="100" height="60"></img>{" "}
            <h4>Technology and Networking</h4>
            <p>
              Leverage AI, ML, automation processes, and the widest courier
              delivery network across the world to expand your customer reach
              most profoundly.
            </p>
          </div>
          {/* <div className="btn-box">
            <h3>Don’t have an account?</h3>
          </div>
          <div className="btn-box1">
            <Button variant="primary" href="#">
              Sign Up For Free
            </Button>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
