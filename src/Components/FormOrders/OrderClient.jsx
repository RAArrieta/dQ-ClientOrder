import "./OrderClient.css"
import { useEffect, useState } from "react";

const OrderClient = () => {
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const pedidoGuardado = localStorage.getItem("pedido");
    if (pedidoGuardado) {
      const pedidoParseado = JSON.parse(pedidoGuardado);
      setPedido(pedidoParseado);
      localStorage.removeItem("pedido");
    }
  }, []);

  return (
    <div className="containerPedido">
      {pedido && (
        <div className="pedido">
          <h4>Tus datos</h4>
          {pedido.nombre !== "" && (
            <p className="detallePedido">Nombre: {pedido.nombre}</p>
          )}
          {pedido.direccion === "Retiro en Sucursal" ? (
            <p className="detallePedido">{pedido.direccion}</p>
          ) : (
            <p className="detallePedido">Dirección: {pedido.direccion}</p>
          )}
          {pedido.observaciones !== "" && (
            <p className="detallePedido">
              Observaciones: {pedido.observaciones}
            </p>
          )}
          {pedido.telefono !== "" && (
            <p className="detallePedido">Teléfono: {pedido.telefono}</p>
          )}
          <h4>Tu pedido:</h4>
          {pedido.productos.map((el) => (
            <p className="detallePedido" key={el.id}>
              {el.quantity} {el.name}
            </p>
          ))}
          <h4 className="firma">Total: ${pedido.total}</h4>
        </div>
      )}
      <div className="saludo">
        <h3>Muchas gracias por tu compra</h3>
        <p>Te informaremos cuando este listo tu pedido...</p>
        <h4 className="firma">don Quijote</h4>
      </div>
    </div>
  );
};

export default OrderClient;
