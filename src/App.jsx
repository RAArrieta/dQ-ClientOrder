import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./Context/OrdersContext"; // Importamos OrderProvider, no DataProvider
import ClientsOrders from "./Pages/ClientsOrders/ClientsOrders";
import FormOrders from "./Pages/FormOrders/FormOrders";
import Header from "./Components/ClientsOrders/Header/Header";

function App() {
  return (
    <OrderProvider> {/* Usamos OrderProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ClientsOrders />} />
          <Route path="/pedido" element={<FormOrders />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;


