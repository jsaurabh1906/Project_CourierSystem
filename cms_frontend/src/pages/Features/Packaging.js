import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Packaging.css";
export default function Packaging(props) {
  return (
    <>
      <div className="top">
        <div className="main-section4">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <div className="content-box">
                  <h1>Courier packaging service</h1>
                </div>
              </Col>
              <div className="img1">
                <img
                  src="pack.gif"
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
        <div className="pack4">
          <h4>
            Packed with tips and techniques, it gives clear and practical advice
            about:{" "}
          </h4>
          <div className="ps">
            <ul>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	The checkout process "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Website design "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	How to optimise your website speed "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Website optimisation for mobile  "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Sales "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	Upselling and cross-selling  "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "•	What is a good conversion rate?  "}
              <br></br>
            </ul>
          </div>
        </div>
        <div className="pack2">
          <img
            src="pac.png"
            alt="Flowers in Chania"
            width="400"
            height="250"
          ></img>{" "}
        </div>

        <div className="pack5">
          <h3>Courier Companies are responsible for proper</h3>
          <div className="p">
            <ul>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• packaging "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• marking and labeling "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• descriptions on all shipper documentation "}
            </ul>
          </div>
        </div>
        <div className="pack6">
          <h3>Proper Packaging</h3>
          <div className="p2">
            <p>
              Consignments must be properly packed to ensure damage-free
              transportation with ordinary care in handling. The proper
              packaging of goods for transportation requires good understanding
              of the product and distribution environment
            </p>
          </div>
          <div className="p1">
            <p>There are three essentials to any package:</p>
            <ul>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• outer packaging "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• inner packaging "}
              <br></br>
              {props.data
                ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
                : "• sealing method"}
              <br></br>
            </ul>
          </div>
        </div>

        <div className="pack7">
          <img
            src="pac1.png"
            alt="Flowers in Chania"
            width="400"
            height="250"
          ></img>{" "}
        </div>

        <div className="pack8">
          <h3>Why Choose ASP Service Courier System ?</h3>
          <div className="p4">
            <p>
              We are a professional logistics solutions provider who you can
              trust and rely-on to ensure hassle-free fulfillment for your
              e-commerce deliveries. Being a technology driven company, we have
              deployed intelligence backed automations and data sciences that
              enables us to meet the fast-growing demand for quality and fast
              logistics services required by large, medium and small online
              businesses.
            </p>
          </div>

          <div className="pack9">
            <div className="pack7">
              <img
                src="vas.jpg"
                alt="Flowers in Chania"
                width="400"
                height="250"
              ></img>{" "}
            </div>
            <h3>Value Added Services </h3>
            <div className="p5">
              <p>
                Our value added solutions go beyond the standard e-commerce
                logistics services which come to mind when companies look to
                outsource logistics. There are a wide range of services that
                complement and enhance our logistics offerings as we support the
                smooth flow of shipments with additional services such as:
              </p>
            </div>

            <div className="pack101">
              <div className="Image1">
                <img
                  src="try.png"
                  alt="Flowers in Chania"
                  width="100"
                  height="100"
                ></img>{" "}
              </div>
              <div className="top-left">
                <div className="p8">
                  <h3>Try & Buy</h3>
                  <p>
                    We offer a comfortable and customer-friendly exchange
                    management service enhancing the overall experience of
                    product evaluations by end-consumers.
                  </p>
                </div>
              </div>
            </div>
            <div className="pack111">
              <div className="Image1">
                <img
                  src="sd.png"
                  alt="Flowers in Chania"
                  width="100"
                  height="100"
                ></img>{" "}
              </div>
              <div className="top-left">
                <div className="p8">
                  <h3>Switch Deliveries</h3>
                  <p>
                    Today’s customers expect an exchange of products they are
                    not satisfied with as quickly as possible. We manage smooth
                    return processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="pack121">
              <div className="Image1">
                <img
                  src="vch.png"
                  alt="Flowers in Chania"
                  width="100"
                  height="100"
                ></img>{" "}
              </div>
              <div className="top-left">
                <div className="p8">
                  <h3>Valuable Cargo Handling</h3>
                  <p>
                    We offer the highest level of security and surveillance
                    enabled transportation of valuable items like gold, precious
                    art pieces, gems and jewellery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
