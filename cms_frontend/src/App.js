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
import AddOffice from "./pages/SystemUser/AddOffice";
import CreateVehicle from "./pages/SystemUser/CreateVehicle";
import Vehicles from "./pages/SystemUser/Vehicles";
import UpdateVehicle from "./pages/SystemUser/UpdateVehicle";
import AddUser from "./pages/Admin/AddUser";
import AllUsers from "./pages/Admin/AllUsers";
import UpdateUser from "./pages/Admin/UpdateUser";
import AddDriver from "./pages/SystemUser/AddDriver";
import AllDrivers from "./pages/SystemUser/AllDrivers";
import UpdateDriver from "./pages/SystemUser/UpdateDriver";
import AllOffices from "./pages/SystemUser/AllOffices";
import UpdateOffice from "./pages/SystemUser/UpdateOffice";
import BookConsignment from "./components/Form/BookConsignmentcopy";
import OrderSummary from "./pages/OrderSummary";
import Parent from "./Parent";
//import BookingForm from "./components/Form/BookingForm";
function App() {
  return (
    <>
      <>
        {/* <Parent /> */}
        {/* 3:25 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookconsignment" element={<BookConsignment />} />
          {/* <Route path="/bookconsignment" element={<BookingForm />}> */}
          <Route path="/orderSummary" element={<OrderSummary />} />

          {/* here first private rote will be checked if all right navigate to dashboard */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/addUser" element={<AddUser />} />
            <Route path="admin/users" element={<AllUsers />} />
            <Route path="admin/updateuser/:id" element={<UpdateUser />} />
          </Route>

          <Route path="/dashboard" element={<SystemUserRoute />}>
            <Route path="systemUser" element={<SystemUserDashboard />} />
            <Route path="systemUser/addoffice" element={<AddOffice />} />
            <Route path="systemUser/offices" element={<AllOffices />} />
            <Route
              path="systemUser/updateoffice/:id"
              element={<UpdateOffice />}
            />
            <Route
              path="systemUser/create-vehicle"
              element={<CreateVehicle />}
            />
            <Route path="systemUser/vehicles" element={<Vehicles />} />
            <Route path="systemUser/vehicle/:_id" element={<UpdateVehicle />} />
            <Route path="systemUser/adddriver" element={<AddDriver />} />
            <Route path="systemUser/drivers" element={<AllDrivers />} />
            <Route
              path="systemUser/updatedriver/:id"
              element={<UpdateDriver />}
            />
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
