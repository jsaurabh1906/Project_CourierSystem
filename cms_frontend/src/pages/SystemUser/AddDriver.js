import React, { useState } from "react";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addDriver } from "./DriverService";
import SystemUserMenu from "./../../components/Layout/SystemUserMenu";
import Layout from "./../../components/Layout/Layout";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  address: "",
  licenseNumber: "",
  role: "deliveryValet",
};
const divStyle = {
  // background: "linear-gradient(to right bottom, #8e72dc, #3e8ece)",
  //background: 'linear-gradient(to right bottom, #1d2671, #6b1d71, #b11d4c, #ff2f0e, #ffa700)',
  backgroundColor: "rgb(255 223 246)",
};
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
  color: "#333",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
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

const AddDriver = () => {
  const [driver, setDriver] = useState(initialValue);
  const { firstName, lastName, email, mobileNo, address, licenseNumber, role } =
    driver;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const addDriverDetails = async (e) => {
    //t
    try {
      await addDriver(driver);
      navigate("/dashboard/systemUser/drivers");
    } catch (error) {}
  };

  return (
    <Layout title={"Dashboard - Add Drivers"}>
      {" "}
      <div className="container-fluid m-3 p-3 ">
        <div className="row">
          <div className="col-md-12">
            <SystemUserMenu />
          </div>
          <div className="col-md m-3 mt-0" style={divStyle}>
            <Container style={formStyle}>
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontStyle: "italic",
                  fontWeight: "Bold",
                }}
              >
                Add Driver
              </Typography>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  First Name
                </InputLabel>
                <Input
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  value={firstName}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Last
                </InputLabel>
                <Input
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
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
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Mobile No.
                </InputLabel>
                <Input
                  style={inputStyle}
                  name="mobileNo"
                  value={mobileNo}
                  id="my-input"
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
                  License Number
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
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Role
                </InputLabel>
                <Input
                  style={inputStyle}
                  name="role"
                  value="deliveryValet"
                  id="my-input"
                  hidden
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  color="primary"
                  onClick={() => addDriverDetails()}
                >
                  Add User
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

export default AddDriver;
