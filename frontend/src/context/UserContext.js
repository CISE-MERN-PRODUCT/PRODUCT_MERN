import React, { useState } from 'react';

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const userTypes = ['User', 'Moderator', 'Analyst'];
  const [user, setUser] = useState(userTypes[0]);

  const contextValue = {
    userTypes,
    user,
    setUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
