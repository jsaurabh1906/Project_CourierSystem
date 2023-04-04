import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
// import { Select } from "antd";
// const { Option } = Select;

const CreateVehicle = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  //const vehicleTypeOptions = ["car", "truck", "van", "suv", "motorcycle"];
  const navigate = useNavigate();

  //style for input
  const inputStyle = {
    fontSize: "22px",
    lineHeight: "24px",
    height: "48px",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
    color: "00000",
  };

  const buttonStyle = {
    width: "200px",
    marginTop: "20px",
    //    background: "#fff",
    color: "#090437",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: "bold",
    //alignItems: "center",
  };
  //create Vehicle function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const vehicleData = new FormData();
      vehicleData.append("vehicleType", vehicleType);
      vehicleData.append("model", model);
      vehicleData.append("color", color);
      vehicleData.append("chassisNumber", chassisNumber);

      vehicleData.append("plateNumber", plateNumber);
      const { data } = axios.post(
        `${process.env.REACT_APP_API}/api/vehicle/create-vehicle`,
        vehicleData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Vehicle Created Successfully");
        navigate("/dashboard/systemUser/vehicles");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Vehicle"}>
      <div className="container-fluid  pt-0">
        <div className="row">
          <div className="">
            <SystemUserMenu />
          </div>
          <div className="text-center container mx-auto flex justify-center">
            <h1>Manage Vehicles</h1>

            <div className="mb-3 mt-2">
              <select
                bordered={false}
                placeholder="Select Vehicle Type "
                size="large"
                style={inputStyle}
                showSearch
                className="form-select"
                onChange={(value) => {
                  setVehicleType(value);
                }}
              >
                <option disabled={true} value="">
                  --Choose and option--
                </option>
                <option value="van">Van</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motor Cycle</option>
                <option value="truck">Truck</option>
                <option value="suv">Suv</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={model}
                placeholder="write a vehicle model"
                style={inputStyle}
                className="form-control"
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={color}
                style={inputStyle}
                placeholder="write a vehicle color"
                className="form-control"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={chassisNumber}
                style={inputStyle}
                placeholder="write a vehicle chassisNumber"
                className="form-control"
                onChange={(e) => setChassisNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={plateNumber}
                style={inputStyle}
                placeholder="write a vehicle plateNumber"
                className="form-control"
                onChange={(e) => setPlateNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary"
                style={buttonStyle}
                onClick={handleCreate}
              >
                CREATE VEHICLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateVehicle;
