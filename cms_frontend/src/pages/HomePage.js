import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import Layout from "../components/Layout/Layout";
//import { Carousel } from "react-responsive-carousel";
import { GrSecure } from "react-icons/gr";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import heroImg from "./images/heroImg.png";
import fastdelivery from "./images/fastdelivery.png";
import ontimedelivery from "./images/ontimedelivery.png";
import easypick from "./images/easypick.png";

import "../styles/HomePage.css";
import "../styles/hero-section.css";
const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: fastdelivery,
      desc: "Fast delivery - get your package delivered quickly",
    },

    {
      title: "Tracking",
      imgUrl: ontimedelivery,
      desc: "Track packages with ease - enter your unique number to view status.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: easypick,
      desc: "Easily schedule pickups - choose address, contact info, and time.",
    },
  ];

  return (
    <Layout title={"ASP Couriers "}>
      <section className="homepage">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h3 className="mb-3">Easy way to Book your Consignments</h3>
                <h1 className="mb-4 hero__title">
                  <span>Fast Delivery, Guaranteed!</span> <br />
                  <span> Track Your Packages with Ease</span>
                  <br />
                  <span> Affordable Shipping for Your Business</span>
                </h1>

                <h3>
                  Need to send a package? Click below to schedule a courier
                  pick-up
                </h3>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/bookconsignment"> Book Now</Link>{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="track-btn">
                    <Link to="/tracking">Track Now</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  {/* <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p> */}

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon"></span> <GrSecure /> 100%
                    secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 className="feature__subtitle mb-4">
                Why choose ASP Couriers
              </h1>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className=" mt-4 feature__text">Door to Door Shipping</p>
              <p className="feature__text">
                Efficient and affordable courier services.
              </p>
              <p className="feature__text">
                Fast and reliable courier services available.
              </p>

              <p className="feature__text">
                From small envelopes to large parcels, we've got you covered.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h3 className=" fw-bold mb-3">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default HomePage;

//carousel code
// <div>
//         <Carousel fade slide activeIndex={index} onSelect={handleSelect}>
//           <Carousel.Item className="d-block w-720 h-320">
//             <img
//               width={1024}
//               height={560}
//               className="d-block w-1024 h-200"
//               src={consignment}
//               //src="https://loremflickr.com/1024/400/courier,girl"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               width={1024}
//               height={560}
//               className="d-block w-100"
//               src={caro2}
//               alt="Second slide"
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://loremflickr.com/1024/400/parcel,courier,"
//               alt="Third slide"
//             />

//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
