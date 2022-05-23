import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/DashBoard/AddDoctor";
import DashBoard from "./Pages/DashBoard/DashBoard";
import History from "./Pages/DashBoard/History";
import ManageDoctors from "./Pages/DashBoard/ManageDoctors";
import MyAppointments from "./Pages/DashBoard/MyAppointments";
import MyReviews from "./Pages/DashBoard/MyReviews";
import Pyament from "./Pages/DashBoard/Pyament";
import Users from "./Pages/DashBoard/Users";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Home/Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <div className="App max-w-7xl px-12 justify-center">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          {/* index route ta hocche ar ki ei dashboard e gele se sobsomoy default dekhabe nested route hishebe jemon amra home ke default hishebe dekhai / eta diye kintu nested route e default hishebe dekhate hobe index route diye. ar onno sobaike link kore jete hobe. */}
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="myreviews" element={<MyReviews></MyReviews>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Pyament></Pyament>}></Route>
          {/* nested route e path set korar somoy / dile error dibe. */}
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;
