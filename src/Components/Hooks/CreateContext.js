import { createContext, useState } from "react";

export const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const [season, setSeason] = useState();

  const category = (options) => {
    setSeason({
      ...season,
      link: {
        ...season.link,
        ...options,
      },
    });
  };

  return (
    <OrderContext.Provider
      value={{
        season,
        category,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
