import "./FormOrders.css";
import { useContext, useEffect } from "react";
import Cart from "../../Components/ClientsOrders/Cart/Cart";
import { OrdersContext } from "../../Context/OrdersContext";
import OrderClient from "../../Components/FormOrders/OrderClient";
import OptionClosedOrder from "../../Components/FormOrders/OptionClosedOrder";

const FormOrders = () => {
  const { setCartOn, orderClientOn } = useContext(OrdersContext);

  useEffect(() => {
    setCartOn(false);
  }, [setCartOn]);

  return (
    <div >
      {!orderClientOn && (
        <div>
          <Cart />
          <OptionClosedOrder />
        </div>
      )}
      {orderClientOn && (
        <div className="containerPedido">
          <OrderClient />
        </div>
      )}
    </div>
  );
};

export default FormOrders;
