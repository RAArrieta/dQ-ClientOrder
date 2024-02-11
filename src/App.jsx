import "./App.css"
import { OrderProvider } from "./Context/OrdersContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsOrders from "./Pages/ClientsOrders/ClientsOrders";
import FormOrders from "./Pages/FormOrders/FormOrders";
import Header from "./Components/ClientsOrders/Header/Header";



function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ClientsOrders />} />
          <Route path="/pedido" element={<FormOrders />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
