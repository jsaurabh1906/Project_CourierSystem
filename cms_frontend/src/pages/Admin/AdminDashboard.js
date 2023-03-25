import React from "react";
import Layout from "../../components/Layout/Layout";
import SuperAdminMenu from "../../components/Layout/SuperAdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SuperAdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>
                {" "}
                Admin Name : {auth?.user?.firstName} {auth?.user?.lastName}
              </h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.mobileNo}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
