import "./App.css"
import { OrderProvider } from "./Context/OrdersContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsOrders from "./Pages/ClientsOrders/ClientsOrders";
import FormOrders from "./Pages/FormOrders/FormOrders";


function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientsOrders />} />
          <Route path="/pedido" element={<FormOrders />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
