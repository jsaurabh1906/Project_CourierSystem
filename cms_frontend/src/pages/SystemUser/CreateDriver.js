import React from "react";
import Layout from "../../components/Layout/Layout";
import SystemUserMenu from "../../components/Layout/SystemUserMenu";

const CreateDriver = () => {
  return (
    <Layout title={"Dashboard - Create Driver"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SystemUserMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Driver</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateDriver;
