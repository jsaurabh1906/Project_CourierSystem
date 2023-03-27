import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import "./EmailSMS.css";
export default function EmailSMS(props) {
    return (
        <Layout>
            <div className="top">
                <div className="main-section2">
                    <Container>
                        <Row>
                            <Col xs={12} md={7}>
                                <div className="content-box">
                                    <h1>Email & SMS Notifications</h1>

                                </div>
                            </Col>

                            <div className="img1">

                                <img src="email2.gif" alt="Flowers in Chania" width="800" height="300"></img>{" "}
                            </div>
                        </Row>
                    </Container>
                </div>{" "}
            </div>
            <div className="list-style2">
            <div className="App-header4">
                <div className="A1">

                <h2>Improve customer service with real-time shipment updates</h2>
                    
                    <div className="A2">
                        <p>Enhance the shipment tracking experience of your buyers with the help of an automated notification system. Real-Time communication via email and SMS not only gives your buyers a sense of relief but, helps you meet their delivery expectation too.

                        Shiprocket sends shipment notifications as soon as your order gets picked up from your location. Below are the multiple tracking statuses on which we send both email and SMS to your customers:</p>
                    </div>
                </div>

                <img src="raw.png" alt="Flowers in Chania" width="1250" height="300"></img>{" "}

                <h2>Examples of Email and SMS</h2>

                <img src="sms.png" alt="Flowers in Chania" width="800" height="500"></img>{" "}
                
                
                </div>
            </div>
        </Layout>
    );
}
