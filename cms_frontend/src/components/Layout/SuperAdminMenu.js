import React from "react";

import { NavLink } from "react-router-dom";
//import Vehicles from './../../pages/SystemUser/Vehicles';
const SuperAdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h5>Super Admin Panel</h5>
          <NavLink
            to="/dashboard/superAdmin/create-user"
            className="list-group-item list-group-item-action"
          >
            Create User
          </NavLink>
          <NavLink
            to="/dashboard/superAdmin/users"
            className="list-group-item list-group-item-action"
          >
            Vehicles
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SuperAdminMenu;
