import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { useForm } from "react-hook-form";
import { serverTimestamp, getFirestore, doc, setDoc } from "firebase/firestore";
import BtnCancelTerm from "./BtnCancelTerm";

const FormOrderEnvio = () => {
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

      const subo = {
        ...formData,
        productos: cart,
        total: total,
        fecha: serverTimestamp(),
      };

      const orderRef = doc(db, "Pedidos", nuevoId.toString());

      await setDoc(orderRef, subo);

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


















// import { useContext } from "react";
// import { OrdersContext } from "../../Context/OrdersContext";
// import { useForm } from "react-hook-form";
// import { serverTimestamp, getFirestore, doc, setDoc } from "firebase/firestore";

// const FormOrderEnvio = () => {
//   const { setOrderClientOn, setCart, total, cart, orders } =
//     useContext(OrdersContext);
//   const { register, handleSubmit, reset } = useForm();

//   const addOrderClient = async (formData) => {
//     try {
//       const nuevoId =
//         orders.length > 0
//           ? (Number(orders[orders.length - 1].id) + 1)
//               .toString()
//               .padStart(3, "0")
//           : "001";

//       const db = getFirestore();

//       const subo = {
//         ...formData,
//         productos: cart,
//         total: total,
//         fecha: serverTimestamp(),
//       };

//       const orderRef = doc(db, "Pedidos", nuevoId.toString());

//       await setDoc(orderRef, subo);

//       setCart([]);
//       reset();
//       setOrderClientOn(true);
//     } catch (error) {
//       console.error("Error al crear el pedido: ", error);
//     }
//   };

//   const cancelarOrder = () => {
//     setCart([]);
//     reset();
//   }

//   return (
//     <>
//       {total !== 0 && (
//         <form className="formClient" onSubmit={handleSubmit(addOrderClient)}>
//           <input
//             className="inputForm"
//             type="text"
//             placeholder="Ingrese su dirección..."
//             {...register("direccion")}
//             required
//           />
//           <input
//             className="inputForm"
//             type="number"
//             placeholder="Teléfono..."
//             {...register("telefono")}
//             required
//           />
//           <input
//             className="inputForm"
//             type="text"
//             placeholder="Observaciones (opcional)..."
//             {...register("observaciones")}
//           />
//           <input
//             className="inputForm"
//             type="text"
//             placeholder="Ingrese su nombre..."
//             {...register("nombre")}
//           />
//           <button className="btnTerminarCancel" onClick={cancelarOrder}>Cancelar</button>
//           <button className="btnTerminarPedido" type="submit">
//             Terminar Pedido
//           </button>
//         </form>
//       )}
//     </>
//   );
// };

// export default FormOrderEnvio;