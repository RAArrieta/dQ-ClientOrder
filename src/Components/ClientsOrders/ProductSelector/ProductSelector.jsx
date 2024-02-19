import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";
import CategorySelector from "./CategorySelector";
import QuantityInput from "./QuantityInput";
import AddProduct from "./AddProduct";

const ProductSelector = () => {
  const { allCategories, selectedProducts } = useContext(OrdersContext);

  return (
    <div className="category-container">
      {allCategories.map((category) => (
        <div key={category} className="container-select">
          <CategorySelector category={category} />
          {selectedProducts[category] &&
            Object.keys(selectedProducts).length !== 0 && (
              <div>
                <div className="quantity-button-container">
                  <QuantityInput category={category} />
                </div>
                <div className="btnAgregar_container">
                  <AddProduct category={category} />
                </div>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default ProductSelector;
