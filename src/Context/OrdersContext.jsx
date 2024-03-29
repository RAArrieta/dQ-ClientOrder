import { createContext, useEffect, useState } from "react";
import DataBase from "../DataBase/DataBase";
import CalculatorPriceEmp from "../Components/ClientsOrders/CalculatorPrice/CalculatorPriceEmp";
import CalculatorPriceResto from "../Components/ClientsOrders/CalculatorPrice/CalculatorPriceResto";
import FetchOrder from "../DataBase/FetchOrder";

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
  const [productQuantities, setProductQuantities] = useState(1);
  // cartOn CONTROLA QUE SE MUESTRE TERMINAR PEDIDO
  const [cartOn, setCartOn] = useState(true);

  const orders = FetchOrder();

  // pedidoLS es el pedido conseguido de localStorage
  const [pedidoLS, setPedidoLS] = useState(null);
  const [orderClientOn, setOrderClientOn] = useState(false);

  // CALCULA EL TOTAL DEL PEDIDO
  useEffect(() => {
    const priceEmpanadas = CalculatorPriceEmp(cart);
    const priceResto = CalculatorPriceResto(cart);

    const newTotal = priceEmpanadas + priceResto;
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
        orders,
        orderClientOn,
        setOrderClientOn,
        pedidoLS, 
        setPedidoLS
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
