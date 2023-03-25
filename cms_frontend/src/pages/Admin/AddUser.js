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
import AdminMenu from "../../components/Layout/AdminMenu";
import { useNavigate } from "react-router-dom";
import { addUser } from "./UserService";
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

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { firstName, lastName, email, mobileNo, address } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async (e) => {
    //t
    try {
      await addUser(user);
      navigate("/dashboard/admin/users")
    } catch (error) {}
  
  };

  // const handleCreate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const vehicleData = new FormData();
  //     vehicleData.append("vehicleType", vehicleType);
  //     vehicleData.append("model", model);
  //     vehicleData.append("color", color);
  //     vehicleData.append("chassisNumber", chassisNumber);

  //     vehicleData.append("plateNumber", plateNumber);
  //     const { data } = axios.post(
  //       `${process.env.REACT_APP_API}/api/vehicle/create-vehicle`,
  //       vehicleData
  //     );
  //     if (data?.success) {
  //       toast.error(data?.message);
  //     } else {
  //       toast.success("Vehicle Created Successfully");
  //       navigate("/dashboard/systemUser/vehicles");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("something went wrong");
  //   }
  // };

  return (
    <>
      {" "}
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu />
          </div>
          <div className="col-md-10">
            <Container>
              <Typography variant="h4">Add User</Typography>
              <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="firstName"
                  value={firstName}
                  id="my-input"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">Last</InputLabel>
                <Input
                  onChange={(e) => onValueChange(e)}
                  name="lastName"
                  value={lastName}
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
                  onClick={() => addUserDetails()}
                >
                  Add User
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

export default AddUser;
