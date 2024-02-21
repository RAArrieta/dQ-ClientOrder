import "./ProductSelector.css";
import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";
import CategorySelector from "./CategorySelector";
import QuantityInput from "./QuantityInput";
import AddProduct from "./AddProduct";

const ProductSelector = () => {
  const { allCategories, selectedProducts } = useContext(OrdersContext);

  return (
    <>
      {allCategories.map((category) => (
        <div key={category} className="container-select">
          <CategorySelector category={category} />
          {selectedProducts[category] &&
            Object.keys(selectedProducts).length !== 0 && (
              <div className="container-quantity-addprod">
                <QuantityInput className="quantity-button-container" category={category} />
                <AddProduct category={category} />
              </div>
            )}
        </div>
      ))}
    </>
  );
};

export default ProductSelector;
