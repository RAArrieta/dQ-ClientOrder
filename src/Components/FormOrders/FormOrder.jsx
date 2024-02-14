import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { useForm } from "react-hook-form";
import { serverTimestamp } from "firebase/firestore";

const FormOrder = () => {
  const { setOrderClientOn, setOrderClient, total, cart, setCart } =
    useContext(OrdersContext);
  const { register, handleSubmit, reset } = useForm();

  const addOrderClient = (formData) => {
    const dataClient = {
      ...formData,
      productos: cart,
      total: total,
      fecha: serverTimestamp(),
      pedido: 5,
    };
    setOrderClient(dataClient);
    setOrderClientOn (true)
    setCart([]);
    reset();
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
            type="text"
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
          <button className="btnTerminarPedido" type="submit">
            Terminar Pedido
          </button>
        </form>
      )}
    </>
  );
};

export default FormOrder;
