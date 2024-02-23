import "./Cart.css";
import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CalculatorPriceEmp from "../ClientsOrders/CalculatorPrice/CalculatorPriceEmp";

const Cart = () => {
  const { cart, total, cartOn } = useContext(OrdersContext);
  const priceEmpanadas = CalculatorPriceEmp(cart);

  console.log(cartOn)

  return (
    <div className="ajusto-container-cart">
      <div className="container-cart">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        {priceEmpanadas !== 0 && (
          <p className="cart-item products-order descriptionOrderEmp">
            Empanadas ...Sub: ${priceEmpanadas}
          </p>
        )}
        <div className="ttAndBtnClsOrdr">
          <p className="total">Total: ${total}</p>
          {cartOn ? (
            <Link className="btnCloseOrder" to="/pedido">
              Comprar
            </Link>
          ) : (
            <Link className="btnCloseOrder" to="/">
              Volver
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
