import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const CategorySelector = ({ category }) => {
  const { products, selectedProducts, setSelectedProducts } =
    useContext(OrdersContext);

  const handleCategoryChange = (category, productId) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [category]: productId,
    }));
  };

  return (
    <>
      <select
        className={`selectInput ${
          category === "Pizzas" ? "selectInputPizzas" :
          category === "Sandwichs" ? "selectInputSandwichs" :
          category === "Empanadas" ? "selectInputEmpanadas" :
          category === "Minutas" ? "selectInputMinutas" :
          category === "Bebidas" ? "selectInputBebidas" : ""
        }`}
        id={`${category}Select`}
        onChange={(e) => handleCategoryChange(category, e.target.value)} 
        value={selectedProducts[category] || ""}
      >
        <option value="">{category}</option>
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
