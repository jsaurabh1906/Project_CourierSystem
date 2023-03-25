import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const getAllVehicles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/vehicle/get-vehicle`
      );
      setVehicles(data.vehicles);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <Layout title={"Dashboard - Create Vehicle"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SystemUserMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Vehicles</h1>
            <div>
              <table className="table w-80 m-3">
                <thead>
                  <tr>
                    <th scope="col">Vehicle ID</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Model</th>
                    <th scope="col">Color</th>
                    <th scope="col">Plate Number</th>
                    <th scope="col">Chassis Number</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles?.map((v) => (
                    <>
                      <tr>
                        <td>{v._id}</td>
                        <td>{v.vehicleType}</td>
                        <td>{v.model}</td>
                        <td>{v.color}</td>
                        <td>{v.plateNumber}</td>
                        <td>{v.chassisNumber}</td>

                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={handleUpdate}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vehicles;
