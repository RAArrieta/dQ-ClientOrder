import "./FormOrders.css";
import { useContext, useEffect } from "react";
import Cart from "../../Components/ClientsOrders/Cart/Cart";
import { OrdersContext } from "../../Context/OrdersContext";
import FormOrder from "../../Components/FormOrders/FormOrder";
import OrderClient from "../../Components/FormOrders/OrderClient";

const FormOrders = () => {
  const { setCartOn, orderClientOn } = useContext(OrdersContext);

  useEffect(() => {
    setCartOn(false);
  }, [setCartOn]);

  return (
    <div className="container">
      {!orderClientOn && (
        <div>
          <Cart />
          <FormOrder />
        </div>
      )}
      {orderClientOn && (
        <div className="containerSaludo">
          <OrderClient />
        </div>
      )}
    </div>
  );
};

export default FormOrders;
