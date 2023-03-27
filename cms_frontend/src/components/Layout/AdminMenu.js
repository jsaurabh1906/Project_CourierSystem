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
// import React, { useState } from "react";
// import {
//   FaTh,
//   FaBars,
//   FaUserPlus,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
//   FaUserEdit,
//   FaUserCog,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import "../../styles/AdminMenu.css";

// const AdminMenu = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "ASP Couriers Home",
//       icon: <FaTh />,
//     },
//     {
//       path: "/dashboard/admin",
//       name: "About",
//       icon: <FaUserAlt />,
//     },
//     {
//       path: "/dashboard/admin/addUser",
//       name: "Add User",
//       icon: <FaUserPlus />,
//     },
//     // {
//     //   path: "/comment",
//     //   name: "Update User",
//     //   icon: <FaUserEdit />,
//     // },
//     {
//       path: "/dashboard/admin/users",
//       name: "All Users",
//       icon: <FaUserAlt />,
//     },
//     {
//       path: "/All UsersList",
//       name: "Product List",
//       icon: <FaThList />,
//     },
//   ];
//   return (

//     <div className="sidebarcontainer ">
//       <div
//         style={{ width: isOpen ? "200px" : "50px" }}
//         className="sidebarsidebar"
//       >
//         <div className="sidebartop_section">
//           <h1
//             style={{ display: isOpen ? "block" : "none" }}
//             className="sidebarlogo"
//           >
//             ASP COURIERS
//           </h1>
//           <div
//             style={{ marginLeft: isOpen ? "15px" : "0px" }}
//             className="sidebarbars"
//           >
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="sidebarlink"
//             activeclassName="active"
//           >
//             <div className="sidebaricon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="sidebarlink_text"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default AdminMenu;
import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>SP
            <span>C</span>OURIERS
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/admin">about</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/admin/addUser">Add User</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/admin/users">User</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/*  <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminMenu;
