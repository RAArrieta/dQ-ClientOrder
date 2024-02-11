import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";
// import CalculatorPriceEmp from "../CalculatorPrice/CalculatorPriceEmp";

const CartItem = ({ product }) => {
  const { setCart } = useContext(OrdersContext);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // const priceEmpanadas = CalculatorPriceEmp (cart);
  
  return (
    <div key={product.id} className="cart-item products-order">
      <p className="descriptionOrder">
        {/* {
          (product.category === "Empanadas") &&
          `
          Empanadas
          Sub: $${priceEmpanadas}
          `
        } */}
        { 
          (product.category === "Empanadas")
          && `
              ${product.quantity} 
              ${product.name} 
              `
        }
        {
          (product.category !== "Empanadas") &&
          `
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
