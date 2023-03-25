import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SpeedPost from "./../../pages/ServicesPages/SpeedPost";
import Hyperlocal from "./../../pages/ServicesPages/Hyperlocal";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              ASP Couriers
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link ">
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/B2Bshipping">
                      B2B Shipping
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/Hyperlocal">
                      Hyperlocal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Postship">
                      Postship
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/SpeedPost">
                      SpeedPost
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Tracking">
                      Tracking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/AffordablePrice">
                      Affordable Price
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/CashOnDelivery">
                      Cash On Delivery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/ECommerceIntigration"
                    >
                      ECommerce Integration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/EmailSMS">
                      Email SMS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Packaging">
                      Packaging
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/ServiceablePincode">
                      Serviceable Pincode
                    </NavLink>
                  </li>
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      id="navbarDropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.firstName}
                    </NavLink>

                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === "superAdmin"
                              ? "admin"
                              : auth?.user?.role === "systemUser"
                              ? "systemUser"
                              : auth?.user?.role === "deliveryValet"
                              ? "deliveryValet"
                              : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
