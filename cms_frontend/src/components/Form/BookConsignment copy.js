import React from "react";
import "../../styles/BookConsignment.css";
import Layout from "./../Layout/Layout";
const BookConsignment = () => {
  return (
    <Layout title={"Book Consignment Now"}>
      <div className="o">
        <div className="bookingcontainer">
          <header>Book Consignment</header>
          <form action="#">
            <div className="form first">
              <div className="details personal">
                <span className="title">Sender Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
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
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-field">
                    <label>last Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>

                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
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
                    <select required>
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
                    <select required>
                      <option disabled selected>
                        Select mode of transport
                      </option>
                      <option>Document</option>
                      <option>Non-Document</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>customer type</label>
                    <select required>
                      <option disabled selected>
                        Select customer type
                      </option>
                      <option>Document</option>
                      <option>Non-Document</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>Consignment Weight (in kgs)</label>
                    <input
                      type="text"
                      placeholder="Enter approx wt."
                      required
                    />
                  </div>
                </div>
                <button className="submitBtn">
                  <span className="btnText">Submit</span>
                  <i className="uil uil-navigator" />
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

// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "../../styles/BookConsignment.css";
// import Layout from "../Layout/Layout";

// const BookConsignment = () => {
//   return (
//     <Layout title={"Book Consignment Now"}>
//       <Container>
//         <Row className="bookingcontainer">
//           <Col>
//             <h1>Book Consignment</h1>
//             <Form>
//               <Form.Group className="first">
//                 <h2>Sender Details</h2>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Label>Last Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Label>Mobile Number</Form.Label>
//                     <Form.Control
//                       type="number"
//                       placeholder="Enter mobile number"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your Address"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//               </Form.Group>
//               <Form.Group className="personal">
//                 <h2>Receiver Details</h2>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Label>Last Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Label>Mobile Number</Form.Label>
//                     <Form.Control
//                       type="number"
//                       placeholder="Enter mobile number"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your Address"
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//               </Form.Group>
//               <Form.Group className="ID">
//                 <h2>Courier Details</h2>
//                 <Form.Row>
//                   <Col>
//                     <Form.Label>Courier Type</Form.Label>
//                     <Form.Control as="select" required>
//                       <option disabled selected>
//                         Select Courier Type
//                       </option>
//                       <option>Document</option>
//                       <option>Non-Document</option>
//                       <option>Others</option>
//                     </Form.Control>
//                   </Col>
//                   <Col>
//                     <Form.Label>Consignment Weight (in kgs)</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter approx wt."
//                       required
//                     />
//                   </Col>
//                 </Form.Row>
//                 <Button type="submit" className="submitBtn">
//                   Submit
//                 </Button>
//               </Form.Group>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Layout>
//   );
// };

// export default BookConsignment;
