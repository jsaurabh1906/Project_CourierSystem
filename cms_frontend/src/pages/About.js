import React from "react";
import Layout from "../components/Layout/Layout";
import aboutus from "./images/aboutus.jpg";
const About = () => {
  return (
    <Layout title={"About us "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={aboutus} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            ASP Couriers is a leading courier service provider, offering
            reliable and efficient delivery solutions for individuals and
            businesses. We have a team of experienced professionals who are
            committed to delivering your packages on time and with the highest
            level of care.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
