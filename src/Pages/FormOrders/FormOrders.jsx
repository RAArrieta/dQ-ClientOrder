import { useContext, useEffect } from "react";
import Cart from "../../Components/ClientsOrders/Cart/Cart";
import { OrdersContext } from "../../Context/OrdersContext";

const FormOrders = () => {
  const { setCartOn } = useContext(OrdersContext);

  useEffect(()=>{
    setCartOn(false);
  }, [setCartOn])

  return (
    <div className="container">
      <Cart />
    </div>
  );
};

export default FormOrders;
