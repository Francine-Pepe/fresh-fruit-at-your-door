import { createContext, useState } from "react";

export const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const [season, setSeason] = useState();

  const setSimpleVals = (key, val) => {
    setSeason({
      ...season,
      [key]: val,
    });
  };

  return (
    <OrderContext.Provider
      value={{
        season,
        setSimpleVals,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
