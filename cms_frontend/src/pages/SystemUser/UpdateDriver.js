import React, { useState, useEffect } from "react";
//import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { updateDriver, getDrivers } from "./DriverService";
import SystemUserMenu from "./../../components/Layout/SystemUserMenu";
import Layout from "../../components/Layout/Layout";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  address: "",
  licenseNumber: "",
  role: "deliveryValet",
};
// const divStyle = {
//   // background: "linear-gradient(to right bottom, #8e72dc, #3e8ece)",
//   //background: 'linear-gradient(to right bottom, #1d2671, #6b1d71, #b11d4c, #ff2f0e, #ffa700)',
//   backgroundColor: "rgb(255 223 246)",
// };
const formStyle = {
  //background: "linear-gradient(to bottom right, #a2ded0, #f0a5a5)",
  // background:   "linear-gradient(to right, #4a00e0, #8e2de2, #c55de4, #f87d87, #ffac9c)",
  background: "linear-gradient(to bottom right, #6ebc49, #009ecd)",

  padding: "30px",
  borderRadius: "10px",
  // display: "flex",
  //flexDirection: "column",
  //alignItems: "center",
};

const buttonStyle = {
  width: "200px",
  marginTop: "20px",
  background: "#fff",
  color: "#456",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "bolder",
  //alignItems: "center",
};

const Container = styled(FormGroup)`
       width: 50%;
       margin: 5% 0 5%  25%;
        & > div {
           margin-top: 15px;
           display: 'flex',
           flexDirection: 'column',
      //     alignItems: 'center',
          
          
  
  `;
const labelStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  paddingBottom: "2px",
};

const inputStyle = {
  fontSize: "2rem",
  color: "#fef",
};

const UpdateDriver = () => {
  const [driver, setDriver] = useState(initialValue);
  const { firstName, lastName, email, mobileNo, address, licenseNumber, role } =
    driver;
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadDriverDetails();
//eslint-disable-next-line
  }, []);

  const loadDriverDetails = async () => {
    const response = await getDrivers(id);
    // console.log(response);
    setDriver(response.data);
  };
  const onValueChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const updateDriverDetails = async (e) => {
    //t
    try {
      const response = await updateDriver(id, driver);
      navigate("/dashboard/systemUser/drivers");
    } catch (error) {}
  };

  return (
    <Layout title={"Dashboard - Update Drivers"}>
      {" "}
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col">
            <SystemUserMenu />
          </div>
          <div className="">
            <Container injectFirst style={formStyle}>
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontStyle: "italic",
                  fontWeight: "Bold",
                }}
              >
                Update Driver
              </Typography>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  First Name
                </InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  style={inputStyle}
                  value={firstName}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Last
                </InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  style={inputStyle}
                  name="lastName"
                  value={lastName}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Email
                </InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                  style={inputStyle}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Mobile No.
                </InputLabel>
                <Input
                  name="mobileNo"
                  value={mobileNo}
                  id="my-input"
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Address
                </InputLabel>
                <Input
                  style={inputStyle}
                  name="address"
                  value={address}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  License No.
                </InputLabel>
                <Input
                  style={inputStyle}
                  name="licenseNumber"
                  value={licenseNumber}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  color="primary"
                  onClick={() => updateDriverDetails()}
                >
                  Update Driver
                </Button>
              </FormControl>
            </Container>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateDriver;
