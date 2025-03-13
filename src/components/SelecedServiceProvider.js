import React, { createContext, useState, useContext } from 'react';

// Create a context for the selected service
const SelectedServiceContext = createContext();

// Create a provider component
export const SelectedServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <SelectedServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </SelectedServiceContext.Provider>
  );
};

// Create a custom hook to use the selectedService context
export const useSelectedService = () => {
  return useContext(SelectedServiceContext);
};
