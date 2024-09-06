import { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import ApplicationProvider from "./context/applicationContext";
import VerifyResponseProvider from "./context/verifyContext";
import PaymentResponseProvider from "./context/paymentContext";
import { useFetchTransactionContext } from "../UtilFunctions/FetchTransactions";
import { ValidationProvider } from "./context/ValidationContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { transactions, fetchPermitTransactions, loadingTransactions } =
    useFetchTransactionContext();

  useEffect(() => {
    // Get the item from localStorage
    const storedItem = localStorage.getItem("poais_token");
    // Set the token if it exists
    if (storedItem) {
      // do nothing
      console.log(storedItem);
    } else {
      navigate("/login");
    }
  }, []);

  // useEffect(() => {
  //   fetchPermitApplications();
  // }, []); // Fetch applications on component mount
  // console.log(applications);

  useEffect(() => {
    fetchPermitTransactions();
  }, []); // Fetch applications on component mount

  console.log(transactions);

  const componentMap = {
    Home: (
      <Home
        transactions={transactions}
        loadingTransactions={loadingTransactions}
      />
    ),
    Application: <Application />,
    Payments: (
      <Payment
        transactions={transactions}
        loadingTransactions={loadingTransactions}
      />
    ),
    Validation: <PermitValidation />,
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
      <ValidationProvider>
        <PaymentResponseProvider>
          <VerifyResponseProvider>
            <ApplicationProvider>
              <div className="relative">
                <Headbar />
                <Sidebar />
                {ComponentToRender}
              </div>
            </ApplicationProvider>
          </VerifyResponseProvider>
        </PaymentResponseProvider>
      </ValidationProvider>
    </>
  );
};

export default Dashboard;
