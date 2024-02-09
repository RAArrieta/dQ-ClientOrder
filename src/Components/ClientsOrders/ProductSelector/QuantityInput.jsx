import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const QuantityInput = ({ category }) => {
  const { selectedProducts, productQuantities, setProductQuantities } = useContext(OrdersContext);

  const selectedProductId = selectedProducts[category];

  const handleQuantityChange = (category, quantity) => {
    if (category === "Pizzas") {
 
      quantity = Math.round(quantity * 2) / 2;
    }
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [selectedProducts[category]]: quantity,
    }));
  };

  return (
    <div className="labelAndInputQuantity">
      <label htmlFor={`${category}Quantity`}>Cantidad:</label>
      <input
        className="inputQuantity"
        type="number"
        id={`${category}Quantity`}
        step={category === "Pizzas" ? "0.5" : "1"} 
        value={productQuantities[selectedProductId] || 1}
        onChange={(e) =>
          handleQuantityChange(category, parseFloat(e.target.value))
        }
      />
    </div>



    // <div className="labelAndInputQuantity">
    //   <label htmlFor={`${category}Quantity`}>Cantidad:</label>
    //   <input
    //     className="inputQuantity"
    //     type="number"
    //     id={`${category}Quantity`}
    //     value={productQuantities[selectedProductId] || 1}
    //     onChange={(e) =>
    //       handleQuantityChange(category, parseInt(e.target.value, 10))
    //     }
    //   />
    // </div>
  );
};

export default QuantityInput;
