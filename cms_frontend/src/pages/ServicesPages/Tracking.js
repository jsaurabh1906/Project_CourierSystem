import React from "react";
import Button from "react-bootstrap/Button";
import bannertracking from "../images/bannertracking.png";
import Form from "react-bootstrap/Form";
import "../CSS/Tracking.css";
import Layout from "../../components/Layout/Layout";

export default function Tracking() {
  return (
    <Layout>
      <div className="mainsection">
        <div className="contentbox">
          <h3>Track Your Orders Easily</h3>
          <p>Just enter your Tracking number  & it’s done.</p>
          <div className="btnbox">
            <div className="btn">
              <img src={bannertracking} alt="bannertracking"></img>
            </div>
          </div>
        </div>

        <div className="formsection">
          <div className="tracking_main">
              <h4>Tracking Form</h4>
            <Form className="trackingForm">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Order Id</Form.Label>
                <Form.Control className="tip" type="text" placeholder="Enter Order Id" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group>
                {" "}
                <Button
                  className="trackBtn"
                  variant="contained"
                  color="primary"
                 
                >
                  Track Now
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
