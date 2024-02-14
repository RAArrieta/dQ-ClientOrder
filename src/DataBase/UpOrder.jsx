import { useContext } from "react";
import { OrdersContext } from "../Context/OrdersContext";
import { doc, updateDoc } from "firebase/firestore";
import db from "./Firebase";

const UpOrder = async () => {
  const { orderClient } = useContext(OrdersContext);

  try {
    const orderClientRef = doc(db, "Pedidos");
    await updateDoc(orderClientRef, { pedido: orderClient });
    console.log("Estado actualizado en Firebase");
  } catch (error) {
    console.error("Error al actualizar el estado en Firebase", error);
  }
};

export default UpOrder;
