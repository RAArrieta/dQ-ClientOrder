import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";

const OrderClient = () => {
  const { orderClient } = useContext(OrdersContext);

  console.log(orderClient.productos);
  const productos = orderClient.productos;
  return (
    <div>
      <h2>Muchas gracias por tu compra</h2>
      <p>Tu pedido lo entregaremos a la brevedad...</p>
      <hr />
      <h4>Número de Pedido: {orderClient.pedido}</h4>
      {
        productos.map ((el, index)=>{
          return (<p key={index}>{el.quantity} {el.name}</p>)
        })
      }
      <h3>Total: ${orderClient.total}</h3>
    </div>
  );
};

export default OrderClient;
