import "./ClientsOrders.css";
import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../Context/OrdersContext";
import CategorySelector from "../Components/CategorySelector";
import QuantityInput from "../Components/QuantityInput";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

const ClientsOrders = () => {
  const { products } = useContext(OrdersContext);

  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setAllCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    const newTotal = cart.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleCategoryChange = (category, productId) => {
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [category]: productId,
    }));
  };

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      const existingProductIndex = cart.findIndex(
        (item) => item.id === productId
      );

      if (existingProductIndex !== -1) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex].quantity +=
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
      <div >
        {total !== 0 &&
          cart.map((product) => (
            <CartItem 
              key={product.id}
              product={product}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))}
      </div>
      {total !== 0 && (
        <div className="ttAndBtnClsOrdr">
          <p className="total">Total: ${total}</p>
          <Link className="btnCloseOrder" to="/pedido">
            Terminar Pedido
          </Link>
        </div>
      )}

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
            <button
              onClick={() => handleAddToCart(selectedCategories[category])}
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsOrders;
