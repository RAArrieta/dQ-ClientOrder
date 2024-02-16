import { useContext } from "react";
import { OrdersContext } from "../Context/OrdersContext";

const FetchProduct = (productCode) => {
  const { products } = useContext(OrdersContext);

  const foundProduct = products.find(
    (product) => Number(product.id) === productCode
  );

  return foundProduct;
};

export default FetchProduct;
