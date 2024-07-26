import { createContext, useState } from "react";

export const AdminActivePageContext = createContext();
export const AdminSidebarContext = createContext();

const AdminActivePageProvider = (props) => {
  const [activePage, setActivePage] = useState("Home");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <AdminActivePageContext.Provider value={{ activePage, setActivePage }}>
        <AdminSidebarContext.Provider
          value={{ sidebarVisible, setSidebarVisible }}
        >
          {props.children}
        </AdminSidebarContext.Provider>
      </AdminActivePageContext.Provider>
    </>
  );
};

export default AdminActivePageProvider;
