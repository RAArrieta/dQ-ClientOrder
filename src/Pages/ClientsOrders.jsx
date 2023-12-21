import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../Context/OrdersContext";
import CategorySelector from "../Components/CategorySelector";
import QuantityInput from "../Components/QuantityInput";
import CartItem from "../Components/CartItem";

const ClientsOrders = () => {
  const { products } = useContext(OrdersContext);

  const [allCategories, setAllCategories] = useState([]);
const [selectedCategories, setSelectedCategories] = useState({});
const [productQuantities, setProductQuantities] = useState({});
const [cart, setCart] = useState([]);

useEffect(() => {
  // Obtener todas las categorías únicas al montar el componente
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  setAllCategories(uniqueCategories);
}, [products]);

const handleCategoryChange = (category, productId) => {
  setSelectedCategories((prevSelectedCategories) => ({
    ...prevSelectedCategories,
    [category]: productId,
  }));
};

const handleAddToCart = (productId) => {
  const selectedProduct = products.find((product) => product.id === productId);

  if (selectedProduct) {
    const existingProductIndex = cart.findIndex((item) => item.id === productId);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += productQuantities[productId] || 1;
        return updatedCart;
      });
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart((prevCart) => [
        ...prevCart,
        {
          ...selectedProduct,
          quantity: productQuantities[productId] || 1,
        },
      ]);
    }

    // Restablece la cantidad después de agregar al carrito
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: 1,
    }));
  }
};

const handleRemoveFromCart = (productId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};

const handleQuantityChange = (category, quantity) => {
  setProductQuantities((prevQuantities) => ({
    ...prevQuantities,
    [selectedCategories[category]]: quantity,
  }));
};

  return (
    <div className="container">
      {allCategories.map((category) => (
        <div key={category} className="category-container">
          <CategorySelector
            category={category}
            products={products}
            selectedCategories={selectedCategories}
            onChange={handleCategoryChange}
          />
          <div className="quantity-button-container">
            <QuantityInput
              category={category}
              selectedProductId={selectedCategories[category]}
              productQuantities={productQuantities}
              onChange={handleQuantityChange}
            />
            <button onClick={() => handleAddToCart(selectedCategories[category])}>
              Agregar
            </button>
          </div>
        </div>
      ))}

      {/* Mostrar productos seleccionados */}
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} onRemoveFromCart={handleRemoveFromCart} />
        ))}
      </div>
    </div>
  );
};

export default ClientsOrders;
