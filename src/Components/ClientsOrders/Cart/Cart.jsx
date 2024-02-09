import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


const Cart = () => {
  const { cart, total, cartOn } = useContext(OrdersContext);

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="ttAndBtnClsOrdr">
        <p className="total">Total: ${total}</p>
        {cartOn ? (
          <Link className="btnCloseOrder" to="/pedido">
            Terminar Pedido
          </Link>)
          :
          (<Link className="btnCloseOrder" to="/">
            Volver
          </Link>
        )}
      </div>
    </>
  );
};

export default Cart;
