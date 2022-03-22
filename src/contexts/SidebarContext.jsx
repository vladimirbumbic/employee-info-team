import React, { useState } from 'react';

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
