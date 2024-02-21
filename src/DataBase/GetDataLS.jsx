import { useContext, useEffect } from "react";
import { OrdersContext } from "../Context/OrdersContext";

const GetDataLS = () => {

  const {setPedidoLS} = useContext(OrdersContext)

    useEffect(() => {
      const pedidoGuardado = localStorage.getItem("pedido");
      console.log(pedidoGuardado)
      if (pedidoGuardado) {
        const pedidoParseado = JSON.parse(pedidoGuardado);
        console.log("pedidoParseado")
        console.log(pedidoParseado)
        setPedidoLS(pedidoParseado);
        // localStorage.removeItem("pedido");
      }
    }, [setPedidoLS]);

 
    // const formatFecha = (fechaString) => {
    //   if (fechaString === "new Date().toISOString()") {
    //     return ""; // O cualquier otro tratamiento especial si es necesario
    //   } else {
    //     const fecha = new Date(fechaString);
    //     return fecha.toLocaleString(); // Formatear la fecha según el locale
    //   }
    // };


}

export default GetDataLS
