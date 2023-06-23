import React, { createContext, useState } from 'react';

// Tworzymy kontekst za pomocą createContext
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // Definiujemy stan lub wartości, które chcemy udostępnić w kontekście
  const [value, setValue] = useState('Hello from context!');

  // Możemy zdefiniować funkcje lub metody, które również będą dostępne w kontekście
  const doSomething = () => {
    // Implementacja funkcji
  };

  return (
    // Udostępniamy wartości kontekstu za pomocą Providera kontekstu
    <MyContext.Provider value={{ value, doSomething }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
