import { useContext, useEffect } from "react";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "./contexts/AdminActivePageContext";
import Sidebar from "./components/sidebar";
import Headbar from "./components/headbar";
import Home from "./components/home";
import Payment from "./components/payment";
import Application from "./components/application";
import ApplicationView from "./components/applicationView";
import Resources from "./components/resources";
import Notification from "./components/notification";

const AdminDashboard = () => {
  const componentMap = {
    Home: <Home />,
    Payments: <Payment />,
    Application: <Application />,
    viewApplication: <ApplicationView />,
    Resources: <Resources />,
    Notifications: <Notification />,
  };

  const { activePage } = useContext(AdminActivePageContext);
  const { setSidebarVisible } = useContext(AdminSidebarContext);

  useEffect(() => {
    setSidebarVisible(false);
  }, [activePage, setSidebarVisible]);

  const ComponentToRender = componentMap[activePage] || null;

  return (
    <>
      <div className="relative">
        <Headbar />
        <Sidebar />
        {ComponentToRender}
      </div>
    </>
  );
};

export default AdminDashboard;
