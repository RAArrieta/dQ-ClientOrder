import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const CategorySelector = ({
  category,
}) => {
  const { products, selectedProducts, setSelectedProducts } = useContext(OrdersContext);

  const handleCategoryChange = (category, productId) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [category]: productId,
    }));
  };

  return (
    <>
      <label className="category" htmlFor={`${category}Select`}>
        {category}:
      </label>
      <select
        id={`${category}Select`}
        onChange={(e) => handleCategoryChange (category, e.target.value)}
        value={selectedProducts[category] || ""}
      >
        <option value="">Seleccionar...</option>
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <option
              key={product.id}
              value={product.id}
              className="prodAndPrice"
            >
              {`${product.name} $${product.price}`}
            </option>
          ))}
      </select>
    </>
  );
};

export default CategorySelector;
