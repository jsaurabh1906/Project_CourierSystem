import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
import { Select } from "antd";
const { Option } = Select;

const UpdateVehicle = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [id, setId] = useState("");
  //  const [shipping, setShipping] = useState("");
  //const vehicleTypeOptions = ["car", "truck", "van", "suv", "motorcycle"];
  const navigate = useNavigate();
  const params = useParams();

  //get single vehicle
  const getSingleVehicle = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/vehicle/get-vehicle/${params._id}`
      );
      setVehicleType(data.vehicle.vehicleType);
      setId(data.vehicle._id);
      setModel(data.vehicle.model);
      setColor(data.vehicle.color);
      setChassisNumber(data.vehicle.chassisNumber);
      setPlateNumber(data.vehicle.plateNumber);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVehicle();
    //eslint-disable-next-line
  }, []);

  //create vehicle function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const vehicleData = new FormData();
      vehicleData.append("vehicleType", vehicleType);
      vehicleData.append("model", model);
      vehicleData.append("color", color);
      vehicleData.append("chassisNumber", chassisNumber);

      vehicleData.append("plateNumber", plateNumber);
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/vehicle/update-vehicle/${id}`,
        vehicleData
      );
      if (data?.success) {
        toast.success("Vehicle Created Successfully");
        navigate("/dashboard/systemUser/vehicles");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Update Vehicle"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SystemUserMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Vehicles</h1>

            <div className="mb-3 mt-2">
              <Select
                bordered={false}
                placeholder="Select Vehicle Type "
                size="large"
                value={vehicleType}
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
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={model}
                placeholder="write a vehicle model"
                className="form-control"
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={color}
                placeholder="write a vehicle color"
                className="form-control"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={chassisNumber}
                placeholder="write a vehicle chassisNumber"
                className="form-control"
                onChange={(e) => setChassisNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={plateNumber}
                placeholder="write a vehicle plateNumber"
                className="form-control"
                onChange={(e) => setPlateNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update VEHICLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateVehicle;
