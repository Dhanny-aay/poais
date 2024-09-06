import { createContext, useState } from "react";

export const ActivePageContext = createContext();
export const SidebarContext = createContext();
export const CategoryContext = createContext();
export const TypeContext = createContext();

const ActivePageProvider = (props) => {
  const [activePage, setActivePage] = useState("Home");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [categoryType, setCategoryType] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <ActivePageContext.Provider value={{ activePage, setActivePage }}>
        <SidebarContext.Provider value={{ sidebarVisible, setSidebarVisible }}>
          <CategoryContext.Provider value={{ categoryType, setCategoryType }}>
            <TypeContext.Provider value={{ type, setType }}>
              {props.children}
            </TypeContext.Provider>
          </CategoryContext.Provider>
        </SidebarContext.Provider>
      </ActivePageContext.Provider>
    </>
  );
};

export default ActivePageProvider;
