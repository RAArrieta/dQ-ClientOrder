import "./ClientsOrders.css";
import React, { useContext, useEffect } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import Cart from "../../Components/ClientsOrders/Cart/Cart";
import ProductSelector from "../../Components/ClientsOrders/ProductSelector/ProductSelector";


const ClientsOrders = () => {
  const { total, setCartOn } = useContext(OrdersContext);

  useEffect(()=>{
    setCartOn(true);
  }, [setCartOn])

  return (
    <div className="container">
      {total !== 0 && <Cart />}
      <ProductSelector />
    </div>
  );
};

export default ClientsOrders;
