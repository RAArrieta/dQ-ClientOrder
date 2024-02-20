import "./FormOrders.css";
import { useContext, useEffect } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import OrderClient from "../../Components/FormOrders/OrderClient";
import OptionClosedOrder from "../../Components/FormOrders/OptionClosedOrder";

const FormOrders = () => {
  const { setCartOn, orderClientOn } = useContext(OrdersContext);

  useEffect(() => {
    setCartOn(false);
  }, [setCartOn]);

  return (
    <div className="container_formOrder">
      {!orderClientOn && (<OptionClosedOrder />)}
      {orderClientOn && (<OrderClient/>)}
    </div>
  );
};

export default FormOrders;
