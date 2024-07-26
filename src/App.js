import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/landing";
import Login from "./auth/login";
import Signup from "./auth/signup";
import ConfirmCode from "./auth/confirmCode";
import Dashboard from "./dashboard/dashboard";
import AdminLogin from "./adminDashboard/login";
import AdminDashboard from "./adminDashboard/adminDashboard";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm-code" element={<ConfirmCode />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
