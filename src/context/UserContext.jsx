import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Control del token
  const [username, setUsername] = useState("Juan"); // Ejemplo de nombre de usuario

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, username, logout }}>
      {children}
    </UserContext.Provider>
  );
};
