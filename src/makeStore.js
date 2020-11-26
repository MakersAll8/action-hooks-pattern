import React, { useContext, useState, useMemo } from "react";

export default function makeStore() {
  const context = React.createContext();

  const Provider = ({ initialValue = {}, children }) => {
    const [state, setState] = useState(initialValue);

    const contextValue = useMemo(() => [state, setState], [state]);

    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return { Provider, useStore };
}
