import React, { useState } from "react";

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
import { addOffice } from "./OfficeService";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
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
const divStyle = {
  // background: "linear-gradient(to right bottom, #8e72dc, #3e8ece)",
  //background: 'linear-gradient(to right bottom, #1d2671, #6b1d71, #b11d4c, #ff2f0e, #ffa700)',
  backgroundColor: "rgb(190 229 205)",
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

const AddOffice = () => {
  const [office, setOffice] = useState(initialValue);
  const { name, address, contact, email } = office;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setOffice({ ...office, [e.target.name]: e.target.value });
  };

  const addOfficeDetails = async (e) => {
    //t
    try {
      await addOffice(office);
      navigate("/dashboard/systemUser/offices");
    } catch (error) {}
  };

  return (
    <Layout title={"Dashboard - Add Office"}>
      {" "}
      <div className="container-fluid ">
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
                Add Office
              </Typography>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Office Name
                </InputLabel>
                <Input
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  value={name}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Address
                </InputLabel>
                <Input
                  style={inputStyle}
                  onChange={(e) => onValueChange(e)}
                  name="address"
                  value={address}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input" style={labelStyle}>
                  Office Email
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
                  Contact No.
                </InputLabel>
                <Input
                  style={inputStyle}
                  name="contact"
                  value={contact}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              {/* <FormControl>
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
              </FormControl> */}
              {/* <FormControl>
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
              </FormControl> */}
              <FormControl>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  color="primary"
                  onClick={() => addOfficeDetails()}
                >
                  Add Office
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

export default AddOffice;
