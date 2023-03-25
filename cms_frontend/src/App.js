import Layout from "./components/Layout/Layout";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/user/DashBoard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import B2BShipping from "./pages/ServicesPages/B2BShipping";
import Tracking from "./pages/ServicesPages/Tracking";
import SpeedPost from "./pages/ServicesPages/SpeedPost";
import Hyperlocal from "./pages/ServicesPages/Hyperlocal";
import Portfolio from "./pages/ServicesPages/Portfolio";
import Postship from "./pages/ServicesPages/Postship";
import Pricing from "./pages/ServicesPages/Pricing";

import AffordablePrice from "./pages/Features/AffordablePrice";
import CashOnDelivery from "./pages/Features/CashOnDelivery";
import ECommerceIntigration from "./pages/Features/ECommerceIntegration";
import EmailSMS from "./pages/Features/EmailSMS";
import Packaging from "./pages/Features/Packaging";
import ServiceablePincode from "./pages/Features/ServiceablePincode";
import SystemUserRoute from "./components/Routes/SystemUserRoute";
import DeliveryValetRoute from "./components/Routes/DeliveryValetRoute";
import SystemUserDashboard from "./pages/SystemUser/SystemUserDashboard";
import DeliveryValetDashboard from "./pages/DeliveryValet/DeliveryValetDashboard";
import CreateOffice from "./pages/SystemUser/CreateOffice";
import CreateVehicle from "./pages/SystemUser/CreateVehicle";
import CreateDriver from "./pages/SystemUser/CreateDriver";
import Vehicles from "./pages/SystemUser/Vehicles";
import UpdateVehicle from "./pages/SystemUser/UpdateVehicle";

function App() {
  return (
    <>
      <>
        {/* 3:25 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* here first private rote will be checked if all right navigate to dashboard */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
          <Route path="/dashboard" element={<SystemUserRoute />}>
            <Route path="systemUser" element={<SystemUserDashboard />} />
            <Route path="systemUser/create-office" element={<CreateOffice />} />
            <Route
              path="systemUser/create-vehicle"
              element={<CreateVehicle />}
            />
            <Route path="systemUser/vehicles" element={<Vehicles />} />
            <Route path="systemUser/vehicle/:_id" element={<UpdateVehicle />} />
            <Route path="systemUser/create-driver" element={<CreateDriver />} />
          </Route>
          <Route path="/dashboard" element={<DeliveryValetRoute />}>
            <Route path="deliveryValet" element={<DeliveryValetDashboard />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/b2bshipping" element={<B2BShipping />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/SpeedPost" element={<SpeedPost />} />
          <Route path="/Postship" element={<Postship />} />
          <Route path="/Hyperlocal" element={<Hyperlocal />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Pricing" element={<Pricing />} />

          <Route exact path="/AffordablePrice" element={<AffordablePrice />} />
          <Route exact path="/CashOnDelivery" element={<CashOnDelivery />} />
          <Route
            exact
            path="/ECommerceIntigration"
            element={<ECommerceIntigration />}
          />
          <Route exact path="/EmailSMS" element={<EmailSMS />} />
          <Route exact path="/Packaging" element={<Packaging />} />
          <Route
            exact
            path="/ServiceablePincode"
            element={<ServiceablePincode />}
          />
        </Routes>
      </>
    </>
  );
}

export default App;
