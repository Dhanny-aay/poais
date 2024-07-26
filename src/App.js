import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/landing";
import Login from "./auth/login";
import Signup from "./auth/signup";
import ConfirmCode from "./auth/confirmCode";
import Dashboard from "./dashboard/dashboard";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm-code" element={<ConfirmCode />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
