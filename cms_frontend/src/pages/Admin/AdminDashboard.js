import React from "react";

import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import "../../styles/AdminMenu.css";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    // <div className="admincontainer-fluid m-3 p-3 ">

    //     <div className="col-md-12">
    //       <AdminMenu />
    //     </div>
    //     <div className="">
    //       <div className="admincard w-100% p-3 display-middle">
    //         <h3>
    //           {" "}
    //           Admin Name : {auth?.user?.firstName} {auth?.user?.lastName}
    //         </h3>
    //         <h3> Admin Email : {auth?.user?.email}</h3>
    //         <h3> Admin Contact : {auth?.user?.mobileNo}</h3>
    //       </div>
    //     </div>
    //   </div>
    <>
      <div>
        <AdminMenu />
      </div>
      <div>
        <div className="admincard w-100% p-3 display-middle ">
          <h3>
            {" "}
            Admin Name : {auth?.user?.firstName} {auth?.user?.lastName}
          </h3>
          <h3> Admin Email : {auth?.user?.email}</h3>
          <h3> Admin Contact : {auth?.user?.mobileNo}</h3>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
