import React, {useState, createContext} from 'react';

// Create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);  // Correctly updating the state
  };

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
