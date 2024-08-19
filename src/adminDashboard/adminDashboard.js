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
import User from "./components/user";
import Staffs from "./components/staffs";
import ViewStaff from "./components/viewStaff";
import Location from "./components/location";
import ViewVillages from "./components/viewVillages";
import RolesAndPermision from "./components/rolesAndPermission";
import Permits from "./components/permits";

const AdminDashboard = () => {
  const componentMap = {
    Home: <Home />,
    Payments: <Payment />,
    Application: <Application />,
    Users: <User />,
    Staffs: <Staffs />,
    Permits: <Permits />,
    viewStaff: <ViewStaff />,
    viewApplication: <ApplicationView />,
    Resources: <Resources />,
    Notifications: <Notification />,
    Locations: <Location />,
    viewVillages: <ViewVillages />,
    RolesandPermissions: <RolesAndPermision />,
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
