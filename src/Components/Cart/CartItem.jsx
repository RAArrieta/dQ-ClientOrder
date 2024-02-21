import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";

const CartItem = ({ product }) => {
  const { setCart } = useContext(OrdersContext);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div key={product.id} className="cart-item products-order">
      <div className="descriptionOrder">
        {product.category === "Empanadas" &&
          `
              ${product.quantity} 
              ${product.name} 
              `}
        {product.category !== "Empanadas" && (
          <div>
            <p className="descripcion">{`${product.quantity}   ${product.name}`}</p>
            <p className="descripcion">{`...Sub: $${product.price * product.quantity}`}</p>
          </div>
        )}
      </div>
      <button onClick={() => handleRemoveFromCart(product.id)}>Quitar</button>
    </div>
  );
};

export default CartItem;
