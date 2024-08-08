import React, { createContext, useState } from 'react';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <DataContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
};


export default DataContext;
