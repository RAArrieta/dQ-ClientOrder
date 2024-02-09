import { createContext, useEffect, useState } from "react";
import DataBase from "../DataBase/DataBase";
import CalculatorPrice from "../Components/ClientsOrders/CalculatorPrice/CalculatorPrice";

export const OrdersContext = createContext();

export const OrderProvider = ({ children }) => {
  // products SON TODOS LOS PRODUCTOS DE LA BASE DE DATOS
  const products = DataBase();
  // cart ES EL ARRAY DONDE CARGO LOS PRODUCTOS SELECCIONADOS
  const [cart, setCart] = useState([]);
  // total ES EL TOTAL DEL PEDIDO
  const [total, setTotal] = useState(0);
  // allCategories GUARDA LOS NOMBRES DE CADA CATEGORIA (PIZZAS, EMP...)
  const [allCategories, setAllCategories] = useState([]);
  // selectedProducts ES EL PRODUCTO SELECCIONADO SIN CARGAR
  const [selectedProducts, setSelectedProducts] = useState({});
  // productQuantities ES LA CANTIDAD DEL PRODUCTO ELEGIDO
  const [productQuantities, setProductQuantities] = useState({});
  // cartOn CONTROLA QUE SE MUESTRE TERMINAR PEDIDO
  const [cartOn, setCartOn] = useState(true);

  // CALCULA EL TOTAL DEL PEDIDO
  useEffect(() => {
    let priceEmpanadas = 0;
    // let priceResto = 0;
      
    const quantityEmpanadas = cart.reduce((accumulator, product) => {    
      if (product.category === "Empanadas") {
        return accumulator + product.quantity
      }
      return accumulator + priceEmpanadas
    }, 0);

    const priceResto = cart.reduce((accumulator, product) => {
      if (product.category !== "Empanadas") {
        return accumulator + (product.quantity*product.price);
      } 
      
    }, 0);
    
    priceEmpanadas = CalculatorPrice (quantityEmpanadas, priceEmpanadas);

    const newTotal = priceEmpanadas + priceResto
    setTotal(newTotal);
  }, [cart]);

  // CARGA A allCategories LOS NOMBRES DE LAS CATEGORIAS
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setAllCategories(uniqueCategories);
  }, [products]);

  return (
    <OrdersContext.Provider
      value={{
        products,
        cart,
        setCart,
        total,
        setTotal,
        allCategories,
        selectedProducts,
        setSelectedProducts,
        productQuantities,
        setProductQuantities,
        cartOn,
        setCartOn,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
