import React from "react";

import { NavLink } from "react-router-dom";
import Vehicles from './../../pages/SystemUser/Vehicles';
const SystemUserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h5>SystemUser Panel</h5>
          <NavLink
            to="/dashboard/systemUser/create-office" 
            className="list-group-item list-group-item-action"
          >
            Create office
          </NavLink>
          <NavLink
            to="/dashboard/systemUser/create-vehicle"
            className="list-group-item list-group-item-action"
          >
            Create Vehicle
          </NavLink>
          <NavLink
            to="/dashboard/systemUser/vehicles"
            className="list-group-item list-group-item-action"
          >
            Vehicles
          </NavLink>
          <NavLink
            to="/dashboard/systemUser/create-Driver"
            className="list-group-item list-group-item-action"
          >
            Create Drivers
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SystemUserMenu;
