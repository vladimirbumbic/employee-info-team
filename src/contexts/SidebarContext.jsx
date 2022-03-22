import React, { useState } from 'react';

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [sideBarIsOpen, setSidebarIsOpen] = useState(true);

  const sidebarContext = {
    sidebar: sideBarIsOpen,
    setSidebar: setSidebarIsOpen,
  };

  return (
    <SidebarContext.Provider value={sidebarContext}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
