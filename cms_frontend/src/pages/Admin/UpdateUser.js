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
import AdminMenu from "../../components/Layout/AdminMenu";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getUsers } from "./UserService";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  address: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0  10%;
     & > div {
        margin-top: 20px;
`;

const UpdateUser = () => {
  const [user, setUser] = useState(initialValue);
  const { firstName, lastName, email, mobileNo, address } = user;
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    console.log(response);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUserDetails = async (e) => {
    //t
    try {
      const response = await updateUser(id, user);
      navigate("/dashboard/admin/users");
    } catch (error) {}
  };

  return (
    <>
      {" "}
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu />
          </div>
          <div className="col-md-10">
            <Container injectFirst>
              <Typography variant="h4">Update User</Typography>
              <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  value={user.firstName}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">Last</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="lastName"
                  value={user.lastName}
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateUserDetails()}
                >
                  Update User
                </Button>
              </FormControl>
            </Container>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
