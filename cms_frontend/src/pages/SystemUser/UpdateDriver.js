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

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0  10%;
     & > div {
        margin-top: 20px;
`;

const UpdateDriver = () => {
  const [driver, setDriver] = useState(initialValue);
  const { firstName, lastName, email, mobileNo, address, licenseNumber, role } =
    driver;
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadDriverDetails();
  }, []);

  const loadDriverDetails = async () => {
    const response = await getDrivers(id);
    console.log(response);
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
    <Layout>
      {" "}
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col">
            <SystemUserMenu />
          </div>
          <div className="">
            <Container injectFirst>
              <Typography variant="h4">Update Driver</Typography>
              <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  value={driver.firstName}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">Last</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="lastName"
                  value={driver.lastName}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                  id="my-input"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Mobile No.</InputLabel>
                <Input
                  name="mobileNo"
                  value={mobileNo}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input
                  name="address"
                  value={address}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">License No.</InputLabel>
                <Input
                  name="licenseNumber"
                  value={licenseNumber}
                  id="my-input"
                  onChange={(e) => onValueChange(e)}
                />
              </FormControl>
              <FormControl>
                <Button
                  variant="contained"
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
