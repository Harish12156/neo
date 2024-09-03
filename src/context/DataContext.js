import React, { createContext, useState } from 'react';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <DataContext.Provider value={{ isOpen, setIsOpen, isLogedIn, setIsLogedIn }}>
      {children}
    </DataContext.Provider>
  );
};


export default DataContext;
