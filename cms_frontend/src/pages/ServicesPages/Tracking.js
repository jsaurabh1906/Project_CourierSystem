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
          <p>Just enter your Tracking number or Order ID & it’s done.</p>
          <div className="btnbox">
            <div className="btn">
              <img src={bannertracking} alt="bannertracking"></img>
            </div>
          </div>
        </div>

        <div className="formsection">
          <div className="tracking_main">
            <Form>
              <h4>Tracking Form</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Order Id</Form.Label>
                <Form.Control type="email" placeholder="Enter Order Id" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="tracking_button"
              >
                Track
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
