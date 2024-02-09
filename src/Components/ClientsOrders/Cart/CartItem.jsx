import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const CartItem = ({ product }) => {
  const { setCart } = useContext(OrdersContext);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div key={product.id} className="cart-item products-order">
      <p className="descriptionOrder">
        {`
          ${product.quantity} 
          ${product.name} 
          Sub: $${product.price * product.quantity}
        `}
      </p>
      <button onClick={() => handleRemoveFromCart(product.id)}>Quitar</button>
    </div>
  );
};

export default CartItem;
