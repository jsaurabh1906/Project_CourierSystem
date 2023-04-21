import React from "react";
import { Card, Button } from "react-bootstrap";
import "../CSS/Pricing.css";
import cre from "../images/cre.png";
import postship from "../images/postship.png";
import multiuser from "../images/multiuser.png";
import Layout from "../../components/Layout/Layout";
//import { NavLink } from 'react-router-dom';
const Pricing = () => {
  const plans = [
    {
      name: "B2B",
      basePlan: 200,
      localCharge: 200,
      speedCharge: 250,
    },
    {
      name: "B2C",
      basePlan: 150,
      localCharge: 150,
      speedCharge: 200,
    },
    {
      name: "C2C",
      basePlan: 100,
      localCharge: 100,
      speedCharge: 150,
    },
  ];

  const slabs = [
    { range: "1 to 10 kg", localCharge: 0, speedCharge: 0 },
    { range: "11 to 50 kg", localCharge: 50, speedCharge: 50 },
    { range: "51 to 100 kg", localCharge: 100, speedCharge: 100 },
    { range: "101 to 250 kg", localCharge: 150, speedCharge: 150 },
    { range: "250 kg and above", localCharge: 200, speedCharge: 200 },
  ];

  return (
    <Layout>
      <div className="container">
        <div class="dnd_column_dd_span12 ">
          <h1 class="myhead">
            <span>Choose a Plan That Works Best for You</span>
          </h1>
          <blockquote>
            <p class="font">
              Start with a free account and upgrade as you grow
            </p>
          </blockquote>
        </div>

        <div className="row">
          {plans.map((plan) => (
            <div className="col-md-4 mb-4" key={plan.name}>
              <Card className="h-100">
                <Card.Header className="text-center pricingtext">{plan.name}</Card.Header>
                <Card.Body>
                  <Card.Title
                    className="text-center pricingtext"
                    style={{ color: "black" }}
                  >
                    Base Plan
                  </Card.Title>
                  <Card.Text className="text-center pricingtext">
                    <h1 style={{ color: "black" }}>₹{plan.basePlan}</h1>
                  </Card.Text>
                  <ul className="asd">
                    {slabs.map((slab) => (
                      <li key={slab.range}>
                        <strong>{slab.range}</strong>
                        <ul>
                          {plan.name === "B2B" && (
                            <>
                              <li>
                                Local Charge: ₹
                                {plan.localCharge + 2 * slab.localCharge}
                              </li>
                              <li>
                                Speed Charge: ₹
                                {plan.speedCharge + 3 * slab.speedCharge}
                              </li>
                            </>
                          )}
                          {plan.name === "B2C" && (
                            <>
                              <li>
                                Local Charge: ₹
                                {plan.localCharge + 1.25 * slab.localCharge}
                              </li>
                              <li>
                                Speed Charge: ₹
                                {plan.speedCharge + 1.5 * slab.speedCharge}
                              </li>
                            </>
                          )}
                          {plan.name === "C2C" && (
                            <>
                              <li>
                                Local Charge: ₹
                                {plan.localCharge + slab.localCharge}
                              </li>
                              <li>
                                Speed Charge: ₹
                                {plan.speedCharge + slab.speedCharge}
                              </li>
                            </>
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center pricingtext">
                  <Button variant="primary" >Contact Us</Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
        <div class="dnd_section_content midSection">
          <div class="dnd_container">
            <div class="dnd_column_dd_span12 ">
              <h2 class="cstm-h2 bold-font">
                <span>Superior Features To Launch Your Business Growth</span>
              </h2>

              <ul class="exclusive-features">
                <li class="flex-flow-col pl-xl pr-xl"></li>
                <li class="flex-flow-col pl-xl pr-xl">
                  <figure class="wp-block-image mb-lg center-align">
                    <img src={postship} alt="postshipimg" />
                  </figure>
                  <div class="right-side pl0">
                    <h3 class="center-align text-primry">
                      <h4>Post Ship</h4>
                    </h3>
                    <p class="center-align">
                      Get your own branded tracking page to keep buyers updated
                      and increase customer retention{" "}
                    </p>
                  </div>
                </li>

                <li class="flex-flow-col pl-xl pr-xl">
                  <figure class="wp-block-image mb-lg center-align">
                    <img src={multiuser} alt="multiuserimg"></img>
                  </figure>
                  <div class="right-side pl0">
                    <h3 class="center-align text-primry">
                      <h4>Multi User</h4>
                    </h3>
                    <p class="center-align">
                      Manage your account effortlessly by having multiple users
                      and specific user permissions
                    </p>
                  </div>
                </li>
                <li class="flex-flow-col pl-xl pr-xl">
                  <figure class="wp-block-image mb-lg center-align">
                    <img src={cre} alt="creimg" />
                  </figure>
                  <div class="right-side pl0">
                    <h3 class="center-align text-primry">
                      <h4>Courier Recommendation Engine</h4>
                    </h3>
                    <p class="center-align">
                      Choose the right courier partner based on cost, estimated
                      pickup time, service quality, and delivery performance{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
