import { createContext, useState } from 'react';

// Crea el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado inicial del token, por defecto en true
  const [token, setToken] = useState(true);

  // Función para hacer logout y cambiar el estado del token
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
