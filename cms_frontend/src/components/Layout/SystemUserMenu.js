// import React from "react";

// import { NavLink } from "react-router-dom";
// import Vehicles from './../../pages/SystemUser/Vehicles';
// const SystemUserMenu = () => {
//   return (
//     <>
//       <div className="text-center">
//         <div className="list-group">
//           <h5>SystemUser Panel</h5>
//           <NavLink
//             to="/dashboard/systemUser/create-office"
//             className="list-group-item list-group-item-action"
//           >
//             Create office
//           </NavLink>
//           <NavLink
//             to="/dashboard/systemUser/create-vehicle"
//             className="list-group-item list-group-item-action"
//           >
//             Create Vehicle
//           </NavLink>
//           <NavLink
//             to="/dashboard/systemUser/vehicles"
//             className="list-group-item list-group-item-action"
//           >
//             Vehicles
//           </NavLink>
//           <NavLink
//             to="/dashboard/systemUser/create-Driver"
//             className="list-group-item list-group-item-action"
//           >
//             Create Drivers
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SystemUserMenu;

import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

const SystemUserMenu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [auth] = useAuth();
  return (
    <>
      <nav className="main-nav h-2px">
        {/* 1st logo part  */}
        <div className="logo">
          <h3>Hii {auth?.user?.firstName}</h3>
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
              <NavLink to="/dashboard/systemUser/create-vehicle">
                Add Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/systemUser/vehicles">Vehicles</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/systemUser/create-office">
                Add Office
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/systemUser/offices">offices</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/systemUser/adddriver">Add Valets</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/systemUser/drivers">Valets</NavLink>
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

export default SystemUserMenu;
