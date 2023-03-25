import React, { useState,  } from "react";
//import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
import { Select } from "antd";
import Offices from './Offices';
const { Option } = Select;

const CreateOffice = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
 // const [plateNumber, setPlateNumber] = useState("");
  //  const [shipping, setShipping] = useState("");
//  const vehicleTypeOptions = ["car", "truck", "van", "suv", "motorcycle"];
  const navigate = useNavigate();

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const officeData = new FormData();
      officeData.append("name", name);
      officeData.append("address", address);
      officeData.append("contact", contact);
      officeData.append("email", email);

      const { data } = axios.post(
        `${process.env.REACT_APP_API}/api/office/create-office`,
        officeData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Office Created Successfully");
        navigate("/dashboard/systemUser/offices");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Office"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SystemUserMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Offices</h1>
            {/* <div classname="mb-3">
                <select
                  className="form-select mb-3"
                  placeholder="Select Vehicle Type "
                  // value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  {vehicleTypeOptions.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div> */}
            {/* <div className="mb-3 mt-2">
              <Select
                bordered={false}
                placeholder="Select Vehicle Type "
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setVehicleType(value);
                }}
              >
                <Option value="van">Van</Option>
                <Option value="car">Car</Option>
                <Option value="motorcycle">Motor Cycle</Option>
                <Option value="truck">Truck</Option>
                <Option value="suv">Suv</Option>
              </Select>
            </div>*/}
            <div className="mb-3"> 
              <input
                type="text"
                value={name}
                placeholder="write a Office Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={contact}
                placeholder="write a Office Contact"
                className="form-control"
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                placeholder="write a vehicle chassisNumber"
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={email}
                placeholder="write a vehicle plateNumber"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleCreate}>
                CREATE Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateOffice;
