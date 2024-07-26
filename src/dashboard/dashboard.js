import { useContext, useEffect } from "react";
import Headbar from "./components/headbar";
import Sidebar from "./components/sidebar";
import { ActivePageContext, SidebarContext } from "./context/ActivePageContext";
import Home from "./components/home";
import Application from "./components/application";
import Payment from "./components/payment";
import PermitValidation from "./components/permitValidation";
import Resources from "./components/resources";
import Notification from "./components/notification";
import EditApplication from "./components/editApplication";
import Settings from "./components/settings";

const Dashboard = () => {
  const componentMap = {
    Home: <Home />,
    MyApplication: <Application />,
    Payments: <Payment />,
    PermitValidation: <PermitValidation />,
    Resources: <Resources />,
    Notifications: <Notification />,
    editApplication: <EditApplication />,
    Settings: <Settings />,
  };

  const { activePage } = useContext(ActivePageContext);
  const { setSidebarVisible } = useContext(SidebarContext);

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

export default Dashboard;
