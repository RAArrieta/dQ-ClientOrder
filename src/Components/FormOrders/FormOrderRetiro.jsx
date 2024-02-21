import "./FormOrder.css";
import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { useForm } from "react-hook-form";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import BtnCancelTerm from "./BtnCancelTerm";

const FormOrderRetiro = () => {
  const { setOrderClientOn, setCart, total, cart, orders } =
    useContext(OrdersContext);
  const { register, handleSubmit, reset } = useForm();

  const addOrderClient = async (formData) => {
    try {
      const nuevoId =
        orders.length > 0
          ? (Number(orders[orders.length - 1].id) + 1)
              .toString()
              .padStart(3, "0")
          : "001";

      const db = getFirestore();

      const newOrder = {
        ...formData,
        productos: cart,
        total: total,
        fecha: new Date().toISOString(),
        estado: "PENDIENTE",
        pedido: nuevoId,
      };

      const orderRef = doc(db, "Pedidos", nuevoId.toString());

      await setDoc(orderRef, newOrder);

      // localStorage.setItem(`pedido`, JSON.stringify(newOrder));

      let existingOrders = JSON.parse(localStorage.getItem("pedidos")) || [];
      existingOrders.push(newOrder);
      localStorage.setItem("pedidos", JSON.stringify(existingOrders));

      setCart([]);
      reset();
      setOrderClientOn(true);
    } catch (error) {
      console.error("Error al crear el pedido: ", error);
    }
  };

  return (
    <>
      {total !== 0 && (
        <form className="formClient" onSubmit={handleSubmit(addOrderClient)}>
          <input
            className="inputForm"
            type="text"
            placeholder="Ingrese su nombre..."
            {...register("nombre")}
            required
          />
          <input
            className="inputForm"
            type="number"
            placeholder="Teléfono..."
            {...register("telefono")}
            required
          />
          <input
            className="inputForm"
            type="text"
            placeholder="Observaciones (opcional)..."
            {...register("observaciones")}
          />
          <BtnCancelTerm />
        </form>
      )}
    </>
  );
};

export default FormOrderRetiro;
