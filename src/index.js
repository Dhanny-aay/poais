import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ActivePageProvider from "./dashboard/context/ActivePageContext";
import AdminActivePageProvider from "./adminDashboard/contexts/AdminActivePageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AdminActivePageProvider>
      <ActivePageProvider>
        <Router>
          <App />
        </Router>
      </ActivePageProvider>
    </AdminActivePageProvider>
  </React.StrictMode>
);
