import { createContext } from "react";
import DataBase from "../DataBase/DataBase";

export const OrdersContext = createContext();

export const OrderProvider = ({ children }) => {
  const products = DataBase();
  

  return (
    <OrdersContext.Provider value={{ products }}>
      {children}
    </OrdersContext.Provider>
  );
};








