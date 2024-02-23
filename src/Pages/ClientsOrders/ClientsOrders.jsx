import "./ClientsOrders.css";
import React, { useContext, useEffect } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import Cart from "../../Components/Cart/Cart";
import ProductSelector from "../../Components/ClientsOrders/ProductSelector/ProductSelector";
// import GetDataLS from "../../DataBase/GetDataLS";

const ClientsOrders = () => {
  const { total, setCartOn, setOrderClientOn } = useContext(OrdersContext);

  // GetDataLS ();

  useEffect(() => {
    setCartOn(true);
    setOrderClientOn(false);
  }, [setCartOn, setOrderClientOn]);

  return (
    <div id="refreshCart" className="container_cart_productSelector">
      {total !== 0 && <Cart />}
      <ProductSelector />
    </div>
  );
};

export default ClientsOrders;
