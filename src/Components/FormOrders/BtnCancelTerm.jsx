import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const BtnCancelTerm = () => {
  const { setCart } = useContext(OrdersContext);
  const { reset } = useForm();

  const confirmarCancelar = () => {
    const confirmacion = window.confirm("¿Estás seguro de cancelar el pedido?");
    if (confirmacion) {
      cancelarOrder();
    }
  };

  const cancelarOrder = () => {
    setCart([]);
    reset();
  };

  return (
    <div className="btnCancelTerm">
      <Link
        className="button btnTerminarCancel"
        onClick={confirmarCancelar}
        to="/"
      >
        Cancelar
      </Link>
      <button className="btnTerminarPedido" type="submit">
        Terminar Pedido
      </button>
    </div>
  );
};

export default BtnCancelTerm;