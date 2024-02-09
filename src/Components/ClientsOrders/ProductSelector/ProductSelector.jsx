import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";
import CategorySelector from "./CategorySelector";
import QuantityInput from "./QuantityInput";
import AddProduct from "./AddProduct";

const ProductSelector = () => {
  const { allCategories } = useContext(OrdersContext);

  return (
    <>
      {allCategories.map((category) => (
        <div key={category} className="category-container">
          <CategorySelector category={category} />
          <div className="quantity-button-container">
            <QuantityInput category={category} />
            <AddProduct category={category} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSelector;
