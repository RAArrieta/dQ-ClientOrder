import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsOrders from "./Pages/ClientsOrders";
import FormOrders from "./Pages/FormOrders";
import { OrderProvider } from "./Context/OrdersContext";

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
