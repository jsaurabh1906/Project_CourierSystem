import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/BookConsignment.css";

import Layout from "./../Layout/Layout";
const initialValue = {
  sFirstName: "",
  sLastName: "",
  sMobile: "",
  sEmail: "",
  sAddress: "",
  rFirstName: "",
  rLastName: "",
  rMobile: "",
  rEmail: "",
  rAddress: "",
  courierType: "",
  cWeight: "",
  transportMode: "",
  customerType: "",
};
const BookConsignment = () => {
  const [booking, setBooking] = useState(initialValue);
  const {
    sFirstName,
    sLastName,
    sMobile,
    sEmail,
    sAddress,
    rFirstName,
    rLastName,
    rMobile,
    rEmail,
    rAddress,
    courierType,
    cWeight,
    transportMode,
    customerType,
  } = booking;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const bookingHandler = async (e) => {
    //t
    try {
      await axios.post(`${process.env.REACT_APP_API}/api/booking`, booking);
      navigate("/bookconsignment/orderSummary");
    } catch (error) {}
  };

  return (
    <Layout title={"Book Consignment Now"}>
      <div className="o">
        <div className="bookingcontainer">
          <header>Book Consignment</header>
          <form action="#">
            <div className="form first">
              <div className="details personal">
                <span className="title">Sender / Pickup Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => onValueChange(e)}
                      name="sFirstName"
                      value={sFirstName}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => onValueChange(e)}
                      name="sLastName"
                      value={sLastName}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => onValueChange(e)}
                      name="sEmail"
                      value={sEmail}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      onChange={(e) => onValueChange(e)}
                      name="sMobile"
                      value={sMobile}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      onChange={(e) => onValueChange(e)}
                      name="sAddress"
                      value={sAddress}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="details personal">
                <span className="title">Receiver Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>first Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => onValueChange(e)}
                      name="rFirstName"
                      value={rFirstName}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => onValueChange(e)}
                      name="rLastName"
                      value={rLastName}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => onValueChange(e)}
                      name="rEmail"
                      value={rEmail}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      onChange={(e) => onValueChange(e)}
                      name="rMobile"
                      value={rMobile}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      onChange={(e) => onValueChange(e)}
                      name="rAddress"
                      value={rAddress}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="details ID">
                <span className="title">Courier Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Courier Type</label>
                    <select
                      name="courierType"
                      value={courierType}
                      onChange={(e) => onValueChange(e)}
                      required
                    >
                      <option disabled selected>
                        Select Courier Type
                      </option>
                      <option>Document</option>
                      <option>Non-Document</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>mode of transport</label>
                    <select
                      name="transportMode"
                      value={transportMode}
                      onChange={(e) => onValueChange(e)}
                      required
                    >
                      <option disabled selected>
                        Select mode of transport
                      </option>
                      <option>local</option>
                      <option>superfast</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>customer type</label>
                    <select
                      name="customerType"
                      value={customerType}
                      onChange={(e) => onValueChange(e)}
                      required
                    >
                      <option disabled selected>
                        Select customer type
                      </option>
                      <option>B2B</option>
                      <option>C2C</option>
                      <option>B2C</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>Consignment Weight (in kgs)</label>
                    <input
                      type="text"
                      placeholder="Enter approx wt."
                      onChange={(e) => onValueChange(e)}
                      name="cWeight"
                      value={cWeight}
                      required
                    />
                  </div>
                </div>
                <button className="submitBtn" onClick={() => bookingHandler()}>
                  <span className="btnText">Submit</span>
                  {/* <i className="uil uil-navigator" /> */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookConsignment;
