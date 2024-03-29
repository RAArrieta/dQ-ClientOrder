import "./AddProduct.css";
import { useContext } from "react";
import { OrdersContext } from "../../../Context/OrdersContext";

const AddProduct = ({ category }) => {
  const {
    products,
    cart,
    setCart,
    selectedProducts,
    setSelectedProducts,
    productQuantities,
    setProductQuantities,
  } = useContext(OrdersContext);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      const productIndex = cart.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          updatedCart[productIndex].quantity +=
            productQuantities[productId] || 1;
          return updatedCart;
        });
      } else {
        setCart((prevCart) => [
          ...prevCart,
          {
            ...selectedProduct,
            quantity: productQuantities[productId] || 1,
          },
        ]);
      }

      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: 1,
      }));

      setSelectedProducts((prevSelectedProducts) => ({
        ...prevSelectedProducts,
        [category]: "",
      }));
    }
    let componente = document.getElementById("refreshCart");
    componente.scrollTop = 0;
  };

  return (
    <button
      className="btnAgregar"
      onClick={() => handleAddToCart(selectedProducts[category])}
    >
      Agregar
    </button>
  );
};

export default AddProduct;
