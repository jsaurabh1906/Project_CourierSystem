import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";
const Offices = () => {
  const [offices, setOffices] = useState([]);

  //getall offices
  const getAllOffices = async () => {
    try {
      const { data } = await axios.get("/api/office/get-office");
      setOffices(data.offices);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllOffices();
  }, []);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <SystemUserMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All offices List</h1>
          <div className="d-flex">
            {offices?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/systemUser/office/${p.slug}`}
                className="offices-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.address}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offices;
