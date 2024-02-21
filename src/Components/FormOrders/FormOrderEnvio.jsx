import "./FormOrder.css";
import { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { useForm } from "react-hook-form";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import BtnCancelTerm from "./BtnCancelTerm";

const FormOrderEnvio = () => {
  const { setOrderClientOn, setCart, total, cart, orders, products } =
    useContext(OrdersContext);
  const { register, handleSubmit, reset } = useForm();
  const [minTotal, setMinTotal] = useState(null);

  useEffect(() => {
    const arabe = products.find((el) => el.id === "300");
    if (arabe) {
      setMinTotal(arabe.media);
    } else {
      setMinTotal(null);
    }
  }, [products]);

  const addOrderClient = async (formData) => {
    if (minTotal <= total) {
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
      // Paso 1: Obtener pedidos existentes del almacenamiento local
      let existingOrders = JSON.parse(localStorage.getItem("pedidos")) || [];

      // Paso 2: Agregar el nuevo pedido a la lista de pedidos existentes
      existingOrders.push(newOrder);

      // Paso 3: Almacenar la lista actualizada de pedidos en el almacenamiento local
      localStorage.setItem("pedidos", JSON.stringify(existingOrders));

        setCart([]);
        reset();
        setOrderClientOn(true);
      } catch (error) {
        console.error("Error al crear el pedido: ", error);
      }
    } else {
      alert(`Su pedido debe superar los $${minTotal} para el envío...`);
    }
  };

  return (
    <>
      {total !== 0 && (
        <form className="formClient" onSubmit={handleSubmit(addOrderClient)}>
          <input
            className="inputForm"
            type="text"
            placeholder="Ingrese su dirección..."
            {...register("direccion")}
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
          <input
            className="inputForm"
            type="text"
            placeholder="Ingrese su nombre..."
            {...register("nombre")}
          />
          <BtnCancelTerm />
        </form>
      )}
    </>
  );
};

export default FormOrderEnvio;
