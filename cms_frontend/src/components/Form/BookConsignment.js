import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../styles/BookConsignment.css";

import Layout from "./../Layout/Layout";

const BookConsignment = () => {
  const [sFirstName, setsFirstName] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [courierType, setCourierType] = useState("");
  const [courierWeight, setCourierWeight] = useState("");
  const [courierDescription, setCourierDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      sFirstName,
      senderAddress,
      senderPhone,
      receiverName,
      receiverAddress,
      receiverPhone,
      courierType,
      courierWeight,
      courierDescription,
    };

    // Send booking data to server to create a new booking
    const response = await axios.post(
      `${process.env.REACT_APP_API}/api/booking`,
      bookingData
    );

    // Generate tracking ID and redirect to order summary page with booking details as props
    const trackingId = response.data._id;
    const totalCost = calculateTotalCost(courierType, courierWeight);
    navigate("/ordersummary", {
      state: {
        booking: response.data,
        trackingId,
        totalCost,
      },
    });
  };

  const calculateTotalCost = (type, weight) => {
    // TODO: Implement function to calculate total cost based on courier type and weight
    return 100;
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        {/* Form inputs for sender, receiver, and courier details */}
        <input
          type="text"
          placeholder="Sender Name"
          value={sFirstName}
          onChange={(e) => setsFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sender Address"
          value={senderAddress}
          onChange={(e) => setSenderAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sender Phone"
          value={senderPhone}
          onChange={(e) => setSenderPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver Name"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver Address"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver Phone"
          value={receiverPhone}
          onChange={(e) => setReceiverPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Courier Type"
          value={courierType}
          onChange={(e) => setCourierType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Courier Weight"
          value={courierWeight}
          onChange={(e) => setCourierWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Courier Description"
          value={courierDescription}
          onChange={(e) => setCourierDescription(e.target.value)}
        />
        <button type="submit">Book</button>
      </form>
    </Layout>
  );
};

export default BookConsignment;
