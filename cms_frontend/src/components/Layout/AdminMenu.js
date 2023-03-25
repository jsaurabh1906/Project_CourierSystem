// import React from "react";

// import { NavLink } from "react-router-dom";
// //import Vehicles from './../../pages/SystemUser/Vehicles';
// const AdminMenu = () => {
//   return (
//     <>
//       <div className="sidebartext-center">
//         <div className="sidebarlist-group">
//           <h5>Super Admin Panel</h5>
//           <NavLink
//             to="/dashboard/admin/addUser"
//             className="sidebarlist-group-item list-group-item-action"
//           >
//             Add User
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/users"
//             className="sidebarlist-group-item list-group-item-action"
//           >
//             Users
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/consignments"
//             className="sidebarlist-group-item list-group-item-action"
//           >
//             Consignments
//           </NavLink>
//           <NavLink
//             to="/dashboard/admin/consignments"
//             className="sidebarlist-group-item list-group-item-action"
//           >
//             Manage Consignments
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminMenu;
import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserPlus,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaUserEdit,
  FaUserCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css";

const AdminMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "ASP Couriers Home",
      icon: <FaTh />,
    },
    {
      path: "/dashboard/admin",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/dashboard/admin/addUser",
      name: "Add User",
      icon: <FaUserPlus />,
    },
    // {
    //   path: "/comment",
    //   name: "Update User",
    //   icon: <FaUserEdit />,
    // },
    {
      path: "/dashboard/admin/users",
      name: "All Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/All UsersList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    
    <div className="sidebarcontainer ">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebarsidebar"
      >
        <div className="sidebartop_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="sidebarlogo"
          >
            ASP COURIERS
          </h1>
          <div
            style={{ marginLeft: isOpen ? "15px" : "0px" }}
            className="sidebarbars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sidebarlink"
            activeclassName="active"
          >
            <div className="sidebaricon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="sidebarlink_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminMenu;
