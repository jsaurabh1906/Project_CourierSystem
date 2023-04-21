import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/OrderSummary.css";
import { Button } from "react-bootstrap";

const OrderSummary = () => {
  const location = useLocation();
  console.log(location);
  const { booking, t, totalCost } = location.state;
  console.log(booking);

  const handleProceedPayment = async (e) => {
    window.alert("paymentDone");
  };
  return (
    <Layout>
      <div className="order">
        <h2>Order Summary</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div id="sender" style={{ paddingRight: "5px" }}>
            <h3>sender details</h3>
            <p>Sender Name: {booking.sFirstName}</p>
            <p>Sender Address: {booking.sAddress}</p>
            <p>Sender Phone: {booking.sMobile}</p>
          </div>
          <div id="receiver">
            <h3>receiver details</h3>

            <p>Receiver Name: {booking.rFirstName}</p>
            <p>Receiver Address: {booking.rAddress}</p>
            <p>Receiver Phone: {booking.rMobile}</p>
          </div>
        </div>
        <div id="courier">
          <h3> courier details</h3>

          <p>Courier Type: {booking.courierType}</p>
          <p>Courier Weight: {booking.cWeight}</p>
        </div>
        <Button
          className="submitBtn"
          variant="contained"
          color="primary"
          onClick={handleProceedPayment}
        >
          Proceed to Payment
        </Button>
      </div>
    </Layout>
  );
};

export default OrderSummary;
