import { createContext, useContext, useState } from "react";

export const appContext = createContext();

export const useGlobalContext = () => useContext(appContext);

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSidebar() {
    setShowSidebar(true);
  }

  function handleCloseSidebar() {
    setShowSidebar(false);
  }

  return (
    <appContext.Provider
      value={{ showSidebar, handleCloseSidebar, handleShowSidebar }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
