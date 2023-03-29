import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
// import "../CSS/SpeedPost.css";
import speedpost from "../images/speedpost.jpg";

function SpeedPost() {
  return (
    <Layout>
      <div className="main">
        <div className="row">
          <div className="col-md-8 order-md-2">
            <h1 className="text-center mb-4">Speedpost Service</h1>
            <p className="lead text-center mb-4">
              Send Your Packages at Lightning Speed with Our Speedpost Service
            </p>
            <p className="mb-4">
              Send your packages at lightning speed with our Speedpost service!
              With end-to-end tracking and a reliable and efficient delivery
              network, you can trust us to get your packages to their
              destination quickly and safely. Whether you're sending documents,
              parcels, or gifts, our Speedpost service is the perfect choice for
              fast and efficient delivery. Try it today and experience the
              difference!
            </p>
            <p className="mb-4">
              Our Speedpost service comes with end-to-end tracking so you can
              stay informed of your package's journey every step of the way.
              Trust us to deliver your package with the utmost care and
              efficiency. Try our Speedpost service today and experience the
              difference!
            </p>
            <Link to="/" className="btn btn-primary mb-4">
              Go back to home page
            </Link>
          </div>
          <div className="col-md-4 order-md-1">
            <img src={speedpost} alt="speedpost" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SpeedPost;
