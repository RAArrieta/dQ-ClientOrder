import React, { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const QuantityInput = ({ category }) => {
  const { selectedProducts, productQuantities, setProductQuantities } = useContext(OrdersContext);

  const handleQuantityChange = (newQuantity) => {
    if (category === "Pizzas") {
      newQuantity = Math.round(newQuantity * 2) / 2;
    }
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [selectedProducts[category]]: newQuantity,
    }));
  };

  const incrementQuantity = () => {
    const currentQuantity = productQuantities[selectedProducts[category]] || 1;
    handleQuantityChange(currentQuantity + (category === "Pizzas" ? 0.5 : 1));
  };

  const decrementQuantity = () => {
    const currentQuantity = productQuantities[selectedProducts[category]] || 1;
    const newQuantity = Math.max(0, currentQuantity - (category === "Pizzas" ? 0.5 : 1));
    handleQuantityChange(newQuantity);
  };

  return (
    <div className="labelAndInputQuantity">
      <label className="cantidad" htmlFor={`${category}Quantity`}>Cantidad</label>
      <div className="quantity-controls">
        <button onClick={decrementQuantity}>-</button>
        <input
          className="inputQuantity"
          type="number"
          id={`${category}Quantity`}
          step={category === "Pizzas" ? "0.5" : "1"} 
          value={productQuantities[selectedProducts[category]] || 1}
          onChange={(e) => handleQuantityChange(parseFloat(e.target.value))}
        />
        <button onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
};

export default QuantityInput;