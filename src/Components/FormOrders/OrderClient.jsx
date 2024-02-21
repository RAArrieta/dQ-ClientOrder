import { OrdersContext } from "../../Context/OrdersContext";
import GetDataLS from "../../DataBase/GetDataLS";
import "./OrderClient.css";
import { useContext } from "react";

const OrderClient = () => {
  const { pedidoLS } = useContext(OrdersContext);

  GetDataLS ();
  // const [pedidoLS, setPedidoLS] = useState(null);

  // useEffect(() => {
  //   const pedidoGuardado = localStorage.getItem("pedido");
  //   if (pedidoGuardado) {
  //     const pedidoParseado = JSON.parse(pedidoGuardado);
  //     setPedidoLS(pedidoParseado);
  //     // localStorage.removeItem("pedido");
  //   }
  // }, []);

  // const formatFecha = (fechaString) => {
  //   if (fechaString === "new Date().toISOString()") {
  //     return "";
  //   } else {
  //     const fecha = new Date(fechaString);
  //     return fecha.toLocaleString();
  //   }
  // };

  return (
    <div className="containerPedido">
      {pedidoLS && (
        <div className="pedido">
          <h4>Tus datos</h4>
          {/* <p>{formatFecha(pedidoLS.fecha)}</p> */}
          {pedidoLS.nombre !== "" && (
            <p className="detallePedido">Nombre: {pedidoLS.nombre}</p>
          )}
          {pedidoLS.direccion === "Retiro en Sucursal" ? (
            <p className="detallePedido">{pedidoLS.direccion}</p>
          ) : (
            <p className="detallePedido">Dirección: {pedidoLS.direccion}</p>
          )}
          {pedidoLS.observaciones !== "" && (
            <p className="detallePedido">
              Observaciones: {pedidoLS.observaciones}
            </p>
          )}
          {pedidoLS.telefono !== "" && (
            <p className="detallePedido">Teléfono: {pedidoLS.telefono}</p>
          )}
          <h4>Tu pedido:</h4>
          {pedidoLS.productos.map((el) => (
            <p className="detallePedido" key={el.id}>
              {el.quantity} {el.name}
            </p>
          ))}
          <h4 className="firma">Total: ${pedidoLS.total}</h4>
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
