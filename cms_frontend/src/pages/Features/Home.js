import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../Pages/home.css'

export default function Home(props) {
  return (
    <>
      <div className="top">
        <div className="main-section111">
          <Container>
            <Row>
              
                <div className="content-box111">
                  <p>ASP Services</p>
                  <h4>A courier service is a premium, all-inclusive service which collects and delivers shipments in the shortest possible time frame</h4>
                </div>
             
              
                <div className="img44">

                  <img src="track.png" alt="Flowers in Chania" width="600" height="300"></img>{" "}
                </div>
             
            </Row>
          </Container>
        </div>{" "}
      </div>

    </>
  );
}
